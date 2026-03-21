import {
  GuidePropsTable,
  GuideSection,
  GuideTypeTooltip,
  type GuidePropsTableRow,
} from "@/components/Guide";
import {
  TEXTAREA_BASE_PROPS_CODE,
  TEXTAREA_RESIZE_CODE,
} from "@/components/Guide/textareaTypeReferences";

const textareaPropsRows: GuidePropsTableRow[] = [
  {
    name: "value",
    typeLabel: 'string | number | readonly string[] | undefined',
    defaultValue: "undefined",
    description:
      "현재 입력값을 외부 상태로 관리합니다. Textarea는 value 기반 controlled usage를 전제로 합니다.",
  },
  {
    name: "placeholder",
    typeLabel: "string",
    defaultValue: '"내용을 입력해주세요"',
    description: "입력값이 비어 있을 때 표시할 안내 문구입니다.",
  },
  {
    name: "rows",
    typeLabel: "number",
    defaultValue: "4",
    description: "기본 textarea 높이를 조절합니다.",
  },
  {
    name: "resize",
    typeLabel: "TextareaResize",
    defaultValue: '"vertical"',
    description:
      "사용자 리사이즈 허용 범위를 제어합니다. UI 깨짐 방지를 위해 horizontal은 지원하지 않습니다.",
  },
  {
    name: "isClearable",
    typeLabel: "boolean",
    defaultValue: "false",
    description:
      "값이 있고 onClear가 있으며 disabled/readOnly가 아닐 때 clear 버튼을 노출합니다.",
  },
  {
    name: "onClear",
    typeLabel: "() => void",
    defaultValue: "undefined",
    description: "clear 버튼 클릭 시 호출되는 콜백입니다.",
  },
  {
    name: "infoMessage",
    typeLabel: "string",
    defaultValue: '""',
    description: "입력 필드 아래에 보조 안내 메시지를 노출합니다.",
  },
  {
    name: "errorMessage",
    typeLabel: "string",
    defaultValue: '""',
    description:
      "에러 메시지를 노출하고 error 스타일 및 aria-invalid를 적용합니다.",
  },
  {
    name: "disabled",
    typeLabel: "boolean",
    defaultValue: "false",
    description: "입력과 clear 상호작용을 비활성화합니다.",
  },
  {
    name: "readOnly",
    typeLabel: "boolean",
    defaultValue: "false",
    description: "입력값 수정은 막되 포커스와 선택은 허용합니다.",
  },
  {
    name: "id / className",
    typeLabel: "string",
    defaultValue: "undefined",
    description: "textarea id와 루트 wrapper 커스텀 클래스를 지정합니다.",
  },
  {
    name: "name / maxLength / spellCheck / wrap / autoComplete ...",
    typeLabel: "native textarea props",
    defaultValue: "inherited",
    description:
      "Textarea에서 별도로 제어하지 않는 native textarea props는 내부 textarea에 그대로 전달됩니다.",
  },
];

export default function TextareaPropsTableSection() {
  return (
    <GuideSection
      label="Props Table"
      title="Textarea props 한눈에 보기"
      description="Textarea에서 자주 사용하는 핵심 UI props와 native textarea 위임 규칙을 표로 정리했습니다."
    >
      <GuidePropsTable
        rows={textareaPropsRows}
        note={
          <>
            <span>
              <code>TextareaProps</code>는 <code>defaultValue</code>,{" "}
              <code>id</code>, <code>placeholder</code>, <code>readOnly</code>,{" "}
              <code>value</code> 같은 일부 native textarea props를 자체 규칙으로
              다시 정의합니다. <code>aria-invalid</code>는{" "}
              <code>errorMessage</code> 기준으로 내부에서 처리됩니다.
            </span>
            <div className="guidePropsTable__noteActions">
              <GuideTypeTooltip
                label="TextareaBaseProps 보기"
                title="TextareaBaseProps"
                description="Textarea가 native textarea props 위에 추가한 커스텀 UI props입니다."
                code={TEXTAREA_BASE_PROPS_CODE}
              />
              <GuideTypeTooltip
                label="TextareaResize 보기"
                title="TextareaResize"
                description="Textarea에서 허용하는 resize 모드입니다."
                code={TEXTAREA_RESIZE_CODE}
              />
            </div>
          </>
        }
      />
    </GuideSection>
  );
}
