import { GuideLayout } from "@/components/Guide";
import { SelectGuideContent } from "@/guide-pages/select";
import Head from "next/head";

export default function SelectGuidePage() {
  return (
    <>
      <Head>
        <title>Select Guide | Next UI Components Guide</title>
        <meta
          name="description"
          content="react-select 기반 Select, MultiSelect, RHFSelect, RHFMultiSelect의 controlled usage, React Hook Form 연동, props 확장 패턴을 정리한 가이드 페이지입니다."
        />
      </Head>

      <GuideLayout
        title="Select / MultiSelect / RHFSelect / RHFMultiSelect"
        description="react-select 기반 Select, MultiSelect, RHFSelect, RHFMultiSelect의 controlled usage, React Hook Form 연동, props 확장 패턴을 정리한 가이드 페이지입니다."
      >
        <SelectGuideContent />
      </GuideLayout>
    </>
  );
}
