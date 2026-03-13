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
          content="DateMultiplePicker와 RHFDateMultiplePicker 컴포넌트의 props와 예시를 정리한 가이드 페이지입니다."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <GuideLayout
        currentPath="/date-multiple-picker"
        title="DateMultiplePicker / RHFDateMultiplePicker"
        description="복수 날짜 선택에 맞춘 DateMultiplePicker와 RHFDateMultiplePicker의 props와 예시를 정리한 가이드 페이지입니다."
      >
        <DateMultiplePickerGuideContent />
      </GuideLayout>
    </>
  );
}
