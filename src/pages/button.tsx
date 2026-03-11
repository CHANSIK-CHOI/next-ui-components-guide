import {
  Button,
  ButtonGroup,
  ButtonLink,
  GuideLayout,
  GuideProp,
  GuideSection,
  IconButton,
} from "@/components";
import { HomeIcon, PlusIcon } from "@/components/Icon";
import Head from "next/head";

export default function ButtonGuidePage() {
  return (
    <>
      <Head>
        <title>Button Guide | Next UI Components Guide</title>
        <meta
          name="description"
          content="Button, ButtonLink, IconButton, ButtonGroup 컴포넌트의 props와 예시를 정리한 가이드 페이지입니다."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <GuideLayout
        currentPath="/button"
        title="Button / ButtonLink / IconButton / ButtonGroup"
        description="Button, ButtonLink, IconButton, ButtonGroup 컴포넌트의 props와 예시를 정리한 가이드 페이지입니다."
      >
        <GuideProp
          name="size"
          typeLabel={`"large" | "medium" | "small"`}
          defaultValue={`"large"`}
        >
          <Button>Large Button</Button>
          <Button size="medium">Medium Button</Button>
          <Button size="small">Small Button</Button>
        </GuideProp>

        <GuideProp
          name="color"
          typeLabel={`"black" | "primary" | "secondary" | "point"`}
          defaultValue={`"black"`}
        >
          <Button>Black</Button>
          <Button color="primary">Primary</Button>
          <Button color="secondary">Secondary</Button>
          <Button color="point">Point</Button>
        </GuideProp>

        <GuideProp
          name="variant"
          typeLabel={`"solid" | "line" | "text"`}
          defaultValue={`"solid"`}
          description="solid와 line은 shape와 조합할 수 있고, text는 단독으로 사용합니다."
        >
          <Button>Solid Button</Button>
          <Button variant="line" color="primary">
            Line Button
          </Button>
          <Button variant="text" color="secondary">
            Text Button
          </Button>
        </GuideProp>

        <GuideProp
          name="shape"
          typeLabel={`"round" | "square"`}
          defaultValue={`"square"`}
        >
          <Button>Square Button</Button>
          <Button shape="round" color="primary">
            Round Button
          </Button>
          <Button variant="line" shape="round" color="secondary">
            Round Line
          </Button>
        </GuideProp>

        <GuideProp
          name="icon"
          typeLabel="React.ReactNode"
          description="아이콘을 버튼 텍스트 앞에 배치할 수 있습니다."
        >
          <Button icon={<PlusIcon />}>Add Item</Button>
          <Button icon={<PlusIcon />} color="primary" shape="round">
            Create
          </Button>
          <Button icon={<PlusIcon />} variant="line" color="secondary">
            More
          </Button>
        </GuideProp>

        <GuideSection
          label="Prop Spreading"
          title="Button 컴포넌트의 props 위임"
          description="Button의 디자인 props를 공유하면서 button 태그의 props를 그대로 전달합니다."
        >
          <GuideProp name="disabled" typeLabel="boolean" defaultValue="false">
            <Button disabled>Disabled</Button>
            <Button disabled color="primary">
              Disabled Primary
            </Button>
            <Button disabled variant="line" color="secondary">
              Disabled Line
            </Button>
          </GuideProp>

          <GuideProp
            name="type"
            typeLabel={`"button" | "submit" | "reset" | undefined`}
            defaultValue="button"
          >
            <Button type="submit">Submit Button</Button>
          </GuideProp>

          <GuideProp
            name="onClick"
            typeLabel="React.MouseEventHandler<HTMLButtonElement>"
            defaultValue="undefined"
          >
            <Button shape="round" color="point" onClick={(e) => console.log(e)}>
              Click Me !!
            </Button>
          </GuideProp>
        </GuideSection>

        <GuideSection
          label="ButtonLink"
          title="ButtonLink / props 위임"
          description="ButtonLink는 Button과 동일한 디자인 props를 공유하면서 Next Link의 native props를 그대로 전달합니다."
        >
          <GuideProp
            name="href"
            typeLabel="string | UrlObject"
            description="ButtonLink에서 필수로 전달해야 하는 이동 경로입니다."
          >
            <ButtonLink href="/" icon={<HomeIcon />}>
              홈으로 이동
            </ButtonLink>
          </GuideProp>

          <GuideProp
            name="native link props"
            typeLabel="target | rel | prefetch | replace ..."
            description="정의하지 않은 링크 관련 props는 Next Link로 위임됩니다."
          >
            <ButtonLink
              href="https://nextjs.org"
              target="_blank"
              rel="noreferrer"
              shape="round"
              color="point"
            >
              Next.js Docs 새창 열기
            </ButtonLink>
          </GuideProp>
        </GuideSection>

        <GuideSection
          label="IconButton"
          title="IconButton / props 위임"
          description="IconButton은 Button의 디자인 props를 공유하면서 button 태그의 props를 그대로 전달합니다."
        >
          <GuideProp
            name="children"
            typeLabel="React.ReactNode"
            description={
              '아이콘 노드를 children으로 전달합니다. icon prop과 variant="text"는 사용할 수 없습니다.'
            }
            isWide
          >
            <IconButton aria-label="항목 추가">
              <PlusIcon />
            </IconButton>

            <IconButton aria-label="항목 추가" size="medium" color="primary">
              <PlusIcon />
            </IconButton>

            <IconButton
              aria-label="항목 추가"
              size="small"
              variant="line"
              color="secondary"
              shape="round"
            >
              <PlusIcon />
            </IconButton>
          </GuideProp>

          <GuideProp
            name="aria-label"
            typeLabel="string"
            defaultValue="undefined"
            description="텍스트 없이 아이콘만 보이는 버튼에서는 접근성 이름을 반드시 지정합니다."
            isWide
          >
            <IconButton aria-label="홈으로 이동" variant="line">
              <HomeIcon />
            </IconButton>

            <IconButton aria-label="항목 추가" color="primary" shape="round">
              <PlusIcon />
            </IconButton>
          </GuideProp>
        </GuideSection>

        <GuideSection
          label="ButtonGroup"
          title="ButtonGroup / ButtonGroup.Item"
          description="ButtonGroup은 버튼 배열과 각 아이템의 폭 패턴을 정리할 때 사용합니다."
        >
          <GuideProp
            name="children"
            typeLabel="React.ReactNode"
            description="기본 레이아웃에서는 각 항목이 가능한 영역을 균등하게 나눠 가집니다."
            isWide
          >
            <ButtonGroup>
              <ButtonGroup.Item>
                <Button variant="line">취소</Button>
              </ButtonGroup.Item>
              <ButtonGroup.Item>
                <Button color="primary">확인</Button>
              </ButtonGroup.Item>
            </ButtonGroup>
          </GuideProp>

          <GuideProp
            isWide
            name="isAutoWidth"
            typeLabel="boolean"
            defaultValue="false"
            description="항목이 가능한 영역을 꽉 채우는 대신, 콘텐츠 너비에 맞춰 고정되도록 만듭니다."
          >
            <ButtonGroup>
              <ButtonGroup.Item isAutoWidth>
                <IconButton aria-label="새 항목 추가" variant="line">
                  <PlusIcon />
                </IconButton>
              </ButtonGroup.Item>
              <ButtonGroup.Item>
                <Button color="primary">다음으로</Button>
              </ButtonGroup.Item>
            </ButtonGroup>
          </GuideProp>
        </GuideSection>
      </GuideLayout>
    </>
  );
}
