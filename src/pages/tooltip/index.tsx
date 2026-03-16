import { GuideLayout } from "@/components/Guide";
import { TooltipGuideContent } from "@/guide-pages/tooltip";
import Head from "next/head";

export default function TooltipGuidePage() {
  return (
    <>
      <Head>
        <title>Tooltip Guide | Next UI Components Guide</title>
        <meta
          name="description"
          content="hover와 focus 기준의 Tooltip 컴포넌트를 placement, controlled open, disabled usage 중심으로 정리한 가이드 페이지입니다."
        />
      </Head>
      <GuideLayout
        title="Tooltip"
        description="hover와 focus 기준의 Tooltip 컴포넌트를 placement, controlled open, disabled usage 중심으로 정리한 가이드 페이지입니다."
      >
        <TooltipGuideContent />
      </GuideLayout>
    </>
  );
}
