export const BUTTON_BASE_PROPS_CODE = `export type ButtonBaseProps = {
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  color?: ButtonColor;
};`;

export const BUTTON_DESIGN_PROPS_CODE = `export type ButtonDesignProps =
  | {
      variant?: Exclude<ButtonVariant, "text">;
      shape?: ButtonShape;
      size?: ButtonSize;
    }
  | {
      variant: "text";
      shape?: never;
      size?: never;
    };`;

export const ICON_BUTTON_PROPS_CODE = `type IconButtonVariant = "solid" | "line";
type IconButtonProps = Omit<ButtonProps, "icon" | "variant"> & {
  variant?: IconButtonVariant;
};`;
