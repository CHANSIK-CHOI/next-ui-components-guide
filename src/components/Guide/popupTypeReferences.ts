export const POPUP_BASE_PROPS_CODE = `export type PopupBaseProps = {
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
};`;

export const POPUP_RUNTIME_PROPS_CODE = `export type PopupRuntimeProps =
  Pick<PopupBaseProps, "id" | "open" | "onExited" | "isTopmost"> &
  Pick<PopupBaseProps, "onRequestClose">;`;

export const POPUP_SNAPSHOT_CODE = `export type PopupType =
  | "alert"
  | "confirm"
  | "layerPopup"
  | "bottomSheet"
  | "fullPopup";

export type PopupStatus = "open" | "closing";

export type PopupSnapshot = {
  id: string;
  type: PopupType;
  status: PopupStatus;
};`;

export const LAYER_POPUP_PROPS_CODE = `export type LayerPopupProps = Omit<
  PopupBaseProps,
  "variant" | "isTopmost"
>;`;

export const BOTTOM_SHEET_PROPS_CODE = `export type BottomSheetProps = Omit<
  PopupBaseProps,
  "variant" | "size" | "isTopmost"
>;`;

export const FULL_POPUP_PROPS_CODE = `export type FullPopupProps = Omit<
  PopupBaseProps,
  "variant" | "size" | "isTopmost"
>;`;

export const LAYER_POPUP_OPTIONS_CODE = `export type LayerPopupOptions = {
  id?: string;
  component: React.ComponentType<PopupRuntimeProps>;
};`;

export const BOTTOM_SHEET_OPTIONS_CODE = `export type BottomSheetOptions = {
  id?: string;
  component: React.ComponentType<PopupRuntimeProps>;
};`;

export const FULL_POPUP_OPTIONS_CODE = `export type FullPopupOptions = {
  id?: string;
  component: React.ComponentType<PopupRuntimeProps>;
};`;

export const ALERT_CONTENT_PROPS_CODE = `export type AlertContentProps = Pick<
  PopupBaseProps,
  "className" | "title" | "icon" | "description"
> & {
  confirmText?: React.ReactNode;
  onConfirm?: () => void;
};`;

export const ALERT_PROPS_CODE = `export type AlertProps = AlertContentProps &
  Pick<PopupBaseProps, "id" | "open" | "onExited" | "isTopmost">;`;

export const ALERT_POPUP_OPTIONS_CODE = `export type AlertPopupOptions = AlertContentProps & {
  id?: string;
  shouldCloseOnConfirm?: boolean;
};`;

export const CONFIRM_CONTENT_PROPS_CODE = `export type ConfirmContentProps = Pick<
  PopupBaseProps,
  "className" | "title" | "icon" | "description"
> & {
  cancelText?: React.ReactNode;
  confirmText?: React.ReactNode;
  onCancel?: () => void;
  onConfirm?: () => void;
};`;

export const CONFIRM_PROPS_CODE = `export type ConfirmProps = ConfirmContentProps &
  Pick<PopupBaseProps, "id" | "open" | "onExited" | "isTopmost">;`;

export const CONFIRM_POPUP_OPTIONS_CODE = `export type ConfirmPopupOptions = ConfirmContentProps & {
  id?: string;
  shouldCloseOnCancel?: boolean;
  shouldCloseOnConfirm?: boolean;
};`;
