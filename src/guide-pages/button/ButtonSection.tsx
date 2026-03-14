import { Button } from "@/components";
import { GuideProp, GuideSection } from "@/components/Guide";
import { PlusIcon } from "@/components/Icon";

export default function ButtonSection() {
  return (
    <>
      <GuideSection
        label="Button"
        title="Button / 디자인 props"
        description="Button은 size, color, variant, shape 같은 디자인 props를 조합해 다양한 액션 버튼을 구성합니다."
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
          description="solid와 line은 size, color, shape와 함께 사용할 수 있고, text는 color만 조합할 수 있습니다. text variant에서는 size와 shape를 받지 않습니다."
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
          description='shape는 solid 또는 line variant에서만 사용합니다. text variant에서는 적용되지 않습니다.'
        >
          <Button>Square Button</Button>
          <Button shape="round" color="primary">
            Round Button
          </Button>
          <Button variant="line" shape="round" color="secondary">
            Round Line
          </Button>
        </GuideProp>

        <GuideProp name="icon" typeLabel="React.ReactNode">
          <Button icon={<PlusIcon />}>Add Item</Button>
          <Button icon={<PlusIcon />} color="primary" shape="round">
            Create
          </Button>
          <Button icon={<PlusIcon />} variant="line" color="secondary">
            More
          </Button>
        </GuideProp>
      </GuideSection>

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
    </>
  );
}
