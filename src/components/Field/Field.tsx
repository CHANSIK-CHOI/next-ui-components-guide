import { forwardRef, useId } from "react";
import cn from "classnames";
import FieldContext, { useFieldContext } from "./Field.context";
import Message from "../Textfield/Message";

const nameBlock = "field";

export type FieldProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  inputId?: string;
  direction?: "row" | "column";
  align?: "start" | "center";
};

export type FieldLabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;
export type FieldDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;
export type FieldMessageProps = {
  className?: string;
  infoMsg?: string;
  errorMsg?: string;
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

function FieldLabel({
  children,
  className,
  htmlFor,
  ...rest
}: FieldLabelProps) {
  const { inputId: fieldContextId } = useFieldContext();

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
  infoMsg = "",
  errorMsg = "",
}: FieldMessageProps) {
  if (!infoMsg && !errorMsg) return null;

  return (
    <div className={cn(`${nameBlock}__message`, className)}>
      <Message infoMsg={infoMsg} errorMsg={errorMsg} />
    </div>
  );
}

type FieldComponent = typeof FieldRoot & {
  Item: typeof FieldItem;
  Label: typeof FieldLabel;
  Description: typeof FieldDescription;
  Message: typeof FieldMessage;
};

const Field = Object.assign(FieldRoot, {
  Item: FieldItem,
  Label: FieldLabel,
  Description: FieldDescription,
  Message: FieldMessage,
}) as FieldComponent;

export default Field;
