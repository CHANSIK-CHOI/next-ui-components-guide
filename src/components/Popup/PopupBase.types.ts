export type PopupVariant = "dialog" | "bottomSheet" | "full";
export type PopupSize = "small" | "regular" | "large";
export type PopupContentAlign = "left" | "center";

export type PopupBaseProps = {
  children?: React.ReactNode;
  id?: string;
  className?: string;
  panelClassName?: string;
  bodyClassName?: string;
  footerClassName?: string;
  open: boolean;
  variant?: PopupVariant;
  size?: PopupSize;
  contentAlign?: PopupContentAlign;
  title?: React.ReactNode;
  description?: React.ReactNode;
  footer?: React.ReactNode;
  showCloseButton?: boolean;
  closeButtonLabel?: string;
  closeOnBackdrop?: boolean;
  closeOnEscape?: boolean;
  dialogLabel?: string;
  onRequestClose?: () => void;
  onClickClose?: () => void;
  onExited?: () => void;
};

type AlertControlProps = Pick<
  PopupBaseProps,
  "id" | "open" | "onExited"
>;

export type AlertBaseProps = {
  className?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ReactNode | null;
  confirmText?: React.ReactNode;
  onConfirm?: () => void;
};

export type AlertProps = AlertBaseProps & AlertControlProps;

export type AlertPopupOptions = AlertBaseProps & {
  id?: string;
};
