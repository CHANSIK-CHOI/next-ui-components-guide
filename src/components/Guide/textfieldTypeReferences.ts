export const TEXTFIELD_INPUT_TYPE_CODE = `type TextfieldInputType =
  | "text"
  | "password"
  | "email"
  | "tel"
  | "url"
  | "number";`;

export const TEXTFIELD_BASE_PROPS_CODE = `type TextfieldBaseProps = {
  children?: React.ReactNode;
  id?: string;
  className?: string;
  placeholder?: string;
  type?: TextfieldInputType;
  value?: React.InputHTMLAttributes<HTMLInputElement>["value"];
  readOnly?: boolean;
  isTextInputBlocked?: boolean;
  disabled?: boolean;
  infoMessage?: string;
  errorMessage?: string;
  unit?: string;
  isClearable?: boolean;
  onClear?: () => void;
};`;

export const RHF_TEXTFIELD_BASE_PROPS_CODE = `type RHFTextfieldBaseProps = {
  formatValue?: (value: string) => string;
};`;
