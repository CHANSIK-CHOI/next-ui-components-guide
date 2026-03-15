import { GuideLayout } from "@/components/Guide";
import { PopupGuideContent } from "@/guide-pages/popup";
import Head from "next/head";

export default function PopupGuidePage() {
  return (
    <>
      <Head>
        <title>Popup Guide | Next UI Components Guide</title>
        <meta
          name="description"
          content="PopupBase component와 전역 Alert usage를 기준으로 portal/provider/store 구조를 정리한 가이드 페이지입니다."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <GuideLayout
        currentPath="/popup"
        title="Popup / Alert"
        description="PopupBase component와 전역 Alert usage를 기준으로 portal/provider/store 구조를 정리한 가이드 페이지입니다."
      >
        <PopupGuideContent />
      </GuideLayout>
    </>
  );
}
