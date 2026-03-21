import {
  GuidePropsTable,
  GuideSection,
  GuideTypeTooltip,
  type GuidePropsTableRow,
} from "@/components/Guide";
import {
  ALERT_POPUP_OPTIONS_CODE,
  POPUP_SNAPSHOT_CODE,
} from "@/components/Guide/popupTypeReferences";

const useAlertRows: GuidePropsTableRow[] = [
  {
    name: "open",
    typeLabel: "(options: AlertPopupOptions) => string",
    required: true,
    description:
      "새 Alert를 전역 store stack에 추가하고 생성된 id를 반환합니다.",
  },
  {
    name: "close",
    typeLabel: "(id?: string) => void",
    required: true,
    description:
      "id를 주면 해당 Alert를 닫고, 생략하면 현재 Alert stack의 마지막 항목을 닫습니다.",
  },
  {
    name: "closeAll",
    typeLabel: "() => void",
    required: true,
    description:
      "현재 열린 Alert 타입 인스턴스만 모두 closing 상태로 전환합니다.",
  },
  {
    name: "alerts",
    typeLabel: 'Array<{ id: string; type: "alert"; status: "open" | "closing" }>',
    required: true,
    description:
      "전역 popup stack 중 Alert 항목만 필터링한 snapshot 배열입니다.",
  },
];

export default function UseAlertTableSection() {
  return (
    <GuideSection
      label="Props Table"
      title="useAlert API 한눈에 보기"
      description="전역 Alert stack 제어에 사용하는 hook API를 표로 정리했습니다."
    >
      <GuidePropsTable
        rows={useAlertRows}
        note={
          <>
            <span>
              <code>useAlert()</code>는 route와 무관하게 Alert를 띄우기 위한
              전역 facade입니다. 실제 렌더링은 앱 루트의{" "}
              <code>PopupHost</code>가 담당합니다.
            </span>
            <div className="guidePropsTable__noteActions">
              <GuideTypeTooltip
                label="AlertPopupOptions 보기"
                title="AlertPopupOptions"
                description="open()에 넘기는 옵션 타입입니다."
                code={ALERT_POPUP_OPTIONS_CODE}
              />
              <GuideTypeTooltip
                label="PopupSnapshot 보기"
                title="PopupSnapshot"
                description="alerts 배열이 반환하는 stack snapshot 구조입니다."
                code={POPUP_SNAPSHOT_CODE}
              />
            </div>
          </>
        }
      />
    </GuideSection>
  );
}
