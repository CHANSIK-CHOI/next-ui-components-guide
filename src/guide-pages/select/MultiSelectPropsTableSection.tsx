import {
  GuidePropsTable,
  GuideSection,
  GuideTypeTooltip,
  type GuidePropsTableRow,
} from "@/components/Guide";
import { MULTI_SELECT_PROPS_CODE } from "@/components/Guide/selectTypeReferences";

const multiSelectPropsRows: GuidePropsTableRow[] = [
  {
    name: "options",
    typeLabel: "OptionsOrGroups<SelectOption, GroupBase<SelectOption>>",
    required: true,
    description:
      "일반 옵션 목록과 grouped options를 모두 그대로 전달할 수 있습니다.",
  },
  {
    name: "value",
    typeLabel: "(string | number)[]",
    defaultValue: "[]",
    description:
      "외부에서는 선택된 primitive value 배열만 주고받습니다.",
  },
  {
    name: "onChange",
    typeLabel:
      "(nextValue, selectedOption, actionMeta) => void",
    defaultValue: "undefined",
    description:
      "nextValue는 primitive value 배열이고, selectedOption과 actionMeta도 함께 받을 수 있습니다.",
  },
  {
    name: "closeMenuOnSelect",
    typeLabel: "boolean",
    defaultValue: "react-select default",
    description:
      "다중 선택에서는 보통 false로 두고 연속 선택 흐름을 만듭니다.",
  },
  {
    name: "isSearchable | isClearable",
    typeLabel: "boolean",
    defaultValue: "false | false",
    description:
      "검색과 전체 clear 기능을 그대로 열어둘 수 있습니다. readOnly/disabled에서는 자동으로 비활성화됩니다.",
  },
  {
    name: "placeholder",
    typeLabel: "string",
    defaultValue: '"항목을 선택해주세요"',
    description: "선택값이 없을 때 표시할 안내 문구입니다.",
  },
  {
    name: "disabled | readOnly | isError",
    typeLabel: "boolean",
    defaultValue: "false",
    description:
      "상태 제어와 에러 표시 규칙은 Select와 동일합니다.",
  },
  {
    name: "infoMessage | errorMessage",
    typeLabel: "string",
    defaultValue: '""',
    description: "필드 아래에 안내 메시지나 에러 메시지를 노출합니다.",
  },
  {
    name: "components | styles | menuPlacement ...",
    typeLabel: "react-select props",
    defaultValue: "inherited",
    description:
      "react-select의 커스텀 컴포넌트, 스타일, 메뉴 제어 prop도 함께 전달할 수 있습니다.",
  },
];

export default function MultiSelectPropsTableSection() {
  return (
    <GuideSection
      label="Props Table"
      title="MultiSelect props 한눈에 보기"
      description="MultiSelect의 다중 선택 value 규칙과 자주 쓰는 react-select props를 표로 정리했습니다."
    >
      <GuidePropsTable
        rows={multiSelectPropsRows}
        note={
          <>
            <span>
              <code>MultiSelectProps</code>는 react-select의 다중 선택 API를
              감싸되, 외부에서는 option 객체 대신 primitive{" "}
              <code>value[]</code>만 다루도록 단순화한 래퍼 타입입니다.
            </span>
            <div className="guidePropsTable__noteActions">
              <GuideTypeTooltip
                label="MultiSelectProps 보기"
                title="MultiSelectProps"
                description="다중 선택 전용 래퍼 타입입니다."
                code={MULTI_SELECT_PROPS_CODE}
              />
            </div>
          </>
        }
      />
    </GuideSection>
  );
}
