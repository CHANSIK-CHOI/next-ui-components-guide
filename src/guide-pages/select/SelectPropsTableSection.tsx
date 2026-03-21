import {
  GuidePropsTable,
  GuideSection,
  GuideTypeTooltip,
  type GuidePropsTableRow,
} from "@/components/Guide";
import {
  SELECT_OPTION_CODE,
  SELECT_PROPS_CODE,
  SELECT_SHARED_PROPS_CODE,
} from "@/components/Guide/selectTypeReferences";

const selectPropsRows: GuidePropsTableRow[] = [
  {
    name: "options",
    typeLabel: "OptionsOrGroups<SelectOption, GroupBase<SelectOption>>",
    required: true,
    description:
      "일반 옵션 목록과 grouped options를 모두 그대로 전달할 수 있습니다.",
  },
  {
    name: "value",
    typeLabel: "string | number | null",
    defaultValue: "null",
    description:
      "외부에서는 option 객체 대신 선택된 primitive value 하나만 주고받습니다.",
  },
  {
    name: "onChange",
    typeLabel:
      "(nextValue, selectedOption, actionMeta) => void",
    defaultValue: "undefined",
    description:
      "nextValue는 primitive value 또는 null이고, selectedOption과 actionMeta도 함께 받을 수 있습니다.",
  },
  {
    name: "placeholder",
    typeLabel: "string",
    defaultValue: '"항목을 선택해주세요"',
    description: "선택값이 없을 때 표시할 안내 문구입니다.",
  },
  {
    name: "disabled",
    typeLabel: "boolean",
    defaultValue: "false",
    description: "상호작용 전체를 비활성화합니다.",
  },
  {
    name: "readOnly",
    typeLabel: "boolean",
    defaultValue: "false",
    description:
      "현재 값을 유지한 채 메뉴 열기, 검색, clear, 값 변경만 막습니다.",
  },
  {
    name: "isError",
    typeLabel: "boolean",
    defaultValue: "false",
    description:
      "시각 에러 상태와 aria-invalid를 적용합니다. Field의 에러 상태와 합쳐집니다.",
  },
  {
    name: "infoMessage | errorMessage",
    typeLabel: "string",
    defaultValue: '""',
    description: "필드 아래에 안내 메시지나 에러 메시지를 노출합니다.",
  },
  {
    name: "isSearchable | isClearable",
    typeLabel: "boolean",
    defaultValue: "false | false",
    description:
      "react-select 검색과 clear 기능을 그대로 열어둡니다. readOnly/disabled에서는 자동으로 비활성화됩니다.",
  },
  {
    name: "components | styles",
    typeLabel: "react-select extension props",
    defaultValue: "undefined",
    description:
      "react-select 커스텀 컴포넌트와 스타일 확장을 전달할 수 있습니다.",
  },
  {
    name: "menuPlacement | menuPosition | noOptionsMessage ...",
    typeLabel: "react-select props",
    defaultValue: "inherited",
    description:
      "react-select의 주요 메뉴 제어 prop도 함께 전달할 수 있습니다.",
  },
];

export default function SelectPropsTableSection() {
  return (
    <GuideSection
      label="Props Table"
      title="Select props 한눈에 보기"
      description="Select의 단일 선택 value 규칙과 react-select 확장 props를 표로 정리했습니다."
    >
      <GuidePropsTable
        rows={selectPropsRows}
        note={
          <>
            <span>
              <code>SelectProps</code>는 react-select의 단일 선택 API를 감싸되,
              외부에서는 option 객체 대신 primitive <code>value</code>만 다루도록
              단순화한 래퍼 타입입니다.
            </span>
            <div className="guidePropsTable__noteActions">
              <GuideTypeTooltip
                label="SelectOption 보기"
                title="SelectOption / SelectValue"
                description="Select와 MultiSelect가 공통으로 사용하는 옵션 및 value 타입입니다."
                code={SELECT_OPTION_CODE}
              />
              <GuideTypeTooltip
                label="SelectSharedProps 보기"
                title="SelectSharedProps"
                description="react-select 공통 wrapper prop 정의입니다."
                code={SELECT_SHARED_PROPS_CODE}
              />
              <GuideTypeTooltip
                label="SelectProps 보기"
                title="SelectProps"
                description="단일 선택 전용 래퍼 타입입니다."
                code={SELECT_PROPS_CODE}
              />
            </div>
          </>
        }
      />
    </GuideSection>
  );
}
