import AccordionButtonPropsTableSection from "./AccordionButtonPropsTableSection";
import AccordionHeadPropsTableSection from "./AccordionHeadPropsTableSection";
import AccordionItemPropsTableSection from "./AccordionItemPropsTableSection";
import AccordionPanelPropsTableSection from "./AccordionPanelPropsTableSection";
import AccordionPropsTableSection from "./AccordionPropsTableSection";
import AccordionSection from "./AccordionSection";

export default function AccordionGuideContent() {
  return (
    <>
      <AccordionSection />
      <hr />
      <AccordionPropsTableSection />
      <hr />
      <AccordionItemPropsTableSection />
      <hr />
      <AccordionButtonPropsTableSection />
      <hr />
      <AccordionHeadPropsTableSection />
      <hr />
      <AccordionPanelPropsTableSection />
    </>
  );
}
