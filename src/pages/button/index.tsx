import { GuideLayout } from "@/components/Guide";
import { ButtonGuideContent } from "@/guide-pages/button";
import Head from "next/head";

export default function ButtonGuidePage() {
  return (
    <>
      <Head>
        <title>Button Guide | Next UI Components Guide</title>
        <meta
          name="description"
          content="Button / ButtonLink / IconButton / ButtonGroup 컴포넌트의 props와 예시를 정리한 가이드 페이지입니다."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <GuideLayout
        currentPath="/button"
        title="Button / ButtonLink / IconButton / ButtonGroup"
        description="Button, ButtonLink, IconButton, ButtonGroup 컴포넌트의 props와 예시를 정리한 가이드 페이지입니다."
      >
        <ButtonGuideContent />
      </GuideLayout>
    </>
  );
}
