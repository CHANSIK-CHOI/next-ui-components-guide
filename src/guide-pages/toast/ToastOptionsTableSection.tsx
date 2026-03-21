import {
  GuidePropsTable,
  GuideSection,
  GuideTypeTooltip,
  type GuidePropsTableRow,
} from "@/components/Guide";
import {
  TOAST_OPEN_OPTIONS_CODE,
  TOAST_PROPS_CODE,
  TOAST_SHARED_PROPS_CODE,
} from "@/components/Guide/toastTypeReferences";

const toastOptionsRows: GuidePropsTableRow[] = [
  {
    name: "message",
    typeLabel: "React.ReactNode",
    required: true,
    description:
      "Toast에 표시할 실제 안내 문구입니다. string뿐 아니라 ReactNode도 그대로 넣을 수 있습니다.",
  },
  {
    name: "tone",
    typeLabel: '"default" | "error"',
    defaultValue: '"default"',
    description:
      "default는 일반 상태 안내, error는 더 강한 시각 톤과 `role=\"alert\"`를 사용합니다.",
  },
  {
    name: "duration",
    typeLabel: "number",
    defaultValue: "2400",
    description:
      "자동 닫힘 시간(ms)입니다. 0 이하로 주면 자동으로 닫히지 않고 수동 close가 필요합니다.",
  },
  {
    name: "id",
    typeLabel: "string",
    defaultValue: "auto generated id",
    description:
      "특정 toast를 직접 추적하거나 close(id) 대상으로 삼고 싶을 때 사용합니다.",
  },
  {
    name: "onOpenComplete",
    typeLabel: "() => void",
    defaultValue: "undefined",
    description:
      "진입 애니메이션이 끝난 뒤 1회 실행됩니다.",
  },
  {
    name: "onCloseComplete",
    typeLabel: "() => void",
    defaultValue: "undefined",
    description:
      "퇴장 애니메이션이 끝나고 ToastHost가 인스턴스를 제거한 뒤 실행됩니다.",
  },
  {
    name: "className",
    typeLabel: "string",
    defaultValue: "undefined",
    description: "Toast 루트 스타일 확장용 클래스입니다.",
  },
];

export default function ToastOptionsTableSection() {
  return (
    <GuideSection
      label="Props Table"
      title="Toast options 한눈에 보기"
      description="useToast().open()에 넘기는 ToastOpenOptions와 내부 runtime props 차이를 정리했습니다."
    >
      <GuidePropsTable
        rows={toastOptionsRows}
        note={
          <>
            <span>
              페이지에서 직접 다루는 API는 <code>ToastOpenOptions</code>입니다.
              내부 <code>ToastProps</code>의 <code>open</code>,{" "}
              <code>onRequestClose</code>, <code>onExited</code>는{" "}
              <code>ToastHost</code>가 주입합니다. 반대로{" "}
              <code>onCloseComplete</code>는 host 단계에서 소비되는 hook-side
              옵션입니다.
            </span>
            <div className="guidePropsTable__noteActions">
              <GuideTypeTooltip
                label="ToastSharedProps 보기"
                title="ToastSharedProps"
                description="Toast와 ToastOpenOptions가 공통으로 사용하는 내용 props입니다."
                code={TOAST_SHARED_PROPS_CODE}
              />
              <GuideTypeTooltip
                label="ToastOpenOptions 보기"
                title="ToastOpenOptions"
                description="useToast().open()에 넘기는 옵션 타입입니다."
                code={TOAST_OPEN_OPTIONS_CODE}
              />
              <GuideTypeTooltip
                label="ToastProps 보기"
                title="ToastProps"
                description="ToastHost가 실제 Toast 컴포넌트에 넘기는 내부 runtime 포함 타입입니다."
                code={TOAST_PROPS_CODE}
              />
            </div>
          </>
        }
      />
    </GuideSection>
  );
}
