import Head from "next/head";
import { LayerPopupGuideContent } from "@/guide-pages/layer-popup";
import GuideLayout from "@/components/Guide/GuideLayout";

export default function LayerPopupGuidePage() {
  return (
    <>
      <Head>
        <title>LayerPopup Guide | Next UI Components Guide</title>
        <meta
          name="description"
          content="LayerPopup과 useLayerPopup usage를 기준으로 컴포넌트 등록형 popup 구조와 전역 store stack 흐름을 정리한 가이드 페이지입니다."
        />
      </Head>

      <GuideLayout
        title="LayerPopup"
        description="LayerPopup과 useLayerPopup usage를 기준으로 컴포넌트 등록형 popup 구조와 전역 store stack 흐름을 정리한 가이드 페이지입니다."
      >
        <LayerPopupGuideContent />
      </GuideLayout>
    </>
  );
}
