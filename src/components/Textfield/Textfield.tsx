import { useId, forwardRef } from "react";
import TextfieldBtn from "./TextfieldBtn";
import cn from "classnames";
import Message from "./Message";
import { useFieldContext } from "../Field/Field.context";

const nameBlock = "textfield";

type TextfieldInputType =
  | "text"
  | "password"
  | "email"
  | "tel"
  | "url"
  | "number";

type TextfieldBaseProps = {
  children?: React.ReactNode;
  id?: string;
  className?: string;
  placeholder?: string;
  type?: TextfieldInputType;
  value?: React.InputHTMLAttributes<HTMLInputElement>["value"];
  readOnly?: boolean;
  isTextInputBlocked?: boolean;
  disabled?: boolean;
  infoMsg?: string;
  errorMsg?: string;
  unit?: string;
  isClearable?: boolean;
  onClear?: () => void;
};

export type TextfieldProps = TextfieldBaseProps &
  Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    | "aria-invalid"
    | "defaultValue"
    | "disabled"
    | "id"
    | "placeholder"
    | "readOnly"
    | "type"
    | "value"
  >;

const Textfield = forwardRef<HTMLInputElement, TextfieldProps>(
  (
    {
      children,
      id,
      className,
      placeholder = "내용을 입력해주세요",
      value,
      readOnly = false,
      isTextInputBlocked = false,
      disabled = false,
      infoMsg = "",
      errorMsg = "",
      unit = "",
      isClearable = false,
      onClear,
      ...rest
    },
    ref,
  ) => {
    const { inputId: fieldContextId } = useFieldContext();
    const generatedId = useId();
    const ID = id ?? fieldContextId ?? generatedId;
    const hasValue = value != null && String(value).length > 0;
    const canClear =
      isClearable &&
      typeof onClear === "function" &&
      hasValue &&
      !readOnly &&
      !disabled;

    return (
      <div
        className={cn(nameBlock, className, {
          "is-disabled": disabled,
          "is-error": Boolean(errorMsg),
          "is-readonly": readOnly,
          [`${nameBlock}--text-right`]: unit,
        })}
      >
        <div className={cn(`${nameBlock}__wrap`)}>
          <div className={cn(`${nameBlock}__input-box`)}>
            <input
              autoComplete="off"
              {...rest}
              ref={ref}
              id={ID}
              className={cn(`${nameBlock}__input`)}
              value={value}
              placeholder={placeholder}
              disabled={disabled}
              readOnly={readOnly || isTextInputBlocked}
              aria-invalid={errorMsg ? true : undefined}
            />
          </div>
          <div className={cn(`${nameBlock}__actions`)}>
            {canClear && (
              <TextfieldBtn
                icon="clear"
                title="내용 지우기"
                onClick={onClear}
                disabled={disabled}
                className={cn(`${nameBlock}__clear`)}
              />
            )}
            {children}
            {unit && <span className={cn(`${nameBlock}__unit`)}>{unit}</span>}
          </div>
        </div>
        <Message infoMsg={infoMsg} errorMsg={errorMsg} />
      </div>
    );
  },
);

Textfield.displayName = "Textfield";

export default Textfield;
