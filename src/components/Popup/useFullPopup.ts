import { useMemo } from "react";
import type { FullPopupOptions } from "./PopupBase.types";
import { usePopupStack, usePopupStore } from "./popup.store";

export default function useFullPopup() {
  const openFullPopup = usePopupStore((state) => state.openFullPopup);
  const closePopupType = usePopupStore((state) => state.closePopupType);
  const closePopup = usePopupStore((state) => state.closePopup);
  const popupStack = usePopupStack();

  const fullPopupStack = useMemo(
    () => popupStack.filter((item) => item.type === "fullPopup"),
    [popupStack],
  );

  const open = (options: FullPopupOptions) => openFullPopup(options);

  const close = (id?: string) => {
    const targetId = id ?? fullPopupStack[fullPopupStack.length - 1]?.id;

    if (!targetId) {
      return;
    }

    closePopup(targetId);
  };

  return {
    open,
    close,
    closeAll: () => closePopupType("fullPopup"),
    fullPopups: fullPopupStack,
  };
}
