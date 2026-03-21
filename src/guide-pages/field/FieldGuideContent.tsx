import FieldDescriptionPropsTableSection from "./FieldDescriptionPropsTableSection";
import FieldGridPropsTableSection from "./FieldGridPropsTableSection";
import FieldItemPropsTableSection from "./FieldItemPropsTableSection";
import FieldLabelPropsTableSection from "./FieldLabelPropsTableSection";
import FieldMessagePropsTableSection from "./FieldMessagePropsTableSection";
import FieldPropsTableSection from "./FieldPropsTableSection";
import FieldSection from "./FieldSection";

export default function FieldGuideContent() {
  return (
    <>
      <FieldSection />
      <hr />
      <FieldPropsTableSection />
      <hr />
      <FieldItemPropsTableSection />
      <hr />
      <FieldGridPropsTableSection />
      <hr />
      <FieldLabelPropsTableSection />
      <hr />
      <FieldDescriptionPropsTableSection />
      <hr />
      <FieldMessagePropsTableSection />
    </>
  );
}
