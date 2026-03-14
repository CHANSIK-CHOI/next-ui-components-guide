import { GuideLayout } from "@/components/Guide";
import { DateRangePickerGuideContent } from "@/guide-pages/date-range-picker";
import Head from "next/head";

export default function DateRangePickerGuidePage() {
  return (
    <>
      <Head>
        <title>DateRangePicker Guide | Next UI Components Guide</title>
        <meta
          name="description"
          content="controlled usage와 react-hook-form 연동 기준으로 DateRangePicker와 RHFDateRangePicker의 props와 예시를 정리한 가이드 페이지입니다."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <GuideLayout
        currentPath="/date-range-picker"
        title="DateRangePicker / RHFDateRangePicker"
        description="controlled usage와 react-hook-form 연동 기준으로 DateRangePicker와 RHFDateRangePicker의 props와 예시를 정리한 가이드 페이지입니다."
      >
        <DateRangePickerGuideContent />
      </GuideLayout>
    </>
  );
}
