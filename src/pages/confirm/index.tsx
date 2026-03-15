import Head from "next/head";
import { ConfirmGuideContent } from "@/guide-pages/confirm";
import GuideLayout from "@/components/Guide/GuideLayout";

export default function ConfirmGuidePage() {
  return (
    <>
      <Head>
        <title>Confirm Guide | Next UI Components Guide</title>
        <meta
          name="description"
          content="Confirm과 useConfirm usage를 기준으로 전역 호출, props, store stack 구조를 정리한 가이드 페이지입니다."
        />
      </Head>

      <GuideLayout
        currentPath="/confirm"
        title="Confirm"
        description="Confirm과 useConfirm usage를 기준으로 전역 호출, props, store stack 구조를 정리한 가이드 페이지입니다."
      >
        <ConfirmGuideContent />
      </GuideLayout>
    </>
  );
}
