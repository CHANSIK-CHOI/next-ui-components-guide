import { RadioGuideContent } from "@/guide-pages/radio";
import { GuideLayout } from "@/components/Guide";
import Head from "next/head";

export default function RadioGuidePage() {
  return (
    <>
      <Head>
        <title>Radio 가이드 | Next UI Components Guide</title>
        <meta
          name="description"
          content="Radio와 RHFRadio 컴포넌트의 props와 예시를 정리한 가이드 페이지입니다."
        />
      </Head>
      <GuideLayout
        currentPath="/radio"
        title="Radio / RHFRadio"
        description="단일 선택, 그룹 레이아웃, Field 조합과 react-hook-form 연결 예시를 정리한 가이드 페이지입니다."
      >
        <RadioGuideContent />
      </GuideLayout>
    </>
  );
}
