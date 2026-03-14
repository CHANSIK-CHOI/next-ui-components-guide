import { forwardRef, useId, type KeyboardEvent, type MouseEvent } from "react";
import cn from "classnames";
import { useFieldContext } from "../Field/Field.context";
import { useCheckboxGroupContext } from "./CheckboxGroup.context";

const nameBlock = "checkbox";
const INTERACTION_KEYS = new Set([" ", "Enter"]);

type CheckboxBaseProps = {
  id?: string;
  className?: string;
  error?: boolean;
  readOnly?: boolean;
};

export type CheckboxProps = CheckboxBaseProps &
  Omit<React.InputHTMLAttributes<HTMLInputElement>, "readOnly" | "type">;

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      id,
      name,
      className,
      error,
      readOnly,
      disabled,
      onClick,
      onKeyDown,
      onChange,
      ...rest
    },
    ref,
  ) => {
    const { inputId: fieldContextId } = useFieldContext();
    const checkboxGroupContext = useCheckboxGroupContext();
    const generatedId = useId();
    const resolvedId = id ?? fieldContextId ?? generatedId;
    const resolvedName = name ?? checkboxGroupContext.name;
    const resolvedDisabled = disabled ?? checkboxGroupContext.disabled ?? false;
    const resolvedReadOnly = readOnly ?? checkboxGroupContext.readOnly ?? false;
    const resolvedError = error ?? checkboxGroupContext.error ?? false;

    const handleClick = (event: MouseEvent<HTMLInputElement>) => {
      if (resolvedReadOnly) {
        event.preventDefault();
        return;
      }

      onClick?.(event);
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
      if (resolvedReadOnly && INTERACTION_KEYS.has(event.key)) {
        event.preventDefault();
        return;
      }

      onKeyDown?.(event);
    };

    return (
      <span
        className={cn(nameBlock, className, {
          "is-disabled": resolvedDisabled,
          "is-error": resolvedError,
          "is-readonly": resolvedReadOnly,
        })}
      >
        <input
          {...rest}
          ref={ref}
          id={resolvedId}
          name={resolvedName}
          type="checkbox"
          disabled={resolvedDisabled}
          aria-invalid={resolvedError ? true : undefined}
          aria-readonly={resolvedReadOnly ? true : undefined}
          className={cn(`${nameBlock}__input`)}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          onChange={onChange}
        />
        <span aria-hidden="true" className={cn(`${nameBlock}__control`)}>
          <span className={cn(`${nameBlock}__indicator`)} />
        </span>
      </span>
    );
  },
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
