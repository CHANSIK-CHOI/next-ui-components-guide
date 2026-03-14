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
          content="controlled usage와 react-hook-form 연동 기준으로 Search와 RHFSearch의 props와 예시를 정리한 가이드 페이지입니다."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <GuideLayout
        currentPath="/search"
        title="Search / RHFSearch"
        description="controlled usage와 react-hook-form 연동 기준으로 Search와 RHFSearch의 props와 예시를 정리한 가이드 페이지입니다."
      >
        <SearchGuideContent />
      </GuideLayout>
    </>
  );
}
