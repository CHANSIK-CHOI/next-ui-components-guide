import RadioControlledSection from "./RadioControlledSection";
import RadioGroupPropsTableSection from "./RadioGroupPropsTableSection";
import RadioPropsTableSection from "./RadioPropsTableSection";
import RadioRHFSection from "./RadioRHFSection";
import RHFRadioPropsTableSection from "./RHFRadioPropsTableSection";

export default function RadioGuideContent() {
  return (
    <>
      <RadioControlledSection />
      <hr />
      <RadioRHFSection />
      <hr />
      <RadioPropsTableSection />
      <hr />
      <RadioGroupPropsTableSection />
      <hr />
      <RHFRadioPropsTableSection />
    </>
  );
}
