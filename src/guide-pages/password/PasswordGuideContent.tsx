import PasswordPropsTableSection from "./PasswordPropsTableSection";
import PasswordControlledSection from "./PasswordControlledSection";
import RHFPasswordPropsTableSection from "./RHFPasswordPropsTableSection";
import PasswordRHFSection from "./PasswordRHFSection";

export default function PasswordGuideContent() {
  return (
    <>
      <PasswordControlledSection />
      <hr />
      <PasswordRHFSection />
      <hr />
      <PasswordPropsTableSection />
      <hr />
      <RHFPasswordPropsTableSection />
    </>
  );
}
