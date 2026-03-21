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
          content="controlled usage와 React Hook Form 연동 기준으로 Radio, RadioGroup, RHFRadio의 주요 props와 사용 패턴을 정리한 가이드 페이지입니다."
        />
      </Head>
      <GuideLayout
        title="Radio / RadioGroup / RHFRadio"
        description="controlled usage와 React Hook Form 연동 기준으로 Radio, RadioGroup, RHFRadio의 주요 props와 사용 패턴을 정리한 가이드 페이지입니다."
      >
        <RadioGuideContent />
      </GuideLayout>
    </>
  );
}
