import {
  type FieldPath,
  type FieldValues,
} from "react-hook-form";
import RHFTextfield, { type RHFTextfieldProps } from "./RHFTextfield";
import TextfieldBtn from "./TextfieldBtn";

export type RHFSearchProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> = Omit<RHFTextfieldProps<TFieldValues, TName>, "children" | "type"> & {
  onSearch?: () => void;
  searchButtonTitle?: string;
  searchButtonType?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
};

export default function RHFSearch<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>({
  onSearch,
  searchButtonTitle = "검색",
  searchButtonType,
  disabled = false,
  ...restTextfieldProps
}: RHFSearchProps<TFieldValues, TName>) {
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
