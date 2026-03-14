import { GuideLayout } from "@/components/Guide";
import { DatepickerGuideContent } from "@/guide-pages/datepicker";
import Head from "next/head";

export default function DatepickerGuidePage() {
  return (
    <>
      <Head>
        <title>Datepicker Guide | Next UI Components Guide</title>
        <meta
          name="description"
          content="controlled usage와 React Hook Form 연동 기준으로 Datepicker와 RHFDatepicker의 props와 예시를 정리한 가이드 페이지입니다."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <GuideLayout
        currentPath="/datepicker"
        title="Datepicker / RHFDatepicker"
        description="controlled usage와 React Hook Form 연동 기준으로 Datepicker와 RHFDatepicker의 props와 예시를 정리한 가이드 페이지입니다."
      >
        <DatepickerGuideContent />
      </GuideLayout>
    </>
  );
}
