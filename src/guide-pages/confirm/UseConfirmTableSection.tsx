import {
  GuidePropsTable,
  GuideSection,
  GuideTypeTooltip,
  type GuidePropsTableRow,
} from "@/components/Guide";
import {
  CONFIRM_POPUP_OPTIONS_CODE,
  POPUP_SNAPSHOT_CODE,
} from "@/components/Guide/popupTypeReferences";

const useConfirmRows: GuidePropsTableRow[] = [
  {
    name: "open",
    typeLabel: "(options: ConfirmPopupOptions) => string",
    required: true,
    description:
      "새 Confirm을 전역 store stack에 추가하고 생성된 id를 반환합니다.",
  },
  {
    name: "openAsync",
    typeLabel: "(options: ConfirmPopupOptions) => Promise<boolean>",
    required: true,
    description:
      "확인 버튼이면 true, 취소 버튼이거나 close/closeAll로 닫히면 false를 resolve합니다.",
  },
  {
    name: "close",
    typeLabel: "(id?: string) => void",
    required: true,
    description:
      "id를 주면 해당 Confirm을 닫고, 생략하면 현재 Confirm stack의 마지막 항목을 닫습니다. openAsync 결과는 false로 정리됩니다.",
  },
  {
    name: "closeAll",
    typeLabel: "() => void",
    required: true,
    description:
      "현재 열린 Confirm 타입 인스턴스만 모두 closing 상태로 전환하고, openAsync 대기 promise도 false로 정리합니다.",
  },
  {
    name: "confirms",
    typeLabel: 'Array<{ id: string; type: "confirm"; status: "open" | "closing" }>',
    required: true,
    description:
      "전역 popup stack 중 Confirm 항목만 필터링한 snapshot 배열입니다.",
  },
];

export default function UseConfirmTableSection() {
  return (
    <GuideSection
      label="Props Table"
      title="useConfirm API 한눈에 보기"
      description="전역 Confirm stack 제어와 async 분기에 사용하는 hook API를 표로 정리했습니다."
    >
      <GuidePropsTable
        rows={useConfirmRows}
        note={
          <>
            <span>
              <code>useConfirm()</code>는 route와 무관하게 Confirm을 띄우기 위한
              전역 facade입니다. <code>openAsync()</code>는 store 위에 promise
              resolver를 얹은 helper라서, imperative 분기 처리에 적합합니다.
            </span>
            <div className="guidePropsTable__noteActions">
              <GuideTypeTooltip
                label="ConfirmPopupOptions 보기"
                title="ConfirmPopupOptions"
                description="open()과 openAsync()에 넘기는 옵션 타입입니다."
                code={CONFIRM_POPUP_OPTIONS_CODE}
              />
              <GuideTypeTooltip
                label="PopupSnapshot 보기"
                title="PopupSnapshot"
                description="confirms 배열이 반환하는 stack snapshot 구조입니다."
                code={POPUP_SNAPSHOT_CODE}
              />
            </div>
          </>
        }
      />
    </GuideSection>
  );
}
