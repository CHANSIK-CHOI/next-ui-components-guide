import { forwardRef, useId, type KeyboardEvent, type MouseEvent } from "react";
import cn from "classnames";
import { useFieldContext } from "../Field/Field.context";

const nameBlock = "switch";
const INTERACTION_KEYS = new Set([" ", "Enter"]);

type SwitchBaseProps = {
  id?: string;
  className?: string;
  isError?: boolean;
  readOnly?: boolean;
};

export type SwitchProps = SwitchBaseProps &
  Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "readOnly" | "role" | "type"
  >;

const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      id,
      className,
      isError = false,
      readOnly = false,
      disabled = false,
      onClick,
      onKeyDown,
      onChange,
      ...rest
    },
    ref,
  ) => {
    const { inputId: fieldContextId } = useFieldContext();
    const generatedId = useId();
    const resolvedId = id ?? fieldContextId ?? generatedId;

    const handleClick = (event: MouseEvent<HTMLInputElement>) => {
      if (readOnly) {
        event.preventDefault();
        return;
      }

      onClick?.(event);
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
      if (readOnly && INTERACTION_KEYS.has(event.key)) {
        event.preventDefault();
        return;
      }

      onKeyDown?.(event);
    };

    return (
      <span
        className={cn(nameBlock, className, {
          "is-disabled": disabled,
          "is-error": isError,
          "is-readonly": readOnly,
        })}
      >
        <input
          {...rest}
          ref={ref}
          id={resolvedId}
          type="checkbox"
          role="switch"
          disabled={disabled}
          aria-invalid={isError ? true : undefined}
          aria-readonly={readOnly ? true : undefined}
          className={cn(`${nameBlock}__input`)}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          onChange={onChange}
        />
        <span aria-hidden="true" className={cn(`${nameBlock}__control`)}>
          <span className={cn(`${nameBlock}__thumb`)} />
        </span>
      </span>
    );
  },
);

Switch.displayName = "Switch";

export default Switch;
