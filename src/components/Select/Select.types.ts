import type {
  GroupBase,
  OptionsOrGroups,
  Props as ReactSelectProps,
  SelectComponentsConfig,
  StylesConfig,
} from "react-select";

export type SelectOptionValue = string | number;

export type SelectOption = {
  label: string;
  value: SelectOptionValue;
  isDisabled?: boolean;
  [key: string]: unknown;
};

export type SingleSelectValue = SelectOptionValue | null;
export type MultiSelectValue = SelectOptionValue[];

export type SelectSharedProps<IsMulti extends boolean> = Omit<
  ReactSelectProps<SelectOption, IsMulti, GroupBase<SelectOption>>,
  | "className"
  | "classNamePrefix"
  | "components"
  | "id"
  | "inputId"
  | "isDisabled"
  | "name"
  | "onChange"
  | "options"
  | "placeholder"
  | "styles"
  | "unstyled"
  | "value"
> & {
  id?: string;
  className?: string;
  name?: string;
  options: OptionsOrGroups<SelectOption, GroupBase<SelectOption>>;
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
  isError?: boolean;
  infoMessage?: string;
  errorMessage?: string;
  components?: SelectComponentsConfig<SelectOption, IsMulti, GroupBase<SelectOption>>;
  styles?: StylesConfig<SelectOption, IsMulti, GroupBase<SelectOption>>;
};
