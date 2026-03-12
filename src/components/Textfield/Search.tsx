import { forwardRef } from "react";
import Textfield, { type TextfieldProps } from "./Textfield";
import TextfieldBtn from "./TextfieldBtn";

export type SearchProps = Omit<TextfieldProps, "children" | "type"> & {
  onSearch?: () => void;
  searchButtonTitle?: string;
  searchButtonType?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
};

const Search = forwardRef<HTMLInputElement, SearchProps>(
  (
    {
      onSearch,
      searchButtonTitle = "검색",
      searchButtonType,
      disabled = false,
      ...restTextfieldProps
    },
    ref,
  ) => {
    const resolvedSearchButtonType =
      searchButtonType ?? (onSearch ? "button" : "submit");

    return (
      <Textfield
        {...restTextfieldProps}
        ref={ref}
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
      </Textfield>
    );
  },
);

Search.displayName = "Search";

export default Search;
