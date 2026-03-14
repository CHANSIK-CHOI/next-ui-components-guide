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
          content="Checkbox와 RHFCheckbox 컴포넌트의 props와 예시를 정리한 가이드 페이지입니다."
        />
      </Head>
      <GuideLayout
        currentPath="/checkbox"
        title="Checkbox / RHFCheckbox"
        description="단일 체크박스, 그룹 레이아웃, Field 조합과 react-hook-form 연결 예시를 정리한 가이드 페이지입니다."
      >
        <CheckboxGuideContent />
      </GuideLayout>
    </>
  );
}
