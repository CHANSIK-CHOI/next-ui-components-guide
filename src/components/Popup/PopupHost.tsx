import { createPortal } from "react-dom";
import { useMemo, useState } from "react";
import Alert from "./Alert";
import Confirm from "./Confirm";
import { usePopupStore } from "./popup.store";
import usePopupHostA11y from "./usePopupHostA11y";

const POPUP_ROOT_ID = "popup-root";

type PopupHostProps = {
  children: React.ReactNode;
};

export default function PopupHost({ children }: PopupHostProps) {
  const items = usePopupStore((state) => state.items);
  const closePopup = usePopupStore((state) => state.closePopup);
  const removePopup = usePopupStore((state) => state.removePopup);
  const [portalRoot] = useState<HTMLElement | null>(() => {
    if (typeof document === "undefined") return null;
    return document.getElementById(POPUP_ROOT_ID);
  });
  const topmostOpenPopupId = useMemo(
    () => [...items].reverse().find((item) => item.status === "open")?.id,
    [items],
  );

  usePopupHostA11y({ hasPopup: items.length > 0 });

  return (
    <>
      {children}
      {portalRoot
        ? createPortal(
            <>
              {items.map((item) => {
                switch (item.type) {
                  case "alert": {
                    const { shouldCloseOnConfirm, ...alertProps } = item.props;

                    return (
                      <Alert
                        key={item.id}
                        {...alertProps}
                        id={item.id}
                        open={item.status === "open"}
                        isTopmost={item.id === topmostOpenPopupId}
                        onConfirm={() => {
                          alertProps.onConfirm?.();

                          if (shouldCloseOnConfirm ?? true) {
                            closePopup(item.id);
                          }
                        }}
                        onExited={() => {
                          removePopup(item.id);
                        }}
                      />
                    );
                  }
                  case "confirm": {
                    const {
                      shouldCloseOnCancel,
                      shouldCloseOnConfirm,
                      ...confirmProps
                    } = item.props;

                    return (
                      <Confirm
                        key={item.id}
                        {...confirmProps}
                        id={item.id}
                        open={item.status === "open"}
                        isTopmost={item.id === topmostOpenPopupId}
                        onCancel={() => {
                          confirmProps.onCancel?.();

                          if (shouldCloseOnCancel ?? true) {
                            closePopup(item.id);
                          }
                        }}
                        onConfirm={() => {
                          confirmProps.onConfirm?.();

                          if (shouldCloseOnConfirm ?? true) {
                            closePopup(item.id);
                          }
                        }}
                        onExited={() => {
                          removePopup(item.id);
                        }}
                      />
                    );
                  }
                  case "layerPopup":
                  case "bottomSheet":
                  case "fullPopup": {
                    const PopupComponent = item.props.component;

                    return (
                      <PopupComponent
                        key={item.id}
                        id={item.id}
                        open={item.status === "open"}
                        isTopmost={item.id === topmostOpenPopupId}
                        onRequestClose={() => {
                          closePopup(item.id);
                        }}
                        onExited={() => {
                          removePopup(item.id);
                        }}
                      />
                    );
                  }
                  default:
                    return null;
                }
              })}
            </>,
            portalRoot,
          )
        : null}
    </>
  );
}
