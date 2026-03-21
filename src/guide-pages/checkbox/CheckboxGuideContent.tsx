import CheckboxControlledSection from "./CheckboxControlledSection";
import CheckboxGroupPropsTableSection from "./CheckboxGroupPropsTableSection";
import CheckboxPropsTableSection from "./CheckboxPropsTableSection";
import CheckboxRHFSection from "./CheckboxRHFSection";
import RHFCheckboxPropsTableSection from "./RHFCheckboxPropsTableSection";

export default function CheckboxGuideContent() {
  return (
    <>
      <CheckboxControlledSection />
      <hr />
      <CheckboxRHFSection />
      <hr />
      <CheckboxPropsTableSection />
      <hr />
      <CheckboxGroupPropsTableSection />
      <hr />
      <RHFCheckboxPropsTableSection />
    </>
  );
}
