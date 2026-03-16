import Head from "next/head";
import { FullPopupGuideContent } from "@/guide-pages/full-popup";
import GuideLayout from "@/components/Guide/GuideLayout";

export default function FullPopupGuidePage() {
  return (
    <>
      <Head>
        <title>FullPopup Guide | Next UI Components Guide</title>
        <meta
          name="description"
          content="FullPopup과 useFullPopup usage를 기준으로 전체 화면 popup 구조와 컴포넌트 등록형 흐름을 정리한 가이드 페이지입니다."
        />
      </Head>

      <GuideLayout
        title="FullPopup"
        description="FullPopup과 useFullPopup usage를 기준으로 전체 화면 popup 구조와 컴포넌트 등록형 흐름을 정리한 가이드 페이지입니다."
      >
        <FullPopupGuideContent />
      </GuideLayout>
    </>
  );
}
