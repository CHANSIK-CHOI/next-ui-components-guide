import cn from "classnames";
import PopupBase from "./PopupBase";
import type { BottomSheetProps } from "./PopupBase.types";

const nameBlock = "bottomSheet";

export default function BottomSheet({
  className,
  contentAlign = "left",
  dialogLabel = "바텀시트 팝업",
  ...props
}: BottomSheetProps) {
  return (
    <PopupBase
      {...props}
      variant="bottomSheet"
      size={undefined}
      contentAlign={contentAlign}
      dialogLabel={dialogLabel}
      className={cn(nameBlock, className)}
    />
  );
}
