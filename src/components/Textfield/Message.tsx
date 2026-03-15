import cn from "classnames";
import { AttentionIcon } from "@/components/Icon";

const nameBlock = "message";

type MessageProps = {
  infoMessage?: string;
  errorMessage?: string;
};

export default function Message({
  infoMessage = "",
  errorMessage = "",
}: MessageProps) {
  const hasInfoMessage = Boolean(infoMessage);
  const hasErrorMessage = Boolean(errorMessage);

  if (!hasInfoMessage && !hasErrorMessage) return null;

  return (
    <div className={cn(`${nameBlock}`)}>
      {hasInfoMessage && (
        <span className={cn(`${nameBlock}__msg`)}>{infoMessage}</span>
      )}
      {hasErrorMessage && (
        <span className={cn(`${nameBlock}__msg ${nameBlock}__msg--error`)}>
          <span className={cn(`${nameBlock}__error-icon`)}>
            <AttentionIcon />
          </span>
          {errorMessage}
        </span>
      )}
    </div>
  );
}
