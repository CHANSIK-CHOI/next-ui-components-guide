import { GuideLayout } from "@/components/Guide";
import { AccordionGuideContent } from "@/guide-pages/accordion";
import Head from "next/head";

export default function AccordionGuidePage() {
  return (
    <>
      <Head>
        <title>Accordion Guide | Next UI Components Guide</title>
        <meta
          name="description"
          content="compound 패턴의 Accordion 컴포넌트를 box/line variant, controlled activeIndices, shouldKeepMounted, buttonIndex usage 중심으로 정리한 가이드 페이지입니다."
        />
      </Head>
      <GuideLayout
        title="Accordion"
        description="compound 패턴의 Accordion 컴포넌트를 box/line variant, controlled activeIndices, shouldKeepMounted, buttonIndex usage 중심으로 정리한 가이드 페이지입니다."
      >
        <AccordionGuideContent />
      </GuideLayout>
    </>
  );
}
