import {
  GuidePropsTable,
  GuideSection,
  GuideTypeTooltip,
  type GuidePropsTableRow,
} from "@/components/Guide";
import { FIELD_GRID_PROPS_CODE } from "@/components/Guide/fieldTypeReferences";

const fieldGridPropsRows: GuidePropsTableRow[] = [
  {
    name: "children",
    typeLabel: "React.ReactNode",
    required: true,
    description:
      "보통 여러 개의 Field 또는 Field.Item 블록을 grid 레이아웃으로 배치합니다.",
  },
  {
    name: "columns",
    typeLabel: "1 | 2 | 3 | 4",
    defaultValue: "2",
    description:
      "CSS custom property로 grid 열 수를 제어합니다. 모바일 대응은 스타일 정의를 따릅니다.",
  },
  {
    name: "className",
    typeLabel: "string",
    defaultValue: "undefined",
    description: "Field.Grid wrapper에 커스텀 클래스를 추가합니다.",
  },
];

export default function FieldGridPropsTableSection() {
  return (
    <GuideSection
      label="Props Table"
      title="Field.Grid props 한눈에 보기"
      description="Field.Grid은 레이아웃만 담당하고, 자식 Field 스코프는 건드리지 않습니다."
    >
      <GuidePropsTable
        rows={fieldGridPropsRows}
        note={
          <>
            <span>
              <code>Field.Grid</code>은 단순 layout wrapper입니다. 내부에서
              context를 새로 만들지 않으므로, 각 자식 <code>Field</code> 또는{" "}
              <code>Field.Item</code>이 자신의 scope를 그대로 유지합니다.
            </span>
            <div className="guidePropsTable__noteActions">
              <GuideTypeTooltip
                label="FieldGridProps 보기"
                title="FieldGridProps"
                description="Field.Grid이 받는 레이아웃 전용 props 타입입니다."
                code={FIELD_GRID_PROPS_CODE}
              />
            </div>
          </>
        }
      />
    </GuideSection>
  );
}
