export const TOOLTIP_PLACEMENT_CODE = `export type TooltipPlacement =
  | "topCenter"
  | "topLeft"
  | "topRight"
  | "bottomCenter"
  | "bottomLeft"
  | "bottomRight";`;

export const TOOLTIP_PROPS_CODE = `export type TooltipProps = {
  children: ReactNode;
  content: ReactNode;
  className?: string;
  placement?: TooltipPlacement;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (nextOpen: boolean) => void;
  disabled?: boolean;
};`;
