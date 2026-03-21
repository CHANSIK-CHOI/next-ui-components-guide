import { GuideLayout } from "@/components/Guide";
import { DateMultiplePickerGuideContent } from "@/guide-pages/date-multiple-picker";
import Head from "next/head";

export default function DateMultiplePickerGuidePage() {
  return (
    <>
      <Head>
        <title>DateMultiplePicker Guide | Next UI Components Guide</title>
        <meta
          name="description"
          content="controlled usage와 React Hook Form 연동 기준으로 DateMultiplePicker와 RHFDateMultiplePicker의 주요 props와 사용 패턴을 정리한 가이드 페이지입니다."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <GuideLayout
        title="DateMultiplePicker / RHFDateMultiplePicker"
        description="controlled usage와 React Hook Form 연동 기준으로 DateMultiplePicker와 RHFDateMultiplePicker의 주요 props와 사용 패턴을 정리한 가이드 페이지입니다."
      >
        <DateMultiplePickerGuideContent />
      </GuideLayout>
    </>
  );
}
