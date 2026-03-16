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
  children: ReactNode;
};

// 이 파일은 select의 "공통 껍데기"만 담당합니다.
// 실제 single/multi 값 변환은 각각 Select, MultiSelect에서 처리합니다.
export default function SelectBase({
  className,
  disabled = false,
  readOnly = false,
  isError = false,
  infoMessage = "",
  errorMessage = "",
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
      <Message infoMessage={infoMessage} errorMessage={errorMessage} />
    </div>
  );
}
