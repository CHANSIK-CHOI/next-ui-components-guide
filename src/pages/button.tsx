import {
  Button,
  ButtonGroup,
  GuideLayout,
  GuideProp,
  GuideSection,
} from "@/components";
import Head from "next/head";

const plusIcon = <span aria-hidden="true">+</span>;

export default function ButtonGuidePage() {
  return (
    <>
      <Head>
        <title>Button Guide | Next UI Components Guide</title>
        <meta
          name="description"
          content="Button과 ButtonGroup 컴포넌트의 props와 예시를 정리한 가이드 페이지"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <GuideLayout
        currentPath="/button"
        title="Button & ButtonGroup"
        description="Button과 ButtonGroup 컴포넌트의 props와 예시를 정리한 가이드 페이지입니다."
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
          <Button icon={plusIcon}>Add Item</Button>
          <Button icon={plusIcon} color="primary" shape="round">
            Create
          </Button>
          <Button icon={plusIcon} variant="line" color="secondary">
            More
          </Button>
        </GuideProp>

        <GuideSection
          label="Prop Spreading"
          title="props 위임"
          description="Button 컴포넌트에 지정 된 props 외의 속성들은 button 태그로 위임됩니다."
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
            typeLabel={`"button" | "submit" | "reset" | undefined`}
            defaultValue="(e: MouseEvent<HTMLButtonElement, MouseEvent>) => void"
          >
            <Button onClick={(e) => console.log(e)}>Click Me !!</Button>
          </GuideProp>
        </GuideSection>

        <GuideSection
          label="Compound"
          title="ButtonGroup.Item"
          description="ButtonGroup은 각 아이템의 폭과 정렬 패턴을 정리할 때 사용합니다."
        >
          <GuideProp
            className="guideProp--wide"
            name="isAutoWidth"
            typeLabel="boolean"
            defaultValue="false"
            description="항목이 가능한 영역을 꽉 채우는 대신, 콘텐츠 너비에 맞춰 고정되도록 만듭니다."
          >
            <ButtonGroup>
              <ButtonGroup.Item isAutoWidth>
                <Button variant="line">Back</Button>
              </ButtonGroup.Item>
              <ButtonGroup.Item>
                <Button color="primary">Save Changes</Button>
              </ButtonGroup.Item>
            </ButtonGroup>
          </GuideProp>
        </GuideSection>
      </GuideLayout>
    </>
  );
}
