import { Field, Radio, RadioGroup } from "@/components";
import { GuideProp, GuideSection } from "@/components/Guide";
import { useState } from "react";

export default function RadioControlledSection() {
  const [marketingChannel, setMarketingChannel] = useState("basic");
  const [selectedTheme, setSelectedTheme] = useState("system");
  const [disabledSelection] = useState("disabled");
  const [readOnlySelection] = useState("readonly");

  return (
    <GuideSection
      label="Radio"
      title="Radio / controlled usage"
      description="Radio는 checked와 onChange를 외부 상태로 관리하는 controlled usage를 기준으로 정리한 단일 선택 컴포넌트입니다. value로 각 선택 항목을 구분합니다."
    >
      <GuideProp
        isWide
        name="checked | value | name | onChange"
        typeLabel="boolean | string | React.ChangeEventHandler<HTMLInputElement>"
        description="여러 Radio가 같은 name을 공유하고, 현재 선택된 value를 기준으로 checked를 계산합니다. controlled usage에서는 onChange로 다음 선택값을 외부 상태에 반영합니다."
      >
        <RadioGroup name="plan" aria-label="마케팅 알림 수단">
          <Field.Item>
            <Radio
              value="email"
              checked={marketingChannel === "email"}
              onChange={() => setMarketingChannel("email")}
            />
            <Field.Label>이메일 알림</Field.Label>
          </Field.Item>
          <Field.Item>
            <Radio
              value="sms"
              checked={marketingChannel === "sms"}
              onChange={() => setMarketingChannel("sms")}
            />
            <Field.Label>문자 알림</Field.Label>
          </Field.Item>
          <Field.Item>
            <Radio
              value="push"
              checked={marketingChannel === "push"}
              onChange={() => setMarketingChannel("push")}
            />
            <Field.Label>앱 푸시 알림</Field.Label>
          </Field.Item>
        </RadioGroup>
      </GuideProp>

      <GuideProp
        isWide
        name="RadioGroup | direction"
        typeLabel='name | "row" | "column"'
        description="RadioGroup은 단일 선택 항목을 한 그룹으로 묶고, direction으로 row/column 배치를 바꿀 수 있습니다."
      >
        <RadioGroup name="theme" direction="row" aria-label="테마 설정">
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
        name="disabled | readOnly | isError"
        typeLabel="boolean"
        defaultValue="false"
        description="disabled는 상호작용을 막고, readOnly는 현재 선택 상태를 유지한 채 변경만 막습니다. isError는 상태를 강조할 때 사용합니다."
      >
        <RadioGroup name="disabledPreview" aria-label="비활성 라디오 예시">
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
        <RadioGroup name="readOnlyPreview" aria-label="읽기 전용 라디오 예시">
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
        <Field.Item
          align="start"
          errorMessage="에러 상태를 표시한 예시입니다."
        >
            <Radio isError />
            <Field.Label>isError 상태</Field.Label>
        </Field.Item>
      </GuideProp>
    </GuideSection>
  );
}
