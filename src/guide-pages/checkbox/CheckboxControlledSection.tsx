import { Checkbox, CheckboxGroup, Field } from "@/components";
import { GuideProp, GuideSection } from "@/components/Guide";
import { useState } from "react";

export default function CheckboxControlledSection() {
  const [consentChecked, setConsentChecked] = useState(true);
  const [disabledChecked] = useState(true);
  const [readOnlyChecked] = useState(true);
  const [marketingChannels, setMarketingChannels] = useState<string[]>([
    "email",
  ]);

  const toggleMarketingChannel = (value: string) => {
    setMarketingChannels((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value],
    );
  };

  return (
    <GuideSection
      label="Checkbox"
      title="Checkbox / controlled usage"
      description="Checkbox는 checked와 onChange를 외부 상태로 관리하는 controlled usage를 기준으로 정리한 단일 체크박스 컴포넌트입니다."
    >
      <GuideProp
        name="checked | onChange"
        typeLabel="boolean | React.ChangeEventHandler<HTMLInputElement>"
        description="controlled usage에서는 checked와 onChange를 함께 사용해 현재 선택 여부를 외부 상태로 제어합니다."
      >
        <Field.Item>
          <Checkbox
            checked={consentChecked}
            onChange={(event) => setConsentChecked(event.target.checked)}
          />
          <Field.Label>서비스 이용약관에 동의합니다.</Field.Label>
        </Field.Item>
      </GuideProp>

      <GuideProp
        name="disabled | readOnly | isError"
        typeLabel="boolean"
        defaultValue="false"
        description="disabled는 상호작용을 막고, readOnly는 현재 체크 상태를 유지한 채 변경만 막습니다. isError는 시각 상태와 aria-invalid를 적용합니다."
      >
        <Field.Item>
          <Checkbox
            checked={disabledChecked}
            disabled
            onChange={() => undefined}
          />
          <Field.Label>disabled 상태</Field.Label>
        </Field.Item>
        <Field.Item>
          <Checkbox
            checked={readOnlyChecked}
            readOnly
            onChange={() => undefined}
          />
          <Field.Label>readOnly 상태</Field.Label>
        </Field.Item>
        <Field.Item
          align="start"
          errorMessage="에러 상태를 표시한 예시입니다."
        >
            <Checkbox isError />
            <Field.Label>isError 상태</Field.Label>
        </Field.Item>
      </GuideProp>

      <GuideProp
        isWide
        name="CheckboxGroup"
        typeLabel="name | direction | disabled | readOnly | isError"
        description="CheckboxGroup은 여러 Checkbox에 공통 name, disabled, readOnly, isError 상태를 내려주는 그룹 레이아웃입니다. direction으로 row/column 배치를 바꿀 수 있습니다."
      >
        <Field
          errorMessage={
            marketingChannels.length === 0
              ? "최소 한 가지 알림 수단을 선택해주세요."
              : ""
          }
        >
          <CheckboxGroup
            name="marketingChannels"
            isError={marketingChannels.length === 0}
            aria-label="마케팅 알림 수단"
          >
            <Field.Item>
              <Checkbox
                checked={marketingChannels.includes("email")}
                value="email"
                onChange={() => toggleMarketingChannel("email")}
              />
              <Field.Label>이메일 알림</Field.Label>
            </Field.Item>
            <Field.Item>
              <Checkbox
                checked={marketingChannels.includes("sms")}
                value="sms"
                onChange={() => toggleMarketingChannel("sms")}
              />
              <Field.Label>문자 알림</Field.Label>
            </Field.Item>
            <Field.Item>
              <Checkbox
                checked={marketingChannels.includes("push")}
                value="push"
                onChange={() => toggleMarketingChannel("push")}
              />
              <Field.Label>앱 푸시 알림</Field.Label>
            </Field.Item>
          </CheckboxGroup>
        </Field>
      </GuideProp>
    </GuideSection>
  );
}
