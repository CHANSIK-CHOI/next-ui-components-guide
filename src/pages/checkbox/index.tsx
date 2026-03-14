import { CheckboxGuideContent } from "@/guide-pages/checkbox";
import { GuideLayout } from "@/components/Guide";
import Head from "next/head";

export default function CheckboxGuidePage() {
  return (
    <>
      <Head>
        <title>Checkbox 가이드 | Next UI Components Guide</title>
        <meta
          name="description"
          content="controlled usage와 react-hook-form 연동 기준으로 Checkbox, CheckboxGroup, RHFCheckbox의 props와 예시를 정리한 가이드 페이지입니다."
        />
      </Head>
      <GuideLayout
        currentPath="/checkbox"
        title="Checkbox / CheckboxGroup / RHFCheckbox"
        description="controlled usage와 react-hook-form 연동 기준으로 Checkbox, CheckboxGroup, RHFCheckbox의 props와 예시를 정리한 가이드 페이지입니다."
      >
        <CheckboxGuideContent />
      </GuideLayout>
    </>
  );
}
