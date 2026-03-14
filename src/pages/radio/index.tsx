import { RadioGuideContent } from "@/guide-pages/radio";
import { GuideLayout } from "@/components/Guide";
import Head from "next/head";

export default function RadioGuidePage() {
  return (
    <>
      <Head>
        <title>Radio Guide | Next UI Components Guide</title>
        <meta
          name="description"
          content="controlled usage와 React Hook Form 연동 기준으로 Radio, RadioGroup, RHFRadio의 props와 예시를 정리한 가이드 페이지입니다."
        />
      </Head>
      <GuideLayout
        currentPath="/radio"
        title="Radio / RadioGroup / RHFRadio"
        description="controlled usage와 React Hook Form 연동 기준으로 Radio, RadioGroup, RHFRadio의 props와 예시를 정리한 가이드 페이지입니다."
      >
        <RadioGuideContent />
      </GuideLayout>
    </>
  );
}
