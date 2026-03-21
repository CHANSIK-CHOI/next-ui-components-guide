import { useId, forwardRef } from "react";
import cn from "classnames";
import Message from "../Textfield/Message";
import TextfieldBtn from "../Textfield/TextfieldBtn";
import {
  getMergedAriaIds,
  useFieldContext,
} from "../Field/Field.context";

const nameBlock = "textarea";

type TextareaResize = "none" | "vertical";

type TextareaBaseProps = {
  id?: string;
  className?: string;
  placeholder?: string;
  value?: React.TextareaHTMLAttributes<HTMLTextAreaElement>["value"];
  readOnly?: boolean;
  disabled?: boolean;
  infoMessage?: string;
  errorMessage?: string;
  isClearable?: boolean;
  onClear?: () => void;
  resize?: TextareaResize;
};

export type TextareaProps = TextareaBaseProps &
  Omit<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    | "aria-invalid"
    | "defaultValue"
    | "disabled"
    | "id"
    | "placeholder"
    | "readOnly"
    | "value"
  >;

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      id,
      className,
      placeholder = "내용을 입력해주세요",
      value,
      rows = 4,
      readOnly = false,
      disabled = false,
      infoMessage = "",
      errorMessage = "",
      isClearable = false,
      onClear,
      resize = "vertical",
      "aria-describedby": ariaDescribedBy,
      ...rest
    },
    ref,
  ) => {
    const {
      inputId: fieldContextId,
      describedByIds: fieldDescribedByIds,
      isError: isFieldError,
    } = useFieldContext();
    const generatedId = useId();
    const generatedMessageId = useId();
    const resolvedId = id ?? fieldContextId ?? generatedId;
    const hasOwnMessage = Boolean(infoMessage || errorMessage);
    const resolvedIsError = isFieldError || Boolean(errorMessage);
    const resolvedAriaDescribedBy = getMergedAriaIds(
      ariaDescribedBy,
      ...fieldDescribedByIds,
      hasOwnMessage ? generatedMessageId : null,
    );
    const hasValue = value != null && String(value).length > 0;
    const canClear =
      isClearable &&
      typeof onClear === "function" &&
      hasValue &&
      !readOnly &&
      !disabled;

    return (
      <div
        className={cn(
          nameBlock,
          `${nameBlock}--resize-${resize}`,
          className,
          {
            "is-disabled": disabled,
            "is-error": resolvedIsError,
            "is-readonly": readOnly,
          },
        )}
      >
        <div className={cn(`${nameBlock}__wrap`)}>
          <textarea
            autoComplete="off"
            {...rest}
            ref={ref}
            id={resolvedId}
            rows={rows}
            className={cn(`${nameBlock}__input`)}
            value={value}
            placeholder={placeholder}
            disabled={disabled}
            readOnly={readOnly}
            aria-describedby={resolvedAriaDescribedBy}
            aria-invalid={resolvedIsError ? true : undefined}
          />
          {canClear && (
            <div className={cn(`${nameBlock}__actions`)}>
              <TextfieldBtn
                icon="clear"
                title="내용 지우기"
                onClick={onClear}
                disabled={disabled}
                className={cn(`${nameBlock}__clear`)}
              />
            </div>
          )}
        </div>
        <Message
          id={hasOwnMessage ? generatedMessageId : undefined}
          infoMessage={infoMessage}
          errorMessage={errorMessage}
        />
      </div>
    );
  },
);

Textarea.displayName = "Textarea";

export default Textarea;
