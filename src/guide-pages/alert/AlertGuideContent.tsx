import AlertOptionsTableSection from "./AlertOptionsTableSection";
import AlertSection from "./AlertSection";
import UseAlertTableSection from "./UseAlertTableSection";

export default function AlertGuideContent() {
  return (
    <>
      <AlertSection />
      <hr />
      <AlertOptionsTableSection />
      <hr />
      <UseAlertTableSection />
    </>
  );
}
