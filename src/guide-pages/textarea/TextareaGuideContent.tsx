import RHFTextareaPropsTableSection from "./RHFTextareaPropsTableSection";
import TextareaControlledSection from "./TextareaControlledSection";
import TextareaPropsTableSection from "./TextareaPropsTableSection";
import TextareaRHFSection from "./TextareaRHFSection";

export default function TextareaGuideContent() {
  return (
    <>
      <TextareaControlledSection />
      <hr />
      <TextareaRHFSection />
      <hr />
      <TextareaPropsTableSection />
      <hr />
      <RHFTextareaPropsTableSection />
    </>
  );
}
