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
  icon?: React.ReactNode | null;
  description?: React.ReactNode;
  footer?: React.ReactNode;
  hasCloseButton?: boolean;
  closeButtonLabel?: string;
  shouldCloseOnBackdrop?: boolean;
  shouldCloseOnEscape?: boolean;
  dialogLabel?: string;
  onRequestClose?: () => void;
  onClickClose?: () => void;
  onExited?: () => void;
  isTopmost?: boolean;
};

type PopupInstanceProps = Pick<
  PopupBaseProps,
  "id" | "open" | "onExited" | "isTopmost"
>;

type PopupSharedShellProps = Omit<PopupBaseProps, "variant" | "size" | "isTopmost">;
type PopupSizedShellProps = PopupSharedShellProps &
  Pick<PopupBaseProps, "size">;
export type PopupRuntimeProps = PopupInstanceProps &
  Pick<PopupBaseProps, "onRequestClose">;

export type AlertContentProps = Pick<
  PopupBaseProps,
  "className" | "title" | "icon" | "description"
> & {
  confirmText?: React.ReactNode;
  onConfirm?: () => void;
};

export type AlertProps = AlertContentProps & PopupInstanceProps;

export type AlertPopupOptions = AlertContentProps &
  {
    id?: string;
    shouldCloseOnConfirm?: boolean;
  };

export type ConfirmContentProps = Pick<
  PopupBaseProps,
  "className" | "title" | "icon" | "description"
> & {
  cancelText?: React.ReactNode;
  confirmText?: React.ReactNode;
  onCancel?: () => void;
  onConfirm?: () => void;
};

export type ConfirmProps = ConfirmContentProps & PopupInstanceProps;

export type ConfirmPopupOptions = ConfirmContentProps &
  {
    id?: string;
    shouldCloseOnCancel?: boolean;
    shouldCloseOnConfirm?: boolean;
  };

type PopupRegistrationOptions = {
  id?: string;
  component: React.ComponentType<PopupRuntimeProps>;
};

export type LayerPopupProps = PopupSizedShellProps;
export type BottomSheetProps = PopupSharedShellProps;
export type FullPopupProps = PopupSharedShellProps;

export type LayerPopupComponentProps = PopupRuntimeProps;
export type BottomSheetComponentProps = PopupRuntimeProps;
export type FullPopupComponentProps = PopupRuntimeProps;

export type LayerPopupOptions = PopupRegistrationOptions;

export type BottomSheetOptions = PopupRegistrationOptions;

export type FullPopupOptions = PopupRegistrationOptions;
