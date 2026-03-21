import {
  GuidePropsTable,
  GuideSection,
  type GuidePropsTableRow,
} from "@/components/Guide";

const buttonGroupPropsRows: GuidePropsTableRow[] = [
  {
    name: "children",
    typeLabel: "React.ReactNode",
    required: true,
    description:
      "보통 ButtonGroup.Item들을 자식으로 전달해 가로 배치를 구성합니다.",
  },
  {
    name: "className",
    typeLabel: "string",
    defaultValue: "undefined",
    description: "그룹 루트에 커스텀 클래스를 추가합니다.",
  },
];

const buttonGroupItemPropsRows: GuidePropsTableRow[] = [
  {
    name: "children",
    typeLabel: "React.ReactNode",
    required: true,
    description: "각 그룹 셀 안에 배치할 버튼 또는 커스텀 콘텐츠입니다.",
  },
  {
    name: "className",
    typeLabel: "string",
    defaultValue: "undefined",
    description: "개별 item 래퍼에 커스텀 클래스를 추가합니다.",
  },
  {
    name: "shouldAutoWidth",
    typeLabel: "boolean",
    defaultValue: "false",
    description:
      "true이면 해당 item이 남는 공간을 균등 분배하지 않고 콘텐츠 너비에 맞춰집니다.",
  },
];

export default function ButtonGroupPropsTableSection() {
  return (
    <GuideSection
      label="Props Table"
      title="ButtonGroup / ButtonGroup.Item props 한눈에 보기"
      description="ButtonGroup과 ButtonGroup.Item의 레이아웃 관련 props를 표로 정리했습니다."
    >
      <GuidePropsTable
        title="ButtonGroup"
        rows={buttonGroupPropsRows}
        note={
          <>
            <code>ButtonGroup</code>은 내부에서 <code>buttonGroup__wrap</code>{" "}
            레이아웃을 만들고, 각 자식은 보통 <code>ButtonGroup.Item</code>으로
            감싸서 사용합니다.
          </>
        }
      />

      <GuidePropsTable
        title="ButtonGroup.Item"
        description="정적 속성 형태로 제공되는 하위 컴포넌트입니다."
        rows={buttonGroupItemPropsRows}
        note={
          <>
            <code>ButtonGroup.Item</code>은 별도 export가 아니라{" "}
            <code>ButtonGroup.Item</code> 정적 프로퍼티로 제공됩니다.
          </>
        }
      />
    </GuideSection>
  );
}
