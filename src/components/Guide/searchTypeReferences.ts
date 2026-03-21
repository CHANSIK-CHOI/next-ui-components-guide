export const SEARCH_PROPS_CODE = `export type SearchProps = Omit<TextfieldProps, "children" | "type"> & {
  onSearch?: () => void;
  searchButtonTitle?: string;
  searchButtonType?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
};`;

export const RHF_SEARCH_PROPS_CODE = `export type RHFSearchProps<
  TFormValues extends FieldValues,
  TFieldName extends FieldPath<TFormValues>,
> = Omit<RHFTextfieldProps<TFormValues, TFieldName>, "children" | "type"> & {
  onSearch?: () => void;
  searchButtonTitle?: string;
  searchButtonType?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
};`;
