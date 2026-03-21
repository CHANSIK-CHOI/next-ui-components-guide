export const RHF_COMPONENT_PROPS_CODE = `export type RHFComponentProps<
  TFormValues extends FieldValues,
  TFieldName extends FieldPath<TFormValues>,
  TComponentProps,
  TManagedProps extends PropertyKey = never,
> = Omit<TComponentProps, TManagedProps> &
  UseControllerProps<TFormValues, TFieldName>;`;

export const RHF_CHECKED_INPUT_MANAGED_PROPS_CODE = `export type RHFCheckedInputManagedProps =
  | "checked"
  | "defaultChecked"
  | "defaultValue"
  | "name"
  | "onBlur"
  | "onChange";`;

export const RHF_VALUE_INPUT_MANAGED_PROPS_CODE = `export type RHFValueInputManagedProps =
  | "name"
  | "value"
  | "defaultValue"
  | "onBlur"
  | "onChange";`;
