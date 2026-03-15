import { useMemo } from "react";
import type { AlertPopupOptions } from "./PopupBase.types";
import { usePopupStack, usePopupStore } from "./popup.store";

export default function useAlert() {
  const openAlert = usePopupStore((state) => state.openAlert);
  const closePopupType = usePopupStore((state) => state.closePopupType);
  const closePopup = usePopupStore((state) => state.closePopup);
  const popupStack = usePopupStack();

  const alertStack = useMemo(
    () => popupStack.filter((item) => item.type === "alert"),
    [popupStack],
  );

  const open = (options: AlertPopupOptions) => openAlert(options);

  const close = (id?: string) => {
    const targetId = id ?? alertStack[alertStack.length - 1]?.id;

    if (!targetId) {
      return;
    }

    closePopup(targetId);
  };

  return {
    open,
    close,
    closeAll: () => closePopupType("alert"),
    alerts: alertStack,
  };
}
