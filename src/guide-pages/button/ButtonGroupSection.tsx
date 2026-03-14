import { Button, ButtonGroup, IconButton } from "@/components";
import { GuideProp, GuideSection } from "@/components/Guide";
import { PlusIcon } from "@/components/Icon";

export default function ButtonGroupSection() {
  return (
    <GuideSection
      label="ButtonGroup"
      title="ButtonGroup / ButtonGroup.Item"
      description="ButtonGroup은 버튼을 가로로 배치하고, ButtonGroup.Item 단위로 각 항목의 폭 패턴을 조정할 때 사용합니다."
    >
      <GuideProp
        name="children"
        typeLabel="React.ReactNode"
        description="버튼은 ButtonGroup.Item으로 감싸서 배치합니다. 기본 레이아웃에서는 각 item이 가능한 영역을 균등하게 나눠 가집니다."
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
        name="ButtonGroup.Item / isAutoWidth"
        typeLabel="boolean"
        defaultValue="false"
        description="ButtonGroup.Item의 isAutoWidth가 true이면 해당 item은 가능한 영역을 꽉 채우지 않고, 콘텐츠 너비에 맞춰 고정됩니다."
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
