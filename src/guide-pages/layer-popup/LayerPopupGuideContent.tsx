import LayerPopupPropsTableSection from "./LayerPopupPropsTableSection";
import LayerPopupSection from "./LayerPopupSection";
import UseLayerPopupTableSection from "./UseLayerPopupTableSection";

export default function LayerPopupGuideContent() {
  return (
    <>
      <LayerPopupSection />
      <hr />
      <LayerPopupPropsTableSection />
      <hr />
      <UseLayerPopupTableSection />
    </>
  );
}
