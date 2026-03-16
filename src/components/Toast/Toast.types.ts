export type ToastTone = "default" | "error";
export type ToastStatus = "open" | "closing";

export type ToastSharedProps = {
  className?: string;
  message: React.ReactNode;
  tone?: ToastTone;
  duration?: number;
};

export type ToastProps = ToastSharedProps & {
  open: boolean;
  onRequestClose?: () => void;
  onExited?: () => void;
  onOpenComplete?: () => void;
};

export type ToastOpenOptions = ToastSharedProps & {
  id?: string;
  onOpenComplete?: () => void;
  onCloseComplete?: () => void;
};

export type ToastSnapshot = {
  id: string;
  status: ToastStatus;
  tone: ToastTone;
};
