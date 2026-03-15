import Head from "next/head";
import { AlertGuideContent } from "@/guide-pages/alert";
import GuideLayout from "@/components/Guide/GuideLayout";

export default function AlertGuidePage() {
  return (
    <>
      <Head>
        <title>Alert Guide | Next UI Components Guide</title>
        <meta
          name="description"
          content="Alert와 useAlert usage를 기준으로 전역 호출, props, store stack 구조를 정리한 가이드 페이지입니다."
        />
      </Head>

      <GuideLayout
        currentPath="/alert"
        title="Alert"
        description="Alert와 useAlert usage를 기준으로 전역 호출, props, store stack 구조를 정리한 가이드 페이지입니다."
      >
        <AlertGuideContent />
      </GuideLayout>
    </>
  );
}
