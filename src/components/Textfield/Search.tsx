import { forwardRef } from "react";
import Textfield, { type TextfieldProps } from "./Textfield";
import TextfieldBtn from "./TextfieldBtn";

type SearchProps = Omit<TextfieldProps, "children" | "type"> & {
  onSearch?: () => void;
  searchButtonTitle?: string;
};

const Search = forwardRef<HTMLInputElement, SearchProps>(
  (
    {
      onSearch,
      searchButtonTitle = "검색",
      disabled = false,
      ...restTextfieldProps
    },
    ref,
  ) => {
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
          onClick={onSearch}
          disabled={disabled}
        />
      </Textfield>
    );
  },
);

Search.displayName = "Search";

export default Search;
