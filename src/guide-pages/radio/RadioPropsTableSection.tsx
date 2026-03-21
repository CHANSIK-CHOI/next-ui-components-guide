import {
  GuidePropsTable,
  GuideSection,
  GuideTypeTooltip,
  type GuidePropsTableRow,
} from "@/components/Guide";
import { RADIO_BASE_PROPS_CODE } from "@/components/Guide/radioTypeReferences";

const radioPropsRows: GuidePropsTableRow[] = [
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
      "단일 Radio에서는 선택적이며, RadioGroup 내부에서는 그룹의 name을 기본 상속합니다.",
  },
  {
    name: "value",
    typeLabel: "string | number | readonly string[]",
    defaultValue: '"on" (native default)',
    description:
      "각 선택 항목을 구분하는 값입니다. 라디오 그룹에서는 명시적으로 지정하는 것이 일반적입니다.",
  },
  {
    name: "checked",
    typeLabel: "boolean",
    defaultValue: "undefined",
    description:
      "controlled usage에서 현재 선택 여부를 외부 값으로 계산해 전달합니다.",
  },
  {
    name: "defaultChecked",
    typeLabel: "boolean",
    defaultValue: "undefined",
    description:
      "uncontrolled usage에서 초기 선택 상태를 지정할 때 사용합니다.",
  },
  {
    name: "disabled",
    typeLabel: "boolean",
    defaultValue: "false",
    description:
      "비활성 상태를 적용합니다. RadioGroup에 있으면 그룹의 disabled를 기본 상속합니다.",
  },
  {
    name: "readOnly",
    typeLabel: "boolean",
    defaultValue: "false",
    description:
      "포커스와 읽기는 허용하되 스페이스, 엔터, 클릭으로 선택이 바뀌지 않게 막습니다.",
  },
  {
    name: "isError",
    typeLabel: "boolean",
    defaultValue: "false",
    description:
      "시각 에러 상태를 적용합니다. RadioGroup 또는 Field의 에러 상태와 함께 합쳐집니다.",
  },
  {
    name: "onChange",
    typeLabel: "React.ChangeEventHandler<HTMLInputElement>",
    defaultValue: "undefined",
    description:
      "선택 상태 변경 시 호출됩니다. controlled usage에서는 외부 상태 업데이트와 함께 사용합니다.",
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

export default function RadioPropsTableSection() {
  return (
    <GuideSection
      label="Props Table"
      title="Radio props 한눈에 보기"
      description="Radio에서 자주 사용하는 핵심 props와 그룹 상속 동작을 표로 정리했습니다."
    >
      <GuidePropsTable
        rows={radioPropsRows}
        note={
          <>
            <span>
              <code>RadioProps</code>는 <code>InputHTMLAttributes</code>를
              기반으로 하지만 <code>type</code>은 내부에서 항상{" "}
              <code>{'"radio"'}</code>로 고정됩니다. <code>Field</code> 또는{" "}
              <code>RadioGroup</code> 안에서 사용할 때 일부 상태와 aria 값이
              자동으로 병합됩니다.
            </span>
            <div className="guidePropsTable__noteActions">
              <GuideTypeTooltip
                label="RadioBaseProps 보기"
                title="RadioBaseProps"
                description="Radio가 공통으로 쓰는 커스텀 기본 props입니다."
                code={RADIO_BASE_PROPS_CODE}
              />
            </div>
          </>
        }
      />
    </GuideSection>
  );
}
