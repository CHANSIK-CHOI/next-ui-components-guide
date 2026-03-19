import { GuideLayout } from "@/components/Guide";
import { FieldGuideContent } from "@/guide-pages/field";
import Head from "next/head";

export default function FieldGuidePage() {
  return (
    <>
      <Head>
        <title>Field Guide | Next UI Components Guide</title>
        <meta
          name="description"
          content="Field 컴포넌트의 label, description, message, item 조합과 실제 폼 레이아웃 예시를 정리한 가이드 페이지입니다."
        />
      </Head>
      <GuideLayout
        title="Field"
        description="Field 컴포넌트의 label, description, message, item 조합과 실제 폼 레이아웃 예시를 정리한 가이드 페이지입니다."
      >
        <FieldGuideContent />
      </GuideLayout>
    </>
  );
}
