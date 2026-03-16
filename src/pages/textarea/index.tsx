import { GuideLayout } from "@/components/Guide";
import { TextareaGuideContent } from "@/guide-pages/textarea";
import Head from "next/head";

export default function TextareaGuidePage() {
  return (
    <>
      <Head>
        <title>Textarea Guide | Next UI Components Guide</title>
        <meta
          name="description"
          content="controlled usage와 React Hook Form 연동 기준으로 Textarea와 RHFTextarea의 props와 예시를 정리한 가이드 페이지입니다."
        />
      </Head>

      <GuideLayout
        title="Textarea / RHFTextarea"
        description="controlled usage와 React Hook Form 연동 기준으로 Textarea와 RHFTextarea의 props와 예시를 정리한 가이드 페이지입니다."
      >
        <TextareaGuideContent />
      </GuideLayout>
    </>
  );
}
