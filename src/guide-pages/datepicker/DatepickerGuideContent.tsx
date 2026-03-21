import DatepickerPropsTableSection from "./DatepickerPropsTableSection";
import DatepickerControlledSection from "./DatepickerControlledSection";
import RHFDatepickerPropsTableSection from "./RHFDatepickerPropsTableSection";
import DatepickerRHFSection from "./DatepickerRHFSection";

export default function DatepickerGuideContent() {
  return (
    <>
      <DatepickerControlledSection />
      <hr />
      <DatepickerRHFSection />
      <hr />
      <DatepickerPropsTableSection />
      <hr />
      <RHFDatepickerPropsTableSection />
    </>
  );
}
