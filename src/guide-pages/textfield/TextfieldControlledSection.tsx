import { Textfield } from "@/components";
import { GuideProp, GuideSection } from "@/components/Guide";
import { useState } from "react";

export default function TextfieldControlledSection() {
  const [defaultText, setDefaultText] = useState("기본 입력값");
  const [emptyStartText, setEmptyStartText] = useState("");
  const [clearableText, setClearableText] = useState("지울 수 있는 입력값");
  const [clearableEmptyText, setClearableEmptyText] = useState("");
  const [priceText, setPriceText] = useState("12000");
  const [countText, setCountText] = useState("3");
  const [infoText, setInfoText] = useState("안내 메시지 예시");
  const [errorText, setErrorText] = useState("error state");
  const [disabledText] = useState("비활성화된 입력값");
  const [readOnlyText] = useState("읽기 전용 입력값");

  return (
    <GuideSection
      label="Textfield"
      title="Textfield / controlled usage"
      description="Textfield는 value와 onChange를 외부 상태로 관리하는 controlled usage를 기준으로 설계되어 있습니다."
    >
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

      <GuideProp
        name="disabled | readOnly"
        typeLabel="boolean"
        defaultValue="false"
        description="비활성화 상태와 읽기 전용 상태는 서로 다른 상호작용과 스타일을 가집니다."
      >
        <Textfield value={disabledText} disabled />
        <Textfield value={readOnlyText} readOnly unit="원" isClearable />
      </GuideProp>
    </GuideSection>
  );
}
