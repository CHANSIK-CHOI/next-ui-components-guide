import type { ReactNode } from "react";
import cn from "classnames";
import Message from "../Textfield/Message";

export const SELECT_CLASS_NAME = "select";

type SelectBaseProps = {
  className?: string;
  disabled?: boolean;
  readOnly?: boolean;
  isError?: boolean;
  infoMessage?: string;
  errorMessage?: string;
  messageId?: string;
  children: ReactNode;
};

export default function SelectBase({
  className,
  disabled = false,
  readOnly = false,
  isError = false,
  infoMessage = "",
  errorMessage = "",
  messageId,
  children,
}: SelectBaseProps) {
  const resolvedIsError = isError || Boolean(errorMessage);

  return (
    <div
      className={cn(SELECT_CLASS_NAME, className, {
        "is-disabled": disabled,
        "is-error": resolvedIsError,
        "is-readonly": readOnly,
      })}
    >
      {children}
      <Message
        id={messageId}
        infoMessage={infoMessage}
        errorMessage={errorMessage}
      />
    </div>
  );
}
