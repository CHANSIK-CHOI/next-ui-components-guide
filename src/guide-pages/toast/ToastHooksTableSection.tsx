import {
  GuidePropsTable,
  GuideSection,
  GuideTypeTooltip,
  type GuidePropsTableRow,
} from "@/components/Guide";
import {
  TOAST_OPEN_OPTIONS_CODE,
  TOAST_SNAPSHOT_CODE,
} from "@/components/Guide/toastTypeReferences";

const toastHookRows: GuidePropsTableRow[] = [
  {
    name: "useToast().open",
    typeLabel: "(options: ToastOpenOptions) => string",
    required: true,
    description:
      "새 Toast를 전역 store stack에 추가하고 생성된 id를 반환합니다.",
  },
  {
    name: "useToast().close",
    typeLabel: "(id?: string) => void",
    required: true,
    description:
      "id를 주면 해당 Toast를 닫고, 생략하면 현재 stack의 마지막 Toast를 닫습니다.",
  },
  {
    name: "useToast().closeAll",
    typeLabel: "() => void",
    required: true,
    description:
      "현재 열린 Toast 전체를 closing 상태로 전환해 한 번에 정리합니다.",
  },
  {
    name: "useToast().toasts",
    typeLabel: "ToastSnapshot[]",
    required: true,
    description:
      "현재 toast stack snapshot입니다. id, status, tone만 담은 가벼운 조회용 배열입니다.",
  },
  {
    name: "useToastStack()",
    typeLabel: "() => ToastSnapshot[]",
    required: true,
    description:
      "store snapshot만 필요할 때 직접 사용할 수 있는 selector hook입니다. useToast().toasts와 같은 구조를 반환합니다.",
  },
];

export default function ToastHooksTableSection() {
  return (
    <GuideSection
      label="Props Table"
      title="Toast hook API 한눈에 보기"
      description="전역 Toast stack 제어와 상태 조회에 사용하는 hook API를 표로 정리했습니다."
    >
      <GuidePropsTable
        rows={toastHookRows}
        note={
          <>
            <span>
              <code>useToast()</code>는 modal popup처럼 component 등록 없이
              옵션 객체만 넘겨서 feedback 메시지를 stack에 추가합니다. 실제
              렌더링은 앱 루트의 <code>ToastHost</code>가{" "}
              <code>#toast-root</code>에 portal로 처리합니다.
            </span>
            <div className="guidePropsTable__noteActions">
              <GuideTypeTooltip
                label="ToastOpenOptions 보기"
                title="ToastOpenOptions"
                description="open()에 넘기는 옵션 타입입니다."
                code={TOAST_OPEN_OPTIONS_CODE}
              />
              <GuideTypeTooltip
                label="ToastSnapshot 보기"
                title="ToastSnapshot"
                description="useToast().toasts와 useToastStack()이 반환하는 snapshot 구조입니다."
                code={TOAST_SNAPSHOT_CODE}
              />
            </div>
          </>
        }
      />
    </GuideSection>
  );
}
