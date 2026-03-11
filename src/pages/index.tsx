import {
  Button,
  ButtonGroup,
  GuideCardLink,
  GuideLayout,
  GuideSection,
} from "@/components";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next UI Components Guide</title>
        <meta
          name="description"
          content="컴포넌트 페이지 단위로 정리하는 Next UI Components Guide"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GuideLayout
        currentPath="/"
        title="UI Components Guide"
        description="Next.js 환경에서 제가 처음부터 끝까지 직접 구현한 UI 컴포넌트 가이드입니다."
      >
        <GuideSection
          label="Link to Guide Page"
          title="컴포넌트 가이드 페이지로 이동"
          description={
            <>
              제작 된 컴포넌트 가이드 페이지로 이동하여 확인해보세요.
              <br />
              먼저 Button 컴포넌트 가이드 페이지로 이동됩니다.
            </>
          }
        >
          <GuideCardLink
            href="/button"
            label="Link"
            title="Button"
            description="Button과 ButtonGroup의 기본 조합"
          />
        </GuideSection>

        <GuideSection
          label="Preview"
          title="미리보기"
          description="제작된 컴포넌트들의 구성을 미리 확인해보세요!"
        >
          <ButtonGroup>
            <ButtonGroup.Item isAutoWidth>
              <Button variant="line">취소</Button>
            </ButtonGroup.Item>
            <ButtonGroup.Item>
              <Button color="primary">확인</Button>
            </ButtonGroup.Item>
          </ButtonGroup>
        </GuideSection>
      </GuideLayout>
    </>
  );
}
