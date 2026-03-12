import { Textfield } from "@/components";
import { GuideProp, GuideSection } from "@/components/Guide";
import { memo, useState } from "react";

const ValueGuideProp = memo(function ValueGuideProp() {
  const [defaultText, setDefaultText] = useState("기본 입력값");
  const [emptyStartText, setEmptyStartText] = useState("");

  return (
    <GuideProp
      isWide
      name="value"
      typeLabel="string | number | readonly string[] | undefined"
      description="현재 입력값을 외부 상태로 관리합니다. clear 버튼이나 value 기반 UI는 이 값을 기준으로 동작합니다."
    >
      <Textfield
        value={defaultText}
        placeholder="내용을 입력해주세요"
        onChange={(event) => setDefaultText(event.target.value)}
        onClear={() => setDefaultText("")}
      />
      <Textfield
        value={emptyStartText}
        placeholder="빈 값에서 시작하는 controlled Textfield"
        onChange={(event) => setEmptyStartText(event.target.value)}
        onClear={() => setEmptyStartText("")}
      />
    </GuideProp>
  );
});

const ClearableGuideProp = memo(function ClearableGuideProp() {
  const [clearableText, setClearableText] = useState("지울 수 있는 입력값");
  const [clearableEmptyText, setClearableEmptyText] = useState("");

  return (
    <GuideProp
      name="isClearable"
      typeLabel="boolean"
      defaultValue="false"
      description="value가 존재할 때 clear 버튼을 노출합니다."
    >
      <Textfield
        value={clearableText}
        isClearable
        onChange={(event) => setClearableText(event.target.value)}
        onClear={() => setClearableText("")}
      />
      <Textfield
        value={clearableEmptyText}
        isClearable
        placeholder="값을 입력하면 clear 버튼이 나타납니다."
        onChange={(event) => setClearableEmptyText(event.target.value)}
        onClear={() => setClearableEmptyText("")}
      />
    </GuideProp>
  );
});

const NativeInputGuideProp = memo(function NativeInputGuideProp() {
  const [emailText, setEmailText] = useState("");
  const [passwordText, setPasswordText] = useState("");

  return (
    <GuideProp
      isWide
      name="native input props"
      typeLabel="name | type | maxLength | inputMode | autoComplete ..."
      description={
        <>
          - Textfield에서 정의하지 않은 text-like input props는 내부 input에
          그대로 전달됩니다.
          <br /> - type은 text, password, email, tel, url, number만 허용합니다.
          <br /> - defaultValue는 지원하지 않고 value 기반 controlled usage를
          전제로 하며,
          <br /> - aria-invalid는 errorMsg 기준으로 내부에서 설정합니다.
        </>
      }
    >
      <Textfield
        value={emailText}
        name="sampleEmail"
        type="email"
        inputMode="email"
        autoComplete="email"
        maxLength={40}
        placeholder="sample@email.com"
        isClearable
        onChange={(event) => setEmailText(event.target.value)}
        onClear={() => setEmailText("")}
      />
      <Textfield
        value={passwordText}
        name="samplePassword"
        type="password"
        autoComplete="current-password"
        maxLength={20}
        placeholder="비밀번호를 입력해주세요"
        onChange={(event) => setPasswordText(event.target.value)}
        onClear={() => setPasswordText("")}
      />
    </GuideProp>
  );
});

const UnitGuideProp = memo(function UnitGuideProp() {
  const [priceText, setPriceText] = useState("12000");
  const [countText, setCountText] = useState("3");

  return (
    <GuideProp
      name="unit"
      typeLabel="string"
      defaultValue='""'
      description="입력값 오른쪽에 단위를 고정 표시합니다."
    >
      <Textfield
        value={priceText}
        unit="원"
        isClearable
        onChange={(event) => setPriceText(event.target.value)}
        onClear={() => setPriceText("")}
      />
      <Textfield
        value={countText}
        unit="개"
        onChange={(event) => setCountText(event.target.value)}
        onClear={() => setCountText("")}
      />
    </GuideProp>
  );
});

const MessageGuideProp = memo(function MessageGuideProp() {
  const [infoText, setInfoText] = useState("안내 메시지 예시");
  const [errorText, setErrorText] = useState("error state");

  return (
    <GuideProp
      name="infoMsg | errorMsg"
      typeLabel="string"
      defaultValue='""'
      description="입력 필드 아래에 안내 메시지나 에러 메시지를 노출합니다."
    >
      <Textfield
        value={infoText}
        infoMsg="보조 설명을 함께 노출할 수 있습니다."
        onChange={(event) => setInfoText(event.target.value)}
        onClear={() => setInfoText("")}
      />
      <Textfield
        value={errorText}
        errorMsg="에러 메시지를 표시하면 error 스타일이 적용됩니다."
        onChange={(event) => setErrorText(event.target.value)}
        onClear={() => setErrorText("")}
      />
    </GuideProp>
  );
});

const StateGuideProp = memo(function StateGuideProp() {
  const [disabledText] = useState("비활성화된 입력값");
  const [readOnlyText] = useState("읽기 전용 입력값");

  return (
    <GuideProp
      name="disabled | readOnly"
      typeLabel="boolean"
      defaultValue="false"
    >
      <Textfield value={disabledText} disabled />
      <Textfield value={readOnlyText} readOnly unit="원" isClearable />
    </GuideProp>
  );
});

export default function TextfieldControlledSection() {
  return (
    <GuideSection
      label="Textfield"
      title="Textfield / controlled usage"
      description="Textfield는 value와 onChange를 외부 상태로 관리하는 controlled usage를 기준으로 설계되어 있습니다."
    >
      <ValueGuideProp />
      <ClearableGuideProp />
      <UnitGuideProp />
      <MessageGuideProp />
      <NativeInputGuideProp />
      <StateGuideProp />
    </GuideSection>
  );
}
