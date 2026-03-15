import { forwardRef, useId, type KeyboardEvent, type MouseEvent } from "react";
import cn from "classnames";
import { useFieldContext } from "../Field/Field.context";
import { useRadioGroupContext } from "./RadioGroup.context";

const nameBlock = "radio";
const INTERACTION_KEYS = new Set([" ", "Enter"]);

type RadioBaseProps = {
  id?: string;
  className?: string;
  isError?: boolean;
  readOnly?: boolean;
};

export type RadioProps = RadioBaseProps &
  Omit<React.InputHTMLAttributes<HTMLInputElement>, "readOnly" | "type">;

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      id,
      name,
      className,
      isError,
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
    const radioGroupContext = useRadioGroupContext();
    const generatedId = useId();
    const resolvedId = id ?? fieldContextId ?? generatedId;
    const resolvedName = name ?? radioGroupContext.name;
    const resolvedDisabled = disabled ?? radioGroupContext.disabled ?? false;
    const resolvedReadOnly = readOnly ?? radioGroupContext.readOnly ?? false;
    const resolvedIsError = isError ?? radioGroupContext.isError ?? false;

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
          "is-error": resolvedIsError,
          "is-readonly": resolvedReadOnly,
        })}
      >
        <input
          {...rest}
          ref={ref}
          id={resolvedId}
          name={resolvedName}
          type="radio"
          disabled={resolvedDisabled}
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

Radio.displayName = "Radio";

export default Radio;
