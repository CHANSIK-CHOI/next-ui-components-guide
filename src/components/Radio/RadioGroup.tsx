import cn from "classnames";
import {
  getMergedAriaIds,
  useFieldContext,
} from "../Field/Field.context";
import RadioGroupContext from "./RadioGroup.context";

const nameBlock = "radio-group";

export type RadioGroupProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "role"
> & {
  children: React.ReactNode;
  name?: string;
  direction?: "row" | "column";
  disabled?: boolean;
  readOnly?: boolean;
  isError?: boolean;
};

export default function RadioGroup({
  children,
  className,
  name,
  direction = "column",
  disabled,
  readOnly,
  isError,
  "aria-describedby": ariaDescribedBy,
  "aria-labelledby": ariaLabelledBy,
  ...rest
}: RadioGroupProps) {
  const {
    labelId: fieldLabelId,
    describedByIds: fieldDescribedByIds,
    isError: isFieldError,
  } = useFieldContext();
  const resolvedIsError = isFieldError || Boolean(isError);
  const resolvedAriaLabelledBy = getMergedAriaIds(
    ariaLabelledBy,
    fieldLabelId ?? undefined,
  );
  const resolvedAriaDescribedBy = getMergedAriaIds(
    ariaDescribedBy,
    ...fieldDescribedByIds,
  );

  return (
    <RadioGroupContext.Provider
      value={{ name, disabled, readOnly, isError: resolvedIsError }}
    >
      <div
        {...rest}
        role="radiogroup"
        aria-labelledby={resolvedAriaLabelledBy}
        aria-describedby={resolvedAriaDescribedBy}
        aria-invalid={resolvedIsError ? true : undefined}
        className={cn(nameBlock, `${nameBlock}--${direction}`, className)}
      >
        {children}
      </div>
    </RadioGroupContext.Provider>
  );
}
