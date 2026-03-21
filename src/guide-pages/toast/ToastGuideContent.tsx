import ToastHooksTableSection from "./ToastHooksTableSection";
import ToastOptionsTableSection from "./ToastOptionsTableSection";
import ToastSection from "./ToastSection";

export default function ToastGuideContent() {
  return (
    <>
      <ToastSection />
      <hr />
      <ToastOptionsTableSection />
      <hr />
      <ToastHooksTableSection />
    </>
  );
}
