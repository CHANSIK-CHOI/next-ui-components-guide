import ButtonGroupSection from "./ButtonGroupSection";
import ButtonGroupPropsTableSection from "./ButtonGroupPropsTableSection";
import ButtonLinkSection from "./ButtonLinkSection";
import ButtonLinkPropsTableSection from "./ButtonLinkPropsTableSection";
import ButtonPropsTableSection from "./ButtonPropsTableSection";
import ButtonSection from "./ButtonSection";
import IconButtonPropsTableSection from "./IconButtonPropsTableSection";
import IconButtonSection from "./IconButtonSection";

export default function ButtonGuideContent() {
  return (
    <>
      <ButtonSection />
      <hr />
      <ButtonLinkSection />
      <hr />
      <IconButtonSection />
      <hr />
      <ButtonGroupSection />
      <hr />
      <ButtonPropsTableSection />
      <hr />
      <ButtonLinkPropsTableSection />
      <hr />
      <IconButtonPropsTableSection />
      <hr />
      <ButtonGroupPropsTableSection />
    </>
  );
}
