import { useMemo } from "react";
import type { AlertPopupOptions } from "./PopupBase.types";
import { usePopupStack, usePopupStore } from "./popup.store";

export default function useAlert() {
  const openAlert = usePopupStore((state) => state.openAlert);
  const closePopup = usePopupStore((state) => state.closePopup);
  const closeAll = usePopupStore((state) => state.closeAll);
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
    closeAll,
    alerts: alertStack,
  };
}
