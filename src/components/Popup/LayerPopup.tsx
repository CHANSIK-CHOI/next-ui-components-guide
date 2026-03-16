import cn from "classnames";
import PopupBase from "./PopupBase";
import type { LayerPopupProps } from "./PopupBase.types";

const nameBlock = "layerPopup";

export default function LayerPopup({
  className,
  contentAlign = "left",
  dialogLabel = "레이어 팝업",
  ...props
}: LayerPopupProps) {
  return (
    <PopupBase
      {...props}
      variant="dialog"
      contentAlign={contentAlign}
      dialogLabel={dialogLabel}
      className={cn(nameBlock, className)}
    />
  );
}
