import { GuideLayout } from "@/components/Guide";
import { SwitchGuideContent } from "@/guide-pages/switch";
import Head from "next/head";

export default function SwitchGuidePage() {
  return (
    <>
      <Head>
        <title>Switch Guide | Next UI Components Guide</title>
        <meta
          name="description"
          content="controlled usage와 React Hook Form 연동 기준으로 Switch와 RHFSwitch의 주요 props와 사용 패턴을 정리한 가이드 페이지입니다."
        />
      </Head>
      <GuideLayout
        title="Switch / RHFSwitch"
        description="controlled usage와 React Hook Form 연동 기준으로 Switch와 RHFSwitch의 주요 props와 사용 패턴을 정리한 가이드 페이지입니다."
      >
        <SwitchGuideContent />
      </GuideLayout>
    </>
  );
}
