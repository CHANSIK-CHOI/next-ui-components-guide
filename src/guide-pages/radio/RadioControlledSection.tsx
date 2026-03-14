import { Field, Radio, RadioGroup } from "@/components";
import { GuideProp, GuideSection } from "@/components/Guide";
import { useState } from "react";

export default function RadioControlledSection() {
  const [selectedPlan, setSelectedPlan] = useState("basic");
  const [selectedTheme, setSelectedTheme] = useState("system");
  const [disabledSelection] = useState("disabled");
  const [readOnlySelection] = useState("readonly");

  return (
    <GuideSection
      label="Radio"
      title="Radio / controlled usage"
      description="Radio는 checked와 value를 외부 상태로 연결해 단일 선택을 제어하는 컴포넌트입니다."
    >
      <GuideProp
        isWide
        name="checked | value | name | onChange"
        typeLabel="boolean | string | React.ChangeEventHandler<HTMLInputElement>"
        description="여러 Radio가 같은 name을 공유하고, 현재 선택된 value를 기준으로 checked를 계산합니다. controlled usage에서는 onChange로 다음 선택값을 외부 상태에 반영합니다."
      >
        <RadioGroup name="plan">
          <Field.Item>
            <Radio
              value="basic"
              checked={selectedPlan === "basic"}
              onChange={() => setSelectedPlan("basic")}
            />
            <Field.Label>기본 플랜</Field.Label>
          </Field.Item>
          <Field.Item>
            <Radio
              value="pro"
              checked={selectedPlan === "pro"}
              onChange={() => setSelectedPlan("pro")}
            />
            <Field.Label>프로 플랜</Field.Label>
          </Field.Item>
          <Field.Item>
            <Radio
              value="enterprise"
              checked={selectedPlan === "enterprise"}
              onChange={() => setSelectedPlan("enterprise")}
            />
            <Field.Label>엔터프라이즈 플랜</Field.Label>
          </Field.Item>
        </RadioGroup>
      </GuideProp>

      <GuideProp
        isWide
        name="Field / RadioGroup"
        typeLabel="layout"
        description="Field는 각 Radio의 레이블 정렬을 담당하고, RadioGroup은 단일 선택 항목을 한 그룹으로 묶습니다. direction으로 row/column 배치를 바꿀 수 있습니다."
      >
        <RadioGroup name="theme" direction="row">
          <Field.Item>
            <Radio
              value="system"
              checked={selectedTheme === "system"}
              onChange={() => setSelectedTheme("system")}
            />
            <Field.Label>시스템 설정</Field.Label>
          </Field.Item>
          <Field.Item>
            <Radio
              value="light"
              checked={selectedTheme === "light"}
              onChange={() => setSelectedTheme("light")}
            />
            <Field.Label>라이트 모드</Field.Label>
          </Field.Item>
          <Field.Item>
            <Radio
              value="dark"
              checked={selectedTheme === "dark"}
              onChange={() => setSelectedTheme("dark")}
            />
            <Field.Label>다크 모드</Field.Label>
          </Field.Item>
        </RadioGroup>
      </GuideProp>

      <GuideProp
        name="disabled | readOnly | error"
        typeLabel="boolean"
        defaultValue="false"
        description="disabled는 상호작용을 막고, readOnly는 현재 선택 상태를 유지한 채 변경만 막습니다. error는 시각 상태를 강조할 때 사용합니다."
      >
        <RadioGroup name="disabledPreview">
          <Field.Item>
            <Radio
              value="disabled"
              checked={disabledSelection === "disabled"}
              disabled
              onChange={() => undefined}
            />
            <Field.Label>disabled 상태</Field.Label>
          </Field.Item>
        </RadioGroup>
        <RadioGroup name="readOnlyPreview">
          <Field.Item>
            <Radio
              value="readonly"
              checked={readOnlySelection === "readonly"}
              readOnly
              onChange={() => undefined}
            />
            <Field.Label>readOnly 상태</Field.Label>
          </Field.Item>
        </RadioGroup>
        <Field>
          <Field.Item align="start">
            <Radio error />
            <Field.Label>error 상태</Field.Label>
          </Field.Item>
          <Field.Message errorMsg="하나의 옵션을 선택해주세요." />
        </Field>
      </GuideProp>
    </GuideSection>
  );
}
