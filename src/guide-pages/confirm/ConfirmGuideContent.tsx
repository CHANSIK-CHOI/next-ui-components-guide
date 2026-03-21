import ConfirmOptionsTableSection from "./ConfirmOptionsTableSection";
import ConfirmSection from "./ConfirmSection";
import UseConfirmTableSection from "./UseConfirmTableSection";

export default function ConfirmGuideContent() {
  return (
    <>
      <ConfirmSection />
      <hr />
      <ConfirmOptionsTableSection />
      <hr />
      <UseConfirmTableSection />
    </>
  );
}
