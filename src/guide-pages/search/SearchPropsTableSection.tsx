import {
  GuidePropsTable,
  GuideSection,
  GuideTypeTooltip,
  type GuidePropsTableRow,
} from "@/components/Guide";
import { SEARCH_PROPS_CODE } from "@/components/Guide/searchTypeReferences";

const searchPropsRows: GuidePropsTableRow[] = [
  {
    name: "value",
    typeLabel: 'string | number | readonly string[] | undefined',
    defaultValue: "undefined",
    description: "현재 입력값을 외부 상태로 관리합니다.",
  },
  {
    name: "onSearch",
    typeLabel: "() => void",
    defaultValue: "undefined",
    description: "검색 버튼 클릭 시 실행할 액션을 지정합니다.",
  },
  {
    name: "searchButtonTitle",
    typeLabel: "string",
    defaultValue: '"검색"',
    description: "검색 버튼의 접근성 title을 지정합니다.",
  },
  {
    name: "searchButtonType",
    typeLabel: '"button" | "submit" | "reset"',
    defaultValue: 'onSearch ? "button" : "submit"',
    description:
      "form 내부에서 검색 버튼을 submit 버튼처럼 쓰고 싶을 때 지정합니다.",
  },
  {
    name: "isClearable / onClear",
    typeLabel: "boolean | () => void",
    defaultValue: "false | undefined",
    description:
      "Textfield와 동일한 clear 버튼 규칙을 따릅니다.",
  },
  {
    name: "placeholder | infoMessage | errorMessage",
    typeLabel: "string",
    defaultValue: "Textfield defaults",
    description:
      "검색 UI에도 Textfield의 보조 메시지와 에러 메시지 규칙을 그대로 적용합니다.",
  },
  {
    name: "disabled",
    typeLabel: "boolean",
    defaultValue: "false",
    description:
      "입력과 검색 버튼을 모두 비활성화합니다.",
  },
  {
    name: "readOnly",
    typeLabel: "boolean",
    defaultValue: "false",
    description:
      "직접 입력과 clear 버튼은 막지만 검색 버튼 액션은 유지합니다.",
  },
  {
    name: "name / inputMode / maxLength / autoComplete ...",
    typeLabel: "Textfield inherited props",
    defaultValue: "inherited",
    description:
      "Textfield에서 허용하는 native input props와 UI props를 함께 전달할 수 있습니다.",
  },
];

export default function SearchPropsTableSection() {
  return (
    <GuideSection
      label="Props Table"
      title="Search props 한눈에 보기"
      description="Search에서 자주 사용하는 검색 버튼 관련 props와 Textfield 상속 props를 표로 정리했습니다."
    >
      <GuidePropsTable
        rows={searchPropsRows}
        note={
          <>
            <span>
              <code>SearchProps</code>는 <code>TextfieldProps</code>에서{" "}
              <code>children</code>과 <code>type</code>을 숨기고, 검색 버튼용
              prop만 추가한 타입입니다. 내부에서 <code>type</code>은 항상{" "}
              <code>{'"text"'}</code>로 고정되고 검색 버튼이 자동 렌더링됩니다.
            </span>
            <div className="guidePropsTable__noteActions">
              <GuideTypeTooltip
                label="SearchProps 보기"
                title="SearchProps"
                description="Textfield 기반 검색 입력 래퍼의 타입 정의입니다."
                code={SEARCH_PROPS_CODE}
              />
            </div>
          </>
        }
      />
    </GuideSection>
  );
}
