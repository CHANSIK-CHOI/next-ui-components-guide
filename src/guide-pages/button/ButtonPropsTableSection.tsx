import {
  GuidePropsTable,
  GuideSection,
  GuideTypeTooltip,
  type GuidePropsTableRow,
} from "@/components/Guide";
import { BUTTON_DESIGN_PROPS_CODE } from "@/components/Guide/buttonTypeReferences";
import React from "react";

const buttonPropsRows: GuidePropsTableRow[] = [
  {
    name: "children",
    typeLabel: "React.ReactNode",
    required: true,
    description: "버튼 내부에 렌더링할 라벨 또는 커스텀 콘텐츠입니다.",
  },
  {
    name: "color",
    typeLabel: '"black" | "primary" | "secondary" | "point"',
    defaultValue: '"black"',
    description: "버튼의 컬러 톤을 지정합니다.",
  },
  {
    name: "variant",
    typeLabel: '"solid" | "line" | "text"',
    defaultValue: '"solid"',
    description: (
      <>
        버튼의 표현 방식을 정합니다. <code>text</code> variant에서는{" "}
        <code>size</code>와 <code>shape</code>를 함께 사용하지 않습니다.
      </>
    ),
  },
  {
    name: "size",
    typeLabel: '"large" | "medium" | "small"',
    defaultValue: '"large"',
    description: (
      <>
        버튼의 높이와 패딩을 조절합니다. <code>solid</code> 또는{" "}
        <code>line</code> variant에서 사용합니다.
      </>
    ),
  },
  {
    name: "shape",
    typeLabel: '"round" | "square"',
    defaultValue: '"square"',
    description: (
      <>
        버튼 외곽 모양을 제어합니다. <code>text</code> variant에서는 적용되지
        않습니다.
      </>
    ),
  },
  {
    name: "icon",
    typeLabel: "React.ReactNode",
    defaultValue: "undefined",
    description: "라벨 앞에 아이콘을 함께 렌더링합니다.",
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

export default function ButtonPropsTableSection() {
  return (
    <GuideSection
      label="Props Table"
      title="Button props 한눈에 보기"
      description="Button 컴포넌트에서 자주 사용하는 핵심 props를 표로 정리했습니다."
    >
      <GuidePropsTable
        rows={buttonPropsRows}
        note={
          <>
            <span>
              <code>ButtonProps</code>는{" "}
              <code>React.ButtonHTMLAttributes&lt;HTMLButtonElement&gt;</code>를
              확장하므로 <code>name</code>, <code>value</code>,{" "}
              <code>aria-*</code> 같은 네이티브 button props도 함께 전달할 수
              있습니다.
            </span>
            <div className="guidePropsTable__noteActions">
              <GuideTypeTooltip
                label="ButtonDesignProps 보기"
                title="ButtonDesignProps"
                description="variant가 text일 때 size, shape를 막는 조합 규칙이 들어 있는 디자인 타입입니다."
                code={BUTTON_DESIGN_PROPS_CODE}
              />
            </div>
          </>
        }
      />
    </GuideSection>
  );
}
