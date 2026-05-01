import type { ToastOpenOptions } from "./Toast.types";
import { useToastStack, useToastStore } from "./toast.store";

export default function useToast() {
  const openToast = useToastStore((state) => state.openToast);
  const closeToast = useToastStore((state) => state.closeToast);
  const closeAllToasts = useToastStore((state) => state.closeAllToasts);
  const toasts = useToastStack();

  const open = (options: ToastOpenOptions) => openToast(options);

  const close = (id?: string) => {
    const targetId = id ?? toasts[toasts.length - 1]?.id;

    if (!targetId) {
      return;
    }

    closeToast(targetId);
  };

  return {
    open,
    close,
    closeAll: closeAllToasts,
    toasts,
  };
}
