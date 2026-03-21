import RHFSearchPropsTableSection from "./RHFSearchPropsTableSection";
import SearchControlledSection from "./SearchControlledSection";
import SearchPropsTableSection from "./SearchPropsTableSection";
import SearchRHFSection from "./SearchRHFSection";

export default function SearchGuideContent() {
  return (
    <>
      <SearchControlledSection />
      <hr />
      <SearchRHFSection />
      <hr />
      <SearchPropsTableSection />
      <hr />
      <RHFSearchPropsTableSection />
    </>
  );
}
