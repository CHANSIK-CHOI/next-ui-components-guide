import { forwardRef, useId } from "react";
import cn from "classnames";
import FieldContext, { useFieldContext } from "./Field.context";
import Message from "../Textfield/Message";

const nameBlock = "field";

type FieldGridProps = {
  children: React.ReactNode;
  className?: string;
};

export type FieldProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  inputId?: string;
  direction?: "row" | "column";
  align?: "start" | "center";
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
  className?: string;
  infoMessage?: string;
  errorMessage?: string;
};
export type FieldItemProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  inputId?: string;
  align?: "start" | "center";
};

const FieldRoot = forwardRef<HTMLDivElement, FieldProps>(
  (
    {
      children,
      className,
      inputId,
      direction = "column",
      align = "start",
      ...rest
    },
    ref,
  ) => {
    const generatedId = useId();
    const resolvedInputId = inputId ?? generatedId;

    return (
      <FieldContext.Provider value={{ inputId: resolvedInputId }}>
        <div
          {...rest}
          ref={ref}
          className={cn(
            nameBlock,
            `${nameBlock}--${direction}`,
            `${nameBlock}--align-${align}`,
            className,
          )}
        >
          {children}
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
  align = "center",
  ...rest
}: FieldItemProps) {
  const generatedId = useId();
  const resolvedInputId = inputId ?? generatedId;

  return (
    <FieldContext.Provider value={{ inputId: resolvedInputId }}>
      <div
        {...rest}
        className={cn(
          `${nameBlock}__item`,
          `${nameBlock}__item--align-${align}`,
          className,
        )}
      >
        {children}
      </div>
    </FieldContext.Provider>
  );
}

function FieldGrid({ children, className }: FieldGridProps) {
  return <div className={cn(`${nameBlock}__grid`, className)}>{children}</div>;
}

function FieldLabel({
  children,
  className,
  htmlFor,
  as = "label",
  ...rest
}: FieldLabelProps) {
  const { inputId: fieldContextId } = useFieldContext();

  if (as == "span") {
    return (
      <span {...rest} className={cn(`${nameBlock}__label`, className)}>
        {children}
      </span>
    );
  }

  return (
    <label
      {...rest}
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
  ...rest
}: FieldDescriptionProps) {
  return (
    <p {...rest} className={cn(`${nameBlock}__description`, className)}>
      {children}
    </p>
  );
}

function FieldMessage({
  className,
  infoMessage = "",
  errorMessage = "",
}: FieldMessageProps) {
  if (!infoMessage && !errorMessage) return null;

  return (
    <div className={cn(`${nameBlock}__message`, className)}>
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
