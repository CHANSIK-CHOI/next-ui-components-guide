import {
  GuidePropsTable,
  GuideSection,
  GuideTypeTooltip,
  type GuidePropsTableRow,
} from "@/components/Guide";
import {
  BUTTON_BASE_PROPS_CODE,
  BUTTON_DESIGN_PROPS_CODE,
} from "@/components/Guide/buttonTypeReferences";

const buttonLinkPropsRows: GuidePropsTableRow[] = [
  {
    name: "children",
    typeLabel: "React.ReactNode",
    required: true,
    description: "링크 버튼 내부에 렌더링할 텍스트 또는 커스텀 콘텐츠입니다.",
  },
  {
    name: "href",
    typeLabel: "string | UrlObject",
    required: true,
    description: "이동할 경로입니다. Next Link의 필수 prop입니다.",
  },
  {
    name: "color",
    typeLabel: '"black" | "primary" | "secondary" | "point"',
    defaultValue: '"black"',
    description: "버튼 링크의 컬러 톤을 지정합니다.",
  },
  {
    name: "variant",
    typeLabel: '"solid" | "line" | "text"',
    defaultValue: '"solid"',
    description: (
      <>
        링크의 표현 방식을 정합니다. <code>text</code> variant에서는{" "}
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
        링크의 높이와 패딩을 조절합니다. <code>solid</code> 또는{" "}
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
        링크 외곽 모양을 제어합니다. <code>text</code> variant에서는 적용되지
        않습니다.
      </>
    ),
  },
  {
    name: "icon",
    typeLabel: "React.ReactNode",
    defaultValue: "undefined",
    description: "링크 라벨 앞에 아이콘을 함께 렌더링합니다.",
  },
  {
    name: "className",
    typeLabel: "string",
    defaultValue: "undefined",
    description: "추가 스타일링이 필요할 때 커스텀 클래스를 전달합니다.",
  },
  {
    name: "target",
    typeLabel: "string",
    defaultValue: "undefined",
    description: "새 창 열기 같은 링크 동작이 필요할 때 지정합니다.",
  },
  {
    name: "rel",
    typeLabel: "string",
    defaultValue: "undefined",
    description: "외부 링크에서 보안 속성을 함께 지정할 때 사용합니다.",
  },
  {
    name: "prefetch",
    typeLabel: "boolean",
    defaultValue: "Next Link default",
    description: "내부 링크 프리페치 동작을 제어합니다.",
  },
  {
    name: "replace / scroll",
    typeLabel: "boolean",
    defaultValue: "Next Link default",
    description: "히스토리 교체 여부와 이동 후 스크롤 동작을 제어합니다.",
  },
];

export default function ButtonLinkPropsTableSection() {
  return (
    <GuideSection
      label="Props Table"
      title="ButtonLink props 한눈에 보기"
      description="ButtonLink에서 자주 사용하는 디자인 props와 Link 위임 props를 표로 정리했습니다."
    >
      <GuidePropsTable
        rows={buttonLinkPropsRows}
        note={
          <>
            <span>
              <code>ButtonLinkProps</code>는 <code>ButtonBaseProps</code>,{" "}
              <code>ButtonDesignProps</code>와 Next <code>Link</code> props를
              조합합니다. 표에 없는 <code>onClick</code>, <code>locale</code>,{" "}
              <code>shallow</code> 같은 Link 관련 props도 함께 전달할 수
              있습니다.
            </span>
            <div className="guidePropsTable__noteActions">
              <GuideTypeTooltip
                label="ButtonBaseProps 보기"
                title="ButtonBaseProps"
                description="Button, ButtonLink가 공통으로 쓰는 기본 콘텐츠/스타일 props입니다."
                code={BUTTON_BASE_PROPS_CODE}
              />
              <GuideTypeTooltip
                label="ButtonDesignProps 보기"
                title="ButtonDesignProps"
                description="variant 조합에 따라 size, shape 허용 범위가 달라지는 디자인 타입입니다."
                code={BUTTON_DESIGN_PROPS_CODE}
              />
            </div>
          </>
        }
      />
    </GuideSection>
  );
}
