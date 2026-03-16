import cn from "classnames";
import PopupBase from "./PopupBase";
import type { FullPopupProps } from "./PopupBase.types";

const nameBlock = "fullPopup";

export default function FullPopup({
  className,
  contentAlign = "left",
  dialogLabel = "전체 팝업",
  ...props
}: FullPopupProps) {
  return (
    <PopupBase
      {...props}
      variant="full"
      size={undefined}
      contentAlign={contentAlign}
      dialogLabel={dialogLabel}
      className={cn(nameBlock, className)}
    />
  );
}
