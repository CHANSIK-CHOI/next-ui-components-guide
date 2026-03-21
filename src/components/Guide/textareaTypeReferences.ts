export const TEXTAREA_RESIZE_CODE = `type TextareaResize = "none" | "vertical";`;

export const TEXTAREA_BASE_PROPS_CODE = `type TextareaBaseProps = {
  id?: string;
  className?: string;
  placeholder?: string;
  value?: React.TextareaHTMLAttributes<HTMLTextAreaElement>["value"];
  readOnly?: boolean;
  disabled?: boolean;
  infoMessage?: string;
  errorMessage?: string;
  isClearable?: boolean;
  onClear?: () => void;
  resize?: TextareaResize;
};`;

export const RHF_TEXTAREA_BASE_PROPS_CODE = `type RHFTextareaBaseProps = {
  formatValue?: (value: string) => string;
};`;
