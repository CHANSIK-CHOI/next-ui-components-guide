import {
  GuidePropsTable,
  GuideSection,
  GuideTypeTooltip,
  type GuidePropsTableRow,
} from "@/components/Guide";
import {
  TEXTFIELD_BASE_PROPS_CODE,
  TEXTFIELD_INPUT_TYPE_CODE,
} from "@/components/Guide/textfieldTypeReferences";

const textfieldPropsRows: GuidePropsTableRow[] = [
  {
    name: "value",
    typeLabel: 'string | number | readonly string[] | undefined',
    defaultValue: "undefined",
    description:
      "현재 입력값을 외부 상태로 관리합니다. Textfield는 value 기반 controlled usage를 전제로 합니다.",
  },
  {
    name: "placeholder",
    typeLabel: "string",
    defaultValue: '"내용을 입력해주세요"',
    description: "입력값이 비어 있을 때 표시할 안내 문구입니다.",
  },
  {
    name: "type",
    typeLabel: "TextfieldInputType",
    defaultValue: '"text" (native default)',
    description: "text-like input 타입만 허용합니다.",
  },
  {
    name: "children",
    typeLabel: "React.ReactNode",
    defaultValue: "undefined",
    description:
      "입력 오른쪽 action 영역에 커스텀 버튼이나 아이콘을 추가합니다.",
  },
  {
    name: "isTextInputBlocked",
    typeLabel: "boolean",
    defaultValue: "false",
    description:
      "직접 타이핑만 막고, 오른쪽 action 버튼 중심으로 상호작용하게 만들 때 사용합니다.",
  },
  {
    name: "unit",
    typeLabel: "string",
    defaultValue: '""',
    description: "입력값 오른쪽에 단위를 고정 표시합니다.",
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
    description: "입력과 clear/action 상호작용을 비활성화합니다.",
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
    description: "입력 id와 루트 wrapper 커스텀 클래스를 지정합니다.",
  },
  {
    name: "name / inputMode / maxLength / autoComplete ...",
    typeLabel: "native text-like input props",
    defaultValue: "inherited",
    description:
      "Textfield에서 별도로 제어하지 않는 native input props는 내부 input에 그대로 전달됩니다.",
  },
];

export default function TextfieldPropsTableSection() {
  return (
    <GuideSection
      label="Props Table"
      title="Textfield props 한눈에 보기"
      description="Textfield에서 자주 사용하는 핵심 UI props와 native input 위임 규칙을 표로 정리했습니다."
    >
      <GuidePropsTable
        rows={textfieldPropsRows}
        note={
          <>
            <span>
              <code>TextfieldProps</code>는 <code>defaultValue</code>,{" "}
              <code>id</code>, <code>placeholder</code>, <code>readOnly</code>,{" "}
              <code>type</code>, <code>value</code> 같은 일부 native input
              props를 자체 규칙으로 다시 정의합니다. <code>aria-invalid</code>는
              <code>errorMessage</code> 기준으로 내부에서 처리됩니다.
            </span>
            <div className="guidePropsTable__noteActions">
              <GuideTypeTooltip
                label="TextfieldBaseProps 보기"
                title="TextfieldBaseProps"
                description="Textfield가 native input props 위에 추가한 커스텀 UI props입니다."
                code={TEXTFIELD_BASE_PROPS_CODE}
              />
              <GuideTypeTooltip
                label="TextfieldInputType 보기"
                title="TextfieldInputType"
                description="Textfield에서 허용하는 입력 type 목록입니다."
                code={TEXTFIELD_INPUT_TYPE_CODE}
              />
            </div>
          </>
        }
      />
    </GuideSection>
  );
}
