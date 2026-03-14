import { GuideLayout } from "@/components/Guide";
import { TextfieldGuideContent } from "@/guide-pages/textfield";
import Head from "next/head";

export default function TextfieldGuidePage() {
  return (
    <>
      <Head>
        <title>Textfield Guide | Next UI Components Guide</title>
        <meta
          name="description"
          content="controlled usage와 react-hook-form 연동 기준으로 Textfield와 RHFTextfield의 props와 예시를 정리한 가이드 페이지입니다."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <GuideLayout
        currentPath="/textfield"
        title="Textfield / RHFTextfield"
        description="controlled usage와 react-hook-form 연동 기준으로 Textfield와 RHFTextfield의 props와 예시를 정리한 가이드 페이지입니다."
      >
        <TextfieldGuideContent />
      </GuideLayout>
    </>
  );
}
