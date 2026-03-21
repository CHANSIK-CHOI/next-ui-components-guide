import RHFTextfieldPropsTableSection from "./RHFTextfieldPropsTableSection";
import TextfieldControlledSection from "./TextfieldControlledSection";
import TextfieldRHFSection from "./TextfieldRHFSection";
import TextfieldPropsTableSection from "./TextfieldPropsTableSection";

export default function TextfieldGuideContent() {
  return (
    <>
      <TextfieldControlledSection />
      <hr />
      <TextfieldRHFSection />
      <hr />
      <TextfieldPropsTableSection />
      <hr />
      <RHFTextfieldPropsTableSection />
    </>
  );
}
