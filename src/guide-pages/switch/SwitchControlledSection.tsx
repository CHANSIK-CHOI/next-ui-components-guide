import { Field, Switch } from "@/components";
import { GuideProp, GuideSection } from "@/components/Guide";
import { useState } from "react";

export default function SwitchControlledSection() {
  const [pushEnabled, setPushEnabled] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [disabledAutoSave] = useState(true);
  const [readOnlyLocationAccess] = useState(true);

  return (
    <GuideSection
      label="Switch"
      title="Switch / controlled usage"
      description="Switch는 checked와 onChange를 외부 상태로 관리하는 controlled usage를 기준으로 사용하는 boolean 토글 컴포넌트입니다."
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
        isWide
        name="Field / Field.Label / Field.Description / Field.Message"
        typeLabel="layout"
        description="Field는 Switch와 레이블, 보조 설명, 메시지를 한 덩어리로 정렬하는 레이아웃 컴포넌트입니다."
      >
        <Field>
          <Field.Item>
            <Switch
              checked={soundEnabled}
              onChange={(event) => setSoundEnabled(event.target.checked)}
            />
            <Field.Label>앱 사운드 켜기</Field.Label>
          </Field.Item>
          <Field.Description>
            설정형 토글은 보통 Field와 함께 사용하면 설명과 메시지를 같은
            맥락에서 묶을 수 있습니다.
          </Field.Description>
          <Field.Message infoMessage="스위치를 끄면 앱 내 효과음과 알림음이 함께 비활성화됩니다." />
        </Field>
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
        <Field>
          <Field.Item>
            <Switch isError />
            <Field.Label>isError 상태</Field.Label>
          </Field.Item>
          <Field.Message errorMessage="필수 설정 항목을 확인해주세요." />
        </Field>
      </GuideProp>
    </GuideSection>
  );
}
