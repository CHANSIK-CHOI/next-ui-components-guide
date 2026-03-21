export const SELECT_OPTION_CODE = `export type SelectOptionValue = string | number;

export type SelectOption = {
  label: string;
  value: SelectOptionValue;
  isDisabled?: boolean;
  [key: string]: unknown;
};

export type SingleSelectValue = SelectOptionValue | null;
export type MultiSelectValue = SelectOptionValue[];`;

export const SELECT_SHARED_PROPS_CODE = `export type SelectSharedProps<IsMulti extends boolean> = Omit<
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
  "aria-describedby"?: string;
  options: OptionsOrGroups<SelectOption, GroupBase<SelectOption>>;
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
  isError?: boolean;
  infoMessage?: string;
  errorMessage?: string;
  components?: SelectComponentsConfig<SelectOption, IsMulti, GroupBase<SelectOption>>;
  styles?: StylesConfig<SelectOption, IsMulti, GroupBase<SelectOption>>;
};`;

export const SELECT_PROPS_CODE = `export type SelectProps = SelectSharedProps<false> & {
  value?: SingleSelectValue;
  onChange?: (
    nextValue: SingleSelectValue,
    selectedOption: SingleValue<SelectOption>,
    actionMeta: ActionMeta<SelectOption>,
  ) => void;
};`;

export const MULTI_SELECT_PROPS_CODE = `export type MultiSelectProps = SelectSharedProps<true> & {
  value?: MultiSelectValue;
  onChange?: (
    nextValue: MultiSelectValue,
    selectedOption: MultiValue<SelectOption>,
    actionMeta: ActionMeta<SelectOption>,
  ) => void;
};`;

export const RHF_SELECT_PROPS_CODE = `export type RHFSelectProps<
  TFormValues extends FieldValues,
  TFieldName extends FieldPath<TFormValues>,
> = RHFComponentProps<
  TFormValues,
  TFieldName,
  SelectProps,
  RHFValueInputManagedProps
>;`;

export const RHF_MULTI_SELECT_PROPS_CODE = `export type RHFMultiSelectProps<
  TFormValues extends FieldValues,
  TFieldName extends FieldPath<TFormValues>,
> = RHFComponentProps<
  TFormValues,
  TFieldName,
  MultiSelectProps,
  RHFValueInputManagedProps
>;`;
