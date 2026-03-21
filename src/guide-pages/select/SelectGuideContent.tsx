import MultiSelectPropsTableSection from "./MultiSelectPropsTableSection";
import RHFMultiSelectPropsTableSection from "./RHFMultiSelectPropsTableSection";
import RHFSelectPropsTableSection from "./RHFSelectPropsTableSection";
import SelectControlledSection from "./SelectControlledSection";
import SelectPropsTableSection from "./SelectPropsTableSection";
import SelectRHFSection from "./SelectRHFSection";

export default function SelectGuideContent() {
  return (
    <>
      <SelectControlledSection />
      <hr />
      <SelectRHFSection />
      <hr />
      <SelectPropsTableSection />
      <hr />
      <MultiSelectPropsTableSection />
      <hr />
      <RHFSelectPropsTableSection />
      <hr />
      <RHFMultiSelectPropsTableSection />
    </>
  );
}
