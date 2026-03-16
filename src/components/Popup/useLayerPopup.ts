import { useMemo } from "react";
import type { LayerPopupOptions } from "./PopupBase.types";
import { usePopupStack, usePopupStore } from "./popup.store";

export default function useLayerPopup() {
  const openLayerPopup = usePopupStore((state) => state.openLayerPopup);
  const closePopupType = usePopupStore((state) => state.closePopupType);
  const closePopup = usePopupStore((state) => state.closePopup);
  const popupStack = usePopupStack();

  const layerPopupStack = useMemo(
    () => popupStack.filter((item) => item.type === "layerPopup"),
    [popupStack],
  );

  const open = (options: LayerPopupOptions) => openLayerPopup(options);

  const close = (id?: string) => {
    const targetId = id ?? layerPopupStack[layerPopupStack.length - 1]?.id;

    if (!targetId) {
      return;
    }

    closePopup(targetId);
  };

  return {
    open,
    close,
    closeAll: () => closePopupType("layerPopup"),
    layerPopups: layerPopupStack,
  };
}
