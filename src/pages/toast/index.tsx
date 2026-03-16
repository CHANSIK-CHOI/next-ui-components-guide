import Head from "next/head";
import GuideLayout from "@/components/Guide/GuideLayout";
import { ToastGuideContent } from "@/guide-pages/toast";

export default function ToastGuidePage() {
  return (
    <>
      <Head>
        <title>Toast Guide | Next UI Components Guide</title>
        <meta
          name="description"
          content="Toast와 useToast usage를 기준으로 non-modal feedback UI의 옵션, stacking, accessibility 규칙을 정리한 가이드 페이지입니다."
        />
      </Head>

      <GuideLayout
        title="Toast"
        description="Toast와 useToast usage를 기준으로 non-modal feedback UI의 옵션, stacking, accessibility 규칙을 정리한 가이드 페이지입니다."
      >
        <ToastGuideContent />
      </GuideLayout>
    </>
  );
}
