import {
  GuidePropsTable,
  GuideSection,
  GuideTypeTooltip,
  type GuidePropsTableRow,
} from "@/components/Guide";
import { CHECKBOX_BASE_PROPS_CODE } from "@/components/Guide/checkboxTypeReferences";

const checkboxPropsRows: GuidePropsTableRow[] = [
  {
    name: "id",
    typeLabel: "string",
    defaultValue: "generated id",
    description:
      "직접 id를 주지 않으면 Field context id 또는 React useId 기반 id를 사용합니다.",
  },
  {
    name: "name",
    typeLabel: "string",
    defaultValue: "undefined",
    description:
      "단일 Checkbox에서는 선택적이며, CheckboxGroup 내부에서는 그룹의 name을 기본 상속합니다.",
  },
  {
    name: "checked",
    typeLabel: "boolean",
    defaultValue: "undefined",
    description: "controlled usage에서 현재 체크 상태를 외부 값으로 제어합니다.",
  },
  {
    name: "defaultChecked",
    typeLabel: "boolean",
    defaultValue: "undefined",
    description:
      "uncontrolled usage에서 초기 체크 상태를 지정할 때 사용합니다.",
  },
  {
    name: "value",
    typeLabel: "string | number | readonly string[]",
    defaultValue: '"on"',
    description:
      "폼 제출이나 그룹 제어에서 체크박스 항목 값을 구분할 때 사용합니다.",
  },
  {
    name: "disabled",
    typeLabel: "boolean",
    defaultValue: "false",
    description:
      "비활성 상태를 적용합니다. CheckboxGroup에 있으면 그룹의 disabled를 기본 상속합니다.",
  },
  {
    name: "readOnly",
    typeLabel: "boolean",
    defaultValue: "false",
    description:
      "포커스와 읽기는 허용하되 스페이스, 엔터, 클릭으로 값이 바뀌지 않게 막습니다.",
  },
  {
    name: "isError",
    typeLabel: "boolean",
    defaultValue: "false",
    description:
      "시각 에러 상태와 aria-invalid를 적용합니다. Field 또는 CheckboxGroup의 에러 상태와 함께 합쳐집니다.",
  },
  {
    name: "onChange",
    typeLabel: "React.ChangeEventHandler<HTMLInputElement>",
    defaultValue: "undefined",
    description:
      "체크 상태 변경 시 호출됩니다. controlled usage에서는 checked와 함께 사용합니다.",
  },
  {
    name: "aria-describedby",
    typeLabel: "string",
    defaultValue: "merged ids",
    description:
      "직접 전달한 값에 Field 설명/에러 메시지 id가 있으면 함께 병합됩니다.",
  },
  {
    name: "className",
    typeLabel: "string",
    defaultValue: "undefined",
    description: "루트 wrapper에 커스텀 클래스를 추가합니다.",
  },
];

export default function CheckboxPropsTableSection() {
  return (
    <GuideSection
      label="Props Table"
      title="Checkbox props 한눈에 보기"
      description="Checkbox에서 자주 사용하는 핵심 props와 context 연동 동작을 표로 정리했습니다."
    >
      <GuidePropsTable
        rows={checkboxPropsRows}
        note={
          <>
            <span>
              <code>CheckboxProps</code>는 <code>InputHTMLAttributes</code>를
              기반으로 하지만 <code>type</code>은 내부에서 항상{" "}
              <code>{'"checkbox"'}</code>로 고정되고, <code>readOnly</code>는
              커스텀 상호작용 제어 방식으로 처리됩니다. <code>Field</code>{" "}
              또는 <code>CheckboxGroup</code> 안에서 사용할 때 일부 상태와
              aria 값이 자동으로 병합됩니다.
            </span>
            <div className="guidePropsTable__noteActions">
              <GuideTypeTooltip
                label="CheckboxBaseProps 보기"
                title="CheckboxBaseProps"
                description="Checkbox가 네이티브 input props 위에 추가한 커스텀 기본 props입니다."
                code={CHECKBOX_BASE_PROPS_CODE}
              />
            </div>
          </>
        }
      />
    </GuideSection>
  );
}
