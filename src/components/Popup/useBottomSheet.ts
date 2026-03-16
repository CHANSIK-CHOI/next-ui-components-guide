import { useMemo } from "react";
import type { BottomSheetOptions } from "./PopupBase.types";
import { usePopupStack, usePopupStore } from "./popup.store";

export default function useBottomSheet() {
  const openBottomSheet = usePopupStore((state) => state.openBottomSheet);
  const closePopupType = usePopupStore((state) => state.closePopupType);
  const closePopup = usePopupStore((state) => state.closePopup);
  const popupStack = usePopupStack();

  const bottomSheetStack = useMemo(
    () => popupStack.filter((item) => item.type === "bottomSheet"),
    [popupStack],
  );

  const open = (options: BottomSheetOptions) => openBottomSheet(options);

  const close = (id?: string) => {
    const targetId = id ?? bottomSheetStack[bottomSheetStack.length - 1]?.id;

    if (!targetId) {
      return;
    }

    closePopup(targetId);
  };

  return {
    open,
    close,
    closeAll: () => closePopupType("bottomSheet"),
    bottomSheets: bottomSheetStack,
  };
}
