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
          content="Password와 RHFPassword 컴포넌트의 props와 예시를 정리한 가이드 페이지입니다."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <GuideLayout
        currentPath="/password"
        title="Password / RHFPassword"
        description="Textfield props를 확장한 Password와 RHFTextfield 기반 RHFPassword의 props와 예시를 정리한 가이드 페이지입니다."
      >
        <PasswordGuideContent />
      </GuideLayout>
    </>
  );
}
