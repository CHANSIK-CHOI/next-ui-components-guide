export const PASSWORD_PROPS_CODE = `export type PasswordProps = Omit<TextfieldProps, "children" | "type"> & {
  defaultIsPasswordVisible?: boolean;
  hidePasswordTitle?: string;
  showPasswordTitle?: string;
};`;

export const RHF_PASSWORD_PROPS_CODE = `export type RHFPasswordProps<
  TFormValues extends FieldValues,
  TFieldName extends FieldPath<TFormValues>,
> = Omit<RHFTextfieldProps<TFormValues, TFieldName>, "children" | "type"> & {
  defaultIsPasswordVisible?: boolean;
  hidePasswordTitle?: string;
  showPasswordTitle?: string;
};`;
