import { GuideLayout } from "@/components/Guide";
import { SearchGuideContent } from "@/guide-pages/search";
import Head from "next/head";

export default function SearchGuidePage() {
  return (
    <>
      <Head>
        <title>Search Guide | Next UI Components Guide</title>
        <meta
          name="description"
          content="Search와 RHFSearch 컴포넌트의 props와 예시를 정리한 가이드 페이지입니다."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <GuideLayout
        currentPath="/search"
        title="Search / RHFSearch"
        description="Textfield props를 확장한 Search와 RHFTextfield 기반 RHFSearch의 props와 예시를 정리한 가이드 페이지입니다."
      >
        <SearchGuideContent />
      </GuideLayout>
    </>
  );
}
