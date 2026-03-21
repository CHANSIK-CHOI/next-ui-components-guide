export const TOAST_SHARED_PROPS_CODE = `export type ToastSharedProps = {
  className?: string;
  message: React.ReactNode;
  tone?: ToastTone;
  duration?: number;
};`;

export const TOAST_PROPS_CODE = `export type ToastProps = ToastSharedProps & {
  open: boolean;
  onRequestClose?: () => void;
  onExited?: () => void;
  onOpenComplete?: () => void;
};`;

export const TOAST_OPEN_OPTIONS_CODE = `export type ToastOpenOptions = ToastSharedProps & {
  id?: string;
  onOpenComplete?: () => void;
  onCloseComplete?: () => void;
};`;

export const TOAST_SNAPSHOT_CODE = `export type ToastTone = "default" | "error";
export type ToastStatus = "open" | "closing";

export type ToastSnapshot = {
  id: string;
  status: ToastStatus;
  tone: ToastTone;
};`;
