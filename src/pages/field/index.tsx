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
          content="Field, Field.Item, Field.Grid를 기준으로 폼 레이아웃 조합과 label, description, message 연결 규칙을 정리한 가이드 페이지입니다."
        />
      </Head>
      <GuideLayout
        title="Field"
        description="Field, Field.Item, Field.Grid를 기준으로 폼 레이아웃 조합과 label, description, message 연결 규칙을 정리한 가이드 페이지입니다."
      >
        <FieldGuideContent />
      </GuideLayout>
    </>
  );
}
