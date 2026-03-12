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
          content="Textfield와 RHFTextfield 컴포넌트의 props와 예시를 정리한 가이드 페이지입니다."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <GuideLayout
        currentPath="/textfield"
        title="Textfield / RHFTextfield"
        description="controlled usage를 전제로 한 Textfield와 react-hook-form 연결용 RHFTextfield의 props와 예시를 정리한 가이드 페이지입니다."
      >
        <TextfieldGuideContent />
      </GuideLayout>
    </>
  );
}
