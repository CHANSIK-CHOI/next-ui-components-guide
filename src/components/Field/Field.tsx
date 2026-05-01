import {
  forwardRef,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useState,
  type CSSProperties,
} from "react";
import cn from "classnames";
import FieldContext, { useFieldContext } from "./Field.context";
import Message from "../Textfield/Message";

const nameBlock = "field";

type FieldGridProps = {
  children: React.ReactNode;
  className?: string;
  columns?: 1 | 2 | 3 | 4;
};

export type FieldProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  inputId?: string;
  direction?: "row" | "column";
  align?: "start" | "center";
  infoMessage?: string;
  errorMessage?: string;
  isError?: boolean;
};
type FieldLabelAsLabel = React.LabelHTMLAttributes<HTMLLabelElement> & {
  as?: "label";
};
type FieldLabelAsSpan = React.HTMLAttributes<HTMLSpanElement> & {
  as?: "span";
  htmlFor?: never;
};
export type FieldLabelProps = FieldLabelAsLabel | FieldLabelAsSpan;
export type FieldDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;
export type FieldMessageProps = {
  id?: string;
  className?: string;
  infoMessage?: string;
  errorMessage?: string;
};
export type FieldItemProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  inputId?: string;
  direction?: "row" | "column";
  align?: "start" | "center";
  infoMessage?: string;
  errorMessage?: string;
  isError?: boolean;
};

function useFieldScope({
  inputId,
  isError = false,
  errorMessage = "",
}: {
  inputId?: string;
  isError?: boolean;
  errorMessage?: string;
}) {
  const parentFieldContext = useFieldContext();
  const generatedInputId = useId();
  const generatedLabelId = useId();
  const [descriptionIds, setDescriptionIds] = useState<string[]>([]);
  const [messageIds, setMessageIds] = useState<string[]>([]);
  const resolvedInputId = inputId ?? generatedInputId;
  const resolvedIsError =
    parentFieldContext.isError || isError || Boolean(errorMessage);

  const registerDescription = useCallback((nextDescriptionId: string) => {
    setDescriptionIds((currentIds) =>
      currentIds.includes(nextDescriptionId)
        ? currentIds
        : [...currentIds, nextDescriptionId],
    );

    return () => {
      setDescriptionIds((currentIds) =>
        currentIds.filter((id) => id !== nextDescriptionId),
      );
    };
  }, []);

  const registerMessage = useCallback((nextMessageId: string) => {
    setMessageIds((currentIds) =>
      currentIds.includes(nextMessageId)
        ? currentIds
        : [...currentIds, nextMessageId],
    );

    return () => {
      setMessageIds((currentIds) =>
        currentIds.filter((id) => id !== nextMessageId),
      );
    };
  }, []);

  return useMemo(
    () => ({
      inputId: resolvedInputId,
      labelId: generatedLabelId,
      describedByIds: [
        ...parentFieldContext.describedByIds,
        ...descriptionIds,
        ...messageIds,
      ],
      isError: resolvedIsError,
      registerDescription,
      registerMessage,
    }),
    [
      descriptionIds,
      generatedLabelId,
      messageIds,
      parentFieldContext.describedByIds,
      registerDescription,
      registerMessage,
      resolvedInputId,
      resolvedIsError,
    ],
  );
}

function FieldMessageSlot({
  infoMessage = "",
  errorMessage = "",
}: Pick<FieldProps, "infoMessage" | "errorMessage">) {
  if (!infoMessage && !errorMessage) {
    return null;
  }

  return <FieldMessage infoMessage={infoMessage} errorMessage={errorMessage} />;
}

const FieldRoot = forwardRef<HTMLDivElement, FieldProps>(
  (
    {
      children,
      className,
      inputId,
      direction = "column",
      align = "start",
      infoMessage = "",
      errorMessage = "",
      isError = false,
      ...rest
    },
    ref,
  ) => {
    const fieldScope = useFieldScope({
      inputId,
      isError,
      errorMessage,
    });

    return (
      <FieldContext.Provider value={fieldScope}>
        <div
          {...rest}
          ref={ref}
          className={cn(
            nameBlock,
            `${nameBlock}--${direction}`,
            `${nameBlock}--align-${align}`,
            fieldScope.isError && "is-error",
            className,
          )}
        >
          {children}
          <FieldMessageSlot
            infoMessage={infoMessage}
            errorMessage={errorMessage}
          />
        </div>
      </FieldContext.Provider>
    );
  },
);

FieldRoot.displayName = "Field";

function FieldItem({
  children,
  className,
  inputId,
  direction = "row",
  align = "center",
  infoMessage = "",
  errorMessage = "",
  isError = false,
  ...rest
}: FieldItemProps) {
  const fieldScope = useFieldScope({
    inputId,
    isError,
    errorMessage,
  });

  return (
    <FieldContext.Provider value={fieldScope}>
      <div
        {...rest}
        className={cn(
          `${nameBlock}__item`,
          `${nameBlock}__item--${direction}`,
          `${nameBlock}__item--align-${align}`,
          fieldScope.isError && "is-error",
          className,
        )}
      >
        {children}
        <FieldMessageSlot
          infoMessage={infoMessage}
          errorMessage={errorMessage}
        />
      </div>
    </FieldContext.Provider>
  );
}

function FieldGrid({
  children,
  className,
  columns = 2,
}: FieldGridProps) {
  return (
    <div
      className={cn(`${nameBlock}__grid`, className)}
      style={
        {
          "--field-grid-columns": columns,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}

function FieldLabel({
  children,
  className,
  id,
  htmlFor,
  as = "label",
  ...rest
}: FieldLabelProps) {
  const { inputId: fieldContextId, labelId: fieldLabelId } = useFieldContext();
  const resolvedLabelId = id ?? fieldLabelId ?? undefined;

  if (as == "span") {
    return (
      <span
        {...rest}
        id={resolvedLabelId}
        className={cn(`${nameBlock}__label`, className)}
      >
        {children}
      </span>
    );
  }

  return (
    <label
      {...rest}
      id={resolvedLabelId}
      htmlFor={htmlFor ?? fieldContextId ?? undefined}
      className={cn(`${nameBlock}__label`, className)}
    >
      {children}
    </label>
  );
}

function FieldDescription({
  children,
  className,
  id,
  ...rest
}: FieldDescriptionProps) {
  const generatedDescriptionId = useId();
  const { registerDescription } = useFieldContext();
  const resolvedDescriptionId = id ?? generatedDescriptionId;

  useEffect(() => {
    return registerDescription?.(resolvedDescriptionId);
  }, [registerDescription, resolvedDescriptionId]);

  return (
    <p
      {...rest}
      id={resolvedDescriptionId}
      className={cn(`${nameBlock}__description`, className)}
    >
      {children}
    </p>
  );
}

function FieldMessage({
  id,
  className,
  infoMessage = "",
  errorMessage = "",
}: FieldMessageProps) {
  const generatedMessageId = useId();
  const { registerMessage } = useFieldContext();
  const hasMessageContent = Boolean(infoMessage || errorMessage);
  const resolvedMessageId = id ?? generatedMessageId;

  useEffect(() => {
    if (!hasMessageContent) {
      return;
    }

    return registerMessage?.(resolvedMessageId);
  }, [hasMessageContent, registerMessage, resolvedMessageId]);

  if (!hasMessageContent) return null;

  return (
    <div
      id={resolvedMessageId}
      className={cn(`${nameBlock}__message`, className)}
    >
      <Message infoMessage={infoMessage} errorMessage={errorMessage} />
    </div>
  );
}

type FieldComponent = typeof FieldRoot & {
  Item: typeof FieldItem;
  Grid: typeof FieldGrid;
  Label: typeof FieldLabel;
  Description: typeof FieldDescription;
  Message: typeof FieldMessage;
};

const Field = Object.assign(FieldRoot, {
  Item: FieldItem,
  Grid: FieldGrid,
  Label: FieldLabel,
  Description: FieldDescription,
  Message: FieldMessage,
}) as FieldComponent;

export default Field;
