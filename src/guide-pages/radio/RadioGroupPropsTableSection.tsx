import {
  GuidePropsTable,
  GuideSection,
  type GuidePropsTableRow,
} from "@/components/Guide";

const radioGroupPropsRows: GuidePropsTableRow[] = [
  {
    name: "children",
    typeLabel: "React.ReactNode",
    required: true,
    description:
      "보통 여러 Radio와 Field.Item 조합을 자식으로 배치합니다.",
  },
  {
    name: "name",
    typeLabel: "string",
    defaultValue: "undefined",
    description: "하위 Radio들이 공통으로 사용할 name 값을 제공합니다.",
  },
  {
    name: "direction",
    typeLabel: '"row" | "column"',
    defaultValue: '"column"',
    description: "그룹 내부 라디오 배치 방향을 지정합니다.",
  },
  {
    name: "disabled",
    typeLabel: "boolean",
    defaultValue: "false",
    description:
      "하위 Radio들이 기본적으로 상속할 disabled 상태를 제공합니다.",
  },
  {
    name: "readOnly",
    typeLabel: "boolean",
    defaultValue: "false",
    description:
      "하위 Radio들이 기본적으로 상속할 readOnly 상태를 제공합니다.",
  },
  {
    name: "isError",
    typeLabel: "boolean",
    defaultValue: "false",
    description:
      "그룹 단위 에러 상태를 지정합니다. Field의 에러 상태와 합쳐져 하위 Radio에 전달됩니다.",
  },
  {
    name: "aria-labelledby",
    typeLabel: "string",
    defaultValue: "merged ids",
    description:
      "직접 전달한 값에 Field label id가 있으면 함께 병합되어 group label로 사용됩니다.",
  },
  {
    name: "aria-describedby",
    typeLabel: "string",
    defaultValue: "merged ids",
    description:
      "직접 전달한 값에 Field 설명/에러 id가 있으면 함께 병합됩니다.",
  },
  {
    name: "className",
    typeLabel: "string",
    defaultValue: "undefined",
    description: "그룹 루트 wrapper에 커스텀 클래스를 추가합니다.",
  },
];

export default function RadioGroupPropsTableSection() {
  return (
    <GuideSection
      label="Props Table"
      title="RadioGroup props 한눈에 보기"
      description="RadioGroup의 레이아웃과 공통 상태 전파 props를 표로 정리했습니다."
    >
      <GuidePropsTable
        rows={radioGroupPropsRows}
        note={
          <>
            <code>RadioGroupProps</code>는{" "}
            <code>HTMLAttributes&lt;HTMLDivElement&gt;</code>를 기반으로 하며{" "}
            <code>role</code>은 내부에서 항상 <code>{'"radiogroup"'}</code>로
            고정됩니다. <code>name</code>, <code>disabled</code>,{" "}
            <code>readOnly</code>, <code>isError</code>는 context로 하위{" "}
            <code>Radio</code>에 전달됩니다.
          </>
        }
      />
    </GuideSection>
  );
}
