import { createPortal } from "react-dom";
import { useCallback, useEffect, useRef, useState } from "react";
import Alert from "./Alert";
import { usePopupStore } from "./popup.store";

const POPUP_ROOT_ID = "popup-root";

type PopupProviderProps = {
  children: React.ReactNode;
};

export default function PopupProvider({ children }: PopupProviderProps) {
  const items = usePopupStore((state) => state.items);
  const closePopup = usePopupStore((state) => state.closePopup);
  const removePopup = usePopupStore((state) => state.removePopup);
  const scrollTopRef = useRef(0);
  const isScrollLockedRef = useRef(false);
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);

  const unlockScroll = useCallback((force = false) => {
    if (!isScrollLockedRef.current) {
      return;
    }

    if (!force && usePopupStore.getState().items.length > 0) {
      return;
    }

    document.body.classList.remove("is-prevent-scroll");
    document.body.style.removeProperty("--scroll-lock-top");
    window.scrollTo(0, scrollTopRef.current);
    scrollTopRef.current = 0;
    isScrollLockedRef.current = false;
  }, []);

  const handleClosePopup = useCallback(
    (id: string) => {
      closePopup(id);
    },
    [closePopup],
  );

  useEffect(() => {
    const existingRoot = document.getElementById(POPUP_ROOT_ID);

    if (existingRoot instanceof HTMLElement) {
      setPortalRoot(existingRoot);
    }
  }, []);

  useEffect(() => {
    const hasPopup = items.length > 0;

    if (hasPopup && !isScrollLockedRef.current) {
      scrollTopRef.current =
        window.scrollY || document.documentElement.scrollTop || 0;
      document.body.classList.add("is-prevent-scroll");
      document.body.style.setProperty(
        "--scroll-lock-top",
        `${scrollTopRef.current}px`,
      );
      isScrollLockedRef.current = true;
    }

    if (!hasPopup && isScrollLockedRef.current) {
      unlockScroll();
    }
  }, [items.length, unlockScroll]);

  useEffect(() => () => unlockScroll(true), [unlockScroll]);

  return (
    <>
      {children}
      {portalRoot
        ? createPortal(
            <>
              {items.map((item) => {
                if (item.type !== "alert") {
                  return null;
                }

                return (
                  <Alert
                    key={item.id}
                    {...item.props}
                    id={item.id}
                    open={item.status === "open"}
                    onConfirm={() => {
                      item.props.onConfirm?.();
                      handleClosePopup(item.id);
                    }}
                    onExited={() => {
                      removePopup(item.id);
                    }}
                  />
                );
              })}
            </>,
            portalRoot,
          )
        : null}
    </>
  );
}
