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
          content="Button, ButtonLink, IconButton, ButtonGroup의 주요 props와 조합 패턴을 정리한 가이드 페이지입니다."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <GuideLayout
        title="Button / ButtonLink / IconButton / ButtonGroup"
        description="Button, ButtonLink, IconButton, ButtonGroup의 주요 props와 조합 패턴을 정리한 가이드 페이지입니다."
      >
        <ButtonGuideContent />
      </GuideLayout>
    </>
  );
}
