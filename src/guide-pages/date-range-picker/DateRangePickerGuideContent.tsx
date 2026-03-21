import DateRangePickerPropsTableSection from "./DateRangePickerPropsTableSection";
import DateRangePickerControlledSection from "./DateRangePickerControlledSection";
import RHFDateRangePickerPropsTableSection from "./RHFDateRangePickerPropsTableSection";
import DateRangePickerRHFSection from "./DateRangePickerRHFSection";

export default function DateRangePickerGuideContent() {
  return (
    <>
      <DateRangePickerControlledSection />
      <hr />
      <DateRangePickerRHFSection />
      <hr />
      <DateRangePickerPropsTableSection />
      <hr />
      <RHFDateRangePickerPropsTableSection />
    </>
  );
}
