import DateMultiplePickerPropsTableSection from "./DateMultiplePickerPropsTableSection";
import DateMultiplePickerControlledSection from "./DateMultiplePickerControlledSection";
import RHFDateMultiplePickerPropsTableSection from "./RHFDateMultiplePickerPropsTableSection";
import DateMultiplePickerRHFSection from "./DateMultiplePickerRHFSection";

export default function DateMultiplePickerGuideContent() {
  return (
    <>
      <DateMultiplePickerControlledSection />
      <hr />
      <DateMultiplePickerRHFSection />
      <hr />
      <DateMultiplePickerPropsTableSection />
      <hr />
      <RHFDateMultiplePickerPropsTableSection />
    </>
  );
}
