import cn from "classnames";
import { AttentionIcon } from "@/components/Icon";

const nameBlock = "message";
type MessageProps = {
  infoMsg?: string;
  errorMsg?: string;
};
export default function Message({ infoMsg = "", errorMsg = "" }: MessageProps) {
  const isInfoMsg = infoMsg.length > 0 && infoMsg;
  const isErrorMsg = errorMsg.length > 0 && errorMsg;

  if (!isInfoMsg && !isErrorMsg) return null;

  return (
    <div className={cn(`${nameBlock}`)}>
      {infoMsg && <span className={cn(`${nameBlock}__msg`)}>{infoMsg}</span>}
      {errorMsg && (
        <span className={cn(`${nameBlock}__msg ${nameBlock}__msg--error`)}>
          <span className={cn(`${nameBlock}__error-icon`)}>
            <AttentionIcon />
          </span>
          {errorMsg}
        </span>
      )}
    </div>
  );
}
