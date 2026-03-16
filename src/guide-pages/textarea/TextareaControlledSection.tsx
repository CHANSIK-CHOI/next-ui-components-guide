import { Textarea } from "@/components";
import { GuideProp, GuideSection } from "@/components/Guide";
import { memo, useState } from "react";

const ValueGuideProp = memo(function ValueGuideProp() {
  const [defaultText, setDefaultText] = useState(
    "회의 기록과 다음 액션 아이템을 정리해주세요.",
  );
  const [emptyStartText, setEmptyStartText] = useState("");

  return (
    <GuideProp
      isWide
      name="value"
      typeLabel="string | number | readonly string[] | undefined"
      description="현재 입력값을 외부 상태로 관리합니다. clear 버튼과 메시지 상태도 이 값을 기준으로 동작합니다."
    >
      <Textarea
        value={defaultText}
        placeholder="내용을 입력해주세요"
        onChange={(event) => setDefaultText(event.target.value)}
        onClear={() => setDefaultText("")}
      />
      <Textarea
        value={emptyStartText}
        placeholder="빈 값에서 시작하는 controlled Textarea"
        onChange={(event) => setEmptyStartText(event.target.value)}
        onClear={() => setEmptyStartText("")}
      />
    </GuideProp>
  );
});

const ClearableGuideProp = memo(function ClearableGuideProp() {
  const [clearableText, setClearableText] = useState(
    "한 번에 지울 수 있는 멀티라인 입력 예시입니다.",
  );
  const [clearableEmptyText, setClearableEmptyText] = useState("");

  return (
    <GuideProp
      name="isClearable | onClear"
      typeLabel="boolean | () => void"
      defaultValue="false"
      description="clear 버튼은 isClearable이 true이고, value가 있으며, onClear가 제공되고, disabled/readOnly가 아닐 때만 노출됩니다."
    >
      <Textarea
        value={clearableText}
        isClearable
        onChange={(event) => setClearableText(event.target.value)}
        onClear={() => setClearableText("")}
      />
      <Textarea
        value={clearableEmptyText}
        isClearable
        placeholder="값을 입력하면 clear 버튼이 나타납니다."
        onChange={(event) => setClearableEmptyText(event.target.value)}
        onClear={() => setClearableEmptyText("")}
      />
    </GuideProp>
  );
});

const ResizeGuideProp = memo(function ResizeGuideProp() {
  const [verticalText, setVerticalText] = useState(
    "vertical은 위아래 방향으로만 크기 조절이 가능합니다.",
  );
  const [fixedText, setFixedText] = useState(
    "none으로 두면 사용자가 크기를 변경할 수 없습니다.",
  );

  return (
    <GuideProp
      isWide
      name="rows | resize"
      typeLabel='number | "none" | "vertical"'
      description="rows는 기본 높이를 조정하고, resize는 세로 리사이즈 허용 여부만 제어합니다. 좌우 리사이즈는 UI 깨짐 방지를 위해 지원하지 않습니다."
    >
      <Textarea
        value={verticalText}
        rows={5}
        resize="vertical"
        onChange={(event) => setVerticalText(event.target.value)}
        onClear={() => setVerticalText("")}
      />
      <Textarea
        value={fixedText}
        rows={6}
        resize="none"
        onChange={(event) => setFixedText(event.target.value)}
        onClear={() => setFixedText("")}
      />
    </GuideProp>
  );
});

const NativeTextareaGuideProp = memo(function NativeTextareaGuideProp() {
  const [summaryText, setSummaryText] = useState("");
  const [memoText, setMemoText] = useState("");

  return (
    <GuideProp
      isWide
      name="native textarea props"
      typeLabel="name | maxLength | spellCheck | autoComplete | wrap ..."
      description={
        <>
          - Textarea에서 정의하지 않은 native textarea props는 내부 textarea에
          그대로 전달됩니다.
          <br /> - defaultValue는 지원하지 않고 value 기반 controlled usage를
          전제로 하며,
          <br /> - aria-invalid는 errorMessage 기준으로 내부에서 설정합니다.
        </>
      }
    >
      <Textarea
        value={summaryText}
        name="summary"
        maxLength={120}
        rows={4}
        spellCheck={false}
        autoComplete="off"
        placeholder="최대 120자 요약"
        infoMessage={`${summaryText.length}/120`}
        onChange={(event) => setSummaryText(event.target.value)}
        onClear={() => setSummaryText("")}
      />
      <Textarea
        value={memoText}
        name="memo"
        wrap="soft"
        rows={5}
        placeholder="추가 메모를 입력해주세요"
        onChange={(event) => setMemoText(event.target.value)}
        onClear={() => setMemoText("")}
      />
    </GuideProp>
  );
});

const MessageGuideProp = memo(function MessageGuideProp() {
  const [infoText, setInfoText] = useState("안내 메시지 예시");
  const [errorText, setErrorText] = useState("error state");

  return (
    <GuideProp
      name="infoMessage | errorMessage"
      typeLabel="string"
      defaultValue='""'
      description="입력 필드 아래에 안내 메시지나 에러 메시지를 노출합니다."
      isWide
    >
      <Textarea
        value={infoText}
        infoMessage="여러 줄 입력 아래에도 보조 설명을 함께 노출할 수 있습니다."
        onChange={(event) => setInfoText(event.target.value)}
        onClear={() => setInfoText("")}
      />
      <Textarea
        value={errorText}
        errorMessage="에러 메시지를 표시하면 error 스타일이 적용됩니다."
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
      <Textarea value={disabledText} disabled />
      <Textarea value={readOnlyText} readOnly isClearable />
    </GuideProp>
  );
});

export default function TextareaControlledSection() {
  return (
    <GuideSection
      label="Textarea"
      title="Textarea / controlled usage"
      description="Textarea는 value와 onChange를 외부 상태로 관리하는 controlled usage를 기준으로 사용하는 멀티라인 입력 컴포넌트입니다."
    >
      <ValueGuideProp />
      <ClearableGuideProp />
      <ResizeGuideProp />
      <MessageGuideProp />
      <NativeTextareaGuideProp />
      <StateGuideProp />
    </GuideSection>
  );
}
