import { IconButton } from "@/components";
import { GuideProp, GuideSection } from "@/components/Guide";
import { HomeIcon, PlusIcon } from "@/components/Icon";

export default function IconButtonSection() {
  return (
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
  );
}
