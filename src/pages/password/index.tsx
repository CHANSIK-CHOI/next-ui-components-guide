import { GuideLayout } from "@/components/Guide";
import { PasswordGuideContent } from "@/guide-pages/password";
import Head from "next/head";

export default function PasswordGuidePage() {
  return (
    <>
      <Head>
        <title>Password Guide | Next UI Components Guide</title>
        <meta
          name="description"
          content="controlled usage와 React Hook Form 연동 기준으로 Password와 RHFPassword의 props와 예시를 정리한 가이드 페이지입니다."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <GuideLayout
        currentPath="/password"
        title="Password / RHFPassword"
        description="controlled usage와 React Hook Form 연동 기준으로 Password와 RHFPassword의 props와 예시를 정리한 가이드 페이지입니다."
      >
        <PasswordGuideContent />
      </GuideLayout>
    </>
  );
}
