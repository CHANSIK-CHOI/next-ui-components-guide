import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import Toast from "./Toast";
import { useToastStore } from "./toast.store";

const TOAST_ROOT_ID = "toast-root";

type ToastHostProps = {
  children: React.ReactNode;
};

export default function ToastHost({ children }: ToastHostProps) {
  const items = useToastStore((state) => state.items);
  const closeToast = useToastStore((state) => state.closeToast);
  const removeToast = useToastStore((state) => state.removeToast);
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const existingRoot = document.getElementById(TOAST_ROOT_ID);

    if (existingRoot instanceof HTMLElement) {
      setPortalRoot(existingRoot);
    }
  }, []);

  return (
    <>
      {children}
      {portalRoot
        ? createPortal(
            <div className="toastStack">
              {items.map((item) => {
                const { onCloseComplete, ...toastProps } = item.props;

                return (
                  <Toast
                    key={item.id}
                    {...toastProps}
                    open={item.status === "open"}
                    onRequestClose={() => {
                      closeToast(item.id);
                    }}
                    onExited={() => {
                      onCloseComplete?.();
                      removeToast(item.id);
                    }}
                  />
                );
              })}
            </div>,
            portalRoot,
          )
        : null}
    </>
  );
}
