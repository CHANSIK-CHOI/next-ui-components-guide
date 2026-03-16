import Head from "next/head";
import { BottomSheetGuideContent } from "@/guide-pages/bottom-sheet";
import GuideLayout from "@/components/Guide/GuideLayout";

export default function BottomSheetGuidePage() {
  return (
    <>
      <Head>
        <title>BottomSheet Guide | Next UI Components Guide</title>
        <meta
          name="description"
          content="BottomSheet와 useBottomSheet usage를 기준으로 하단 시트 구조와 컴포넌트 등록형 popup 흐름을 정리한 가이드 페이지입니다."
        />
      </Head>

      <GuideLayout
        title="BottomSheet"
        description="BottomSheet와 useBottomSheet usage를 기준으로 하단 시트 구조와 컴포넌트 등록형 popup 흐름을 정리한 가이드 페이지입니다."
      >
        <BottomSheetGuideContent />
      </GuideLayout>
    </>
  );
}
