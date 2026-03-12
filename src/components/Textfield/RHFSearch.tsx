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
};

export default function RHFSearch<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>({
  onSearch,
  searchButtonTitle = "검색",
  disabled = false,
  ...restTextfieldProps
}: RHFSearchProps<TFieldValues, TName>) {
  return (
    <RHFTextfield
      {...restTextfieldProps}
      type="text"
      disabled={disabled}
    >
      <TextfieldBtn
        icon="search"
        title={searchButtonTitle}
        onClick={onSearch}
        disabled={disabled}
      />
    </RHFTextfield>
  );
}
