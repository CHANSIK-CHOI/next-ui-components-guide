import { Button, Tooltip } from "@/components";
import { GuideProp, GuideSection } from "@/components/Guide";
import { useState } from "react";

export default function TooltipSection() {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  return (
    <GuideSection
      label="Tooltip"
      title="Tooltip / usage"
      description="Tooltip은 hover와 focus를 기준으로 보조 설명을 보여주는 non-modal helper UI입니다. 기본 사용은 간단하게 유지하고, 필요할 때만 open과 onOpenChange로 외부 제어를 연결합니다."
    >
      <GuideProp
        name="content | children"
        typeLabel="ReactNode"
        description="Tooltip은 trigger 역할의 children과 표시할 content를 함께 받습니다. 기본 동작은 hover와 focus로 열리고, 마우스가 벗어나거나 blur 되면 닫힙니다."
      >
        <Tooltip content="저장 후에는 현재 문서가 즉시 공개 상태로 반영됩니다.">
          <Button size="small" variant="line">
            발행 안내
          </Button>
        </Tooltip>
      </GuideProp>

      <GuideProp
        name="placement"
        typeLabel='\"topCenter\" | \"topLeft\" | \"topRight\" | \"bottomCenter\" | \"bottomLeft\" | \"bottomRight\"'
        defaultValue="topCenter"
        description="배치는 trigger 기준으로 위/아래와 정렬 위치를 조합해서 지정합니다. 아래 예시는 스타일 확인을 위해 open 상태로 고정해 둔 예시입니다."
      >
        <Tooltip content="topCenter" placement="topCenter" open>
          <Button size="small" variant="line">
            topCenter
          </Button>
        </Tooltip>
        <Tooltip content="topLeft" placement="topLeft" open>
          <Button size="small" variant="line">
            topLeft
          </Button>
        </Tooltip>
        <Tooltip content="topRight" placement="topRight" open>
          <Button size="small" variant="line">
            topRight
          </Button>
        </Tooltip>
        <Tooltip content="bottomCenter" placement="bottomCenter" open>
          <Button size="small" variant="line">
            bottomCenter
          </Button>
        </Tooltip>
        <Tooltip content="bottomLeft" placement="bottomLeft" open>
          <Button size="small" variant="line">
            bottomLeft
          </Button>
        </Tooltip>
        <Tooltip content="bottomRight" placement="bottomRight" open>
          <Button size="small" variant="line">
            bottomRight
          </Button>
        </Tooltip>
      </GuideProp>

      <GuideProp
        isWide
        name="open | defaultOpen | onOpenChange | disabled"
        typeLabel="boolean | (nextOpen: boolean) => void"
        description="기본적으로는 내부 상태로 열리고 닫히지만, open과 onOpenChange를 주면 외부 상태로도 제어할 수 있습니다. disabled가 true면 툴팁은 열리지 않습니다."
      >
        <div className="guideFormStack">
          <Tooltip
            content="외부 상태로 제어되는 Tooltip입니다."
            open={isTooltipOpen}
            onOpenChange={setIsTooltipOpen}
          >
            <Button size="small" variant="line">
              controlled tooltip
            </Button>
          </Tooltip>
          <Button
            size="small"
            color="primary"
            variant="line"
            onClick={() => setIsTooltipOpen((prevState) => !prevState)}
          >
            {isTooltipOpen ? "툴팁 닫기" : "툴팁 열기"}
          </Button>
          <Tooltip content="disabled 상태에서는 tooltip이 열리지 않습니다." disabled>
            <Button size="small" variant="line">
              disabled tooltip
            </Button>
          </Tooltip>
        </div>
      </GuideProp>
    </GuideSection>
  );
}
