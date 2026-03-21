import { Field, Switch } from "@/components";
import { GuideProp, GuideSection } from "@/components/Guide";
import { useState } from "react";

export default function SwitchControlledSection() {
  const [pushEnabled, setPushEnabled] = useState(true);
  const [disabledAutoSave] = useState(true);
  const [readOnlyLocationAccess] = useState(true);

  return (
    <GuideSection
      label="Switch"
      title="Switch / controlled usage"
      description="Switch는 checked와 onChange를 외부 상태로 관리하는 controlled usage를 기준으로 정리한 boolean 토글 컴포넌트입니다."
    >
      <GuideProp
        name="checked | onChange"
        typeLabel="boolean | React.ChangeEventHandler<HTMLInputElement>"
        description="controlled usage에서는 checked와 onChange를 함께 사용해 현재 토글 상태를 외부 상태로 제어합니다."
      >
        <Field.Item>
          <Switch
            checked={pushEnabled}
            onChange={(event) => setPushEnabled(event.target.checked)}
          />
          <Field.Label>푸시 알림 받기</Field.Label>
        </Field.Item>
      </GuideProp>

      <GuideProp
        name="disabled | readOnly | isError"
        typeLabel="boolean"
        defaultValue="false"
        description="disabled는 상호작용을 막고, readOnly는 현재 토글 상태를 유지한 채 변경만 막습니다. isError는 시각 상태와 aria-invalid를 적용합니다."
      >
        <Field.Item>
          <Switch
            checked={disabledAutoSave}
            disabled
            onChange={() => undefined}
          />
          <Field.Label>disabled 상태</Field.Label>
        </Field.Item>
        <Field.Item>
          <Switch
            checked={readOnlyLocationAccess}
            readOnly
            onChange={() => undefined}
          />
          <Field.Label>readOnly 상태</Field.Label>
        </Field.Item>
        <Field.Item errorMessage="에러 상태를 표시한 예시입니다.">
          <Switch isError />
          <Field.Label>isError 상태</Field.Label>
        </Field.Item>
      </GuideProp>
    </GuideSection>
  );
}
