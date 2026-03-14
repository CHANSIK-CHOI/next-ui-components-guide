import {
  type FieldPath,
  type FieldValues,
} from "react-hook-form";
import RHFTextfield, { type RHFTextfieldProps } from "./RHFTextfield";
import TextfieldBtn from "./TextfieldBtn";

export type RHFSearchProps<
  TFormValues extends FieldValues,
  TFieldName extends FieldPath<TFormValues>,
> = Omit<RHFTextfieldProps<TFormValues, TFieldName>, "children" | "type"> & {
  onSearch?: () => void;
  searchButtonTitle?: string;
  searchButtonType?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
};

export default function RHFSearch<
  TFormValues extends FieldValues,
  TFieldName extends FieldPath<TFormValues>,
>({
  onSearch,
  searchButtonTitle = "검색",
  searchButtonType,
  disabled = false,
  ...restTextfieldProps
}: RHFSearchProps<TFormValues, TFieldName>) {
  const resolvedSearchButtonType =
    searchButtonType ?? (onSearch ? "button" : "submit");

  return (
    <RHFTextfield
      {...restTextfieldProps}
      type="text"
      disabled={disabled}
    >
      <TextfieldBtn
        icon="search"
        title={searchButtonTitle}
        type={resolvedSearchButtonType}
        onClick={onSearch}
        disabled={disabled}
      />
    </RHFTextfield>
  );
}
