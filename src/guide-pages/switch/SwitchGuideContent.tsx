import SwitchControlledSection from "./SwitchControlledSection";
import SwitchPropsTableSection from "./SwitchPropsTableSection";
import SwitchRHFSection from "./SwitchRHFSection";
import RHFSwitchPropsTableSection from "./RHFSwitchPropsTableSection";

export default function SwitchGuideContent() {
  return (
    <>
      <SwitchControlledSection />
      <hr />
      <SwitchRHFSection />
      <hr />
      <SwitchPropsTableSection />
      <hr />
      <RHFSwitchPropsTableSection />
    </>
  );
}
