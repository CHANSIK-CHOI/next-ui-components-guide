export const ACCORDION_TYPE_CODE = `export type AccordionType = "single" | "multiple";`;

export const ACCORDION_VARIANT_CODE = `export type AccordionVariant = "box" | "line";`;

export const ACCORDION_PROPS_CODE = `export type AccordionProps = {
  children: React.ReactNode;
  type?: AccordionType;
  className?: string;
  activeIndices?: number[];
  defaultActiveIndices?: number[];
  variant?: AccordionVariant;
  onChange?: (nextActiveIndices: number[]) => void;
  shouldKeepMounted?: boolean;
};`;

export const ACCORDION_ITEM_PROPS_CODE = `export type AccordionItemProps = HTMLMotionProps<"div"> & {
  children: React.ReactNode;
  index: number;
};`;

export const ACCORDION_BUTTON_PROPS_CODE = `export type AccordionButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "children" | "onClick" | "id"
> & {
  children: React.ReactNode;
  index: number;
  onClick?: (index: number, event: MouseEvent<HTMLButtonElement>) => void;
};`;

export const ACCORDION_HEAD_PROPS_CODE = `export type AccordionHeadProps = React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode;
  buttonIndex?: number;
};`;

export const ACCORDION_PANEL_PROPS_CODE = `export type AccordionPanelProps = {
  children: React.ReactNode;
  index: number;
  className?: string;
};`;
