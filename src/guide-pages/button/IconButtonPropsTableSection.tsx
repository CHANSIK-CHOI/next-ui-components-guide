import {
  GuidePropsTable,
  GuideSection,
  GuideTypeTooltip,
  type GuidePropsTableRow,
} from "@/components/Guide";
import { ICON_BUTTON_PROPS_CODE } from "@/components/Guide/buttonTypeReferences";

const iconButtonPropsRows: GuidePropsTableRow[] = [
  {
    name: "children",
    typeLabel: "React.ReactNode",
    required: true,
    description: "버튼 안에 렌더링할 아이콘 노드입니다.",
  },
  {
    name: "aria-label",
    typeLabel: "string",
    defaultValue: "undefined",
    description:
      "아이콘만 표시되므로 실사용에서는 접근성 이름을 지정하는 것을 권장합니다.",
  },
  {
    name: "color",
    typeLabel: '"black" | "primary" | "secondary" | "point"',
    defaultValue: '"black"',
    description: "아이콘 버튼의 컬러 톤을 지정합니다.",
  },
  {
    name: "variant",
    typeLabel: '"solid" | "line"',
    defaultValue: '"solid"',
    description:
      'IconButton은 variant="text"를 지원하지 않고 solid 또는 line만 사용합니다.',
  },
  {
    name: "size",
    typeLabel: '"large" | "medium" | "small"',
    defaultValue: '"large"',
    description: "버튼의 크기를 조절합니다.",
  },
  {
    name: "shape",
    typeLabel: '"round" | "square"',
    defaultValue: '"square"',
    description: "버튼 외곽 모양을 제어합니다.",
  },
  {
    name: "className",
    typeLabel: "string",
    defaultValue: "undefined",
    description: "추가 스타일링이 필요할 때 커스텀 클래스를 전달합니다.",
  },
  {
    name: "disabled",
    typeLabel: "boolean",
    defaultValue: "false",
    description: "네이티브 button 속성으로, 비활성 상태를 적용합니다.",
  },
  {
    name: "type",
    typeLabel: '"button" | "submit" | "reset"',
    defaultValue: '"button"',
    description: "폼 내부에서 버튼의 동작 방식을 지정합니다.",
  },
  {
    name: "onClick",
    typeLabel: "React.MouseEventHandler<HTMLButtonElement>",
    defaultValue: "undefined",
    description: "클릭 이벤트 핸들러를 전달합니다.",
  },
];

export default function IconButtonPropsTableSection() {
  return (
    <GuideSection
      label="Props Table"
      title="IconButton props 한눈에 보기"
      description="IconButton에서 자주 사용하는 핵심 props를 표로 정리했습니다."
    >
      <GuidePropsTable
        rows={iconButtonPropsRows}
        note={
          <>
            <span>
              <code>IconButtonProps</code>는 <code>ButtonProps</code>에서{" "}
              <code>icon</code>을 제거하고 <code>variant</code>를{" "}
              <code>{'"solid" | "line"'}</code>으로 제한한 타입입니다. 아이콘은{" "}
              <code>icon</code> prop이 아니라 <code>children</code>으로
              전달합니다.
            </span>
            <div className="guidePropsTable__noteActions">
              <GuideTypeTooltip
                label="IconButtonProps 보기"
                title="IconButtonProps"
                description="ButtonProps에서 icon을 제거하고 variant를 좁히는 전용 타입입니다."
                code={ICON_BUTTON_PROPS_CODE}
              />
            </div>
          </>
        }
      />
    </GuideSection>
  );
}
