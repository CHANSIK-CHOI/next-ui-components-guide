import { Field, Radio, RadioGroup } from "@/components";
import { GuideProp, GuideSection } from "@/components/Guide";
import { useState } from "react";

export default function RadioControlledSection() {
  const [selectedPlan, setSelectedPlan] = useState("basic");
  const [selectedTheme, setSelectedTheme] = useState("system");

  return (
    <GuideSection
      label="Radio"
      title="Radio / 상태 제어 사용"
      description="Radio는 checked와 value를 외부 상태로 연결해 단일 선택을 제어하는 컴포넌트입니다."
    >
      <GuideProp
        isWide
        name="checked | value | name"
        typeLabel="boolean | string"
        description="여러 Radio가 같은 name을 공유하고, 현재 선택된 value를 기준으로 checked를 계산합니다."
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
        description="Field는 각 Radio의 레이블 정렬을 담당하고, RadioGroup은 단일 선택 항목을 한 그룹으로 묶습니다."
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
      >
        <Field.Item>
          <Radio defaultChecked disabled />
          <Field.Label>disabled 상태</Field.Label>
        </Field.Item>
        <Field.Item>
          <Radio defaultChecked readOnly />
          <Field.Label>readOnly 상태</Field.Label>
        </Field.Item>
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
