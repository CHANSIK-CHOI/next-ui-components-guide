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
          content="DateRangePicker와 RHFDateRangePicker 컴포넌트의 props와 예시를 정리한 가이드 페이지입니다."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <GuideLayout
        currentPath="/date-range-picker"
        title="DateRangePicker / RHFDateRangePicker"
        description="기간 선택에 맞춘 DateRangePicker와 RHFDateRangePicker의 props와 예시를 정리한 가이드 페이지입니다."
      >
        <DateRangePickerGuideContent />
      </GuideLayout>
    </>
  );
}
