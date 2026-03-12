import { Button, ButtonGroup, IconButton } from "@/components";
import { GuideProp, GuideSection } from "@/components/Guide";
import { PlusIcon } from "@/components/Icon";

export default function ButtonGroupSection() {
  return (
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
  );
}
