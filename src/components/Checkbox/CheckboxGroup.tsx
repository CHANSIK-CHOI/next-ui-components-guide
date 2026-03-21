import cn from "classnames";
import {
  getMergedAriaIds,
  useFieldContext,
} from "../Field/Field.context";
import CheckboxGroupContext from "./CheckboxGroup.context";

const nameBlock = "checkbox-group";

export type CheckboxGroupProps = Omit<
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

export default function CheckboxGroup({
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
}: CheckboxGroupProps) {
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
    <CheckboxGroupContext.Provider
      value={{ name, disabled, readOnly, isError: resolvedIsError }}
    >
      <div
        {...rest}
        role="group"
        aria-labelledby={resolvedAriaLabelledBy}
        aria-describedby={resolvedAriaDescribedBy}
        className={cn(nameBlock, `${nameBlock}--${direction}`, className)}
      >
        {children}
      </div>
    </CheckboxGroupContext.Provider>
  );
}
