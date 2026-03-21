import {
  GuidePropsTable,
  GuideSection,
  GuideTypeTooltip,
  type GuidePropsTableRow,
} from "@/components/Guide";
import {
  CONFIRM_CONTENT_PROPS_CODE,
  CONFIRM_POPUP_OPTIONS_CODE,
  CONFIRM_PROPS_CODE,
} from "@/components/Guide/popupTypeReferences";

const confirmOptionsRows: GuidePropsTableRow[] = [
  {
    name: "title",
    typeLabel: "React.ReactNode",
    defaultValue: "undefined",
    description: "선택적 제목입니다. description과 함께 확인 맥락을 제공합니다.",
  },
  {
    name: "description",
    typeLabel: "React.ReactNode",
    defaultValue: "undefined",
    description: "사용자에게 선택 판단 근거를 보여주는 본문입니다.",
  },
  {
    name: "icon",
    typeLabel: "React.ReactNode | null",
    defaultValue: "<AttentionIcon />",
    description:
      "기본 경고 아이콘 대신 다른 시각 요소로 바꾸거나, null로 숨길 수 있습니다.",
  },
  {
    name: "cancelText | confirmText",
    typeLabel: "React.ReactNode",
    defaultValue: '"취소" | "확인"',
    description: "하단 취소/확인 버튼 텍스트입니다.",
  },
  {
    name: "onCancel | onConfirm",
    typeLabel: "() => void",
    defaultValue: "undefined",
    description:
      "취소 또는 확인 버튼 클릭 시 실행되는 후처리입니다. 기본적으로 그 뒤 Confirm이 닫힙니다.",
  },
  {
    name: "shouldCloseOnCancel | shouldCloseOnConfirm",
    typeLabel: "boolean",
    defaultValue: "true | true",
    description:
      "버튼 클릭 후 현재 Confirm을 자동으로 닫을지 제어합니다. false면 후속 popup을 이어서 띄우는 흐름을 만들 수 있습니다.",
  },
  {
    name: "className",
    typeLabel: "string",
    defaultValue: "undefined",
    description: "Confirm 루트 스타일 확장용 클래스입니다.",
  },
  {
    name: "id",
    typeLabel: "string",
    defaultValue: "auto generated id",
    description:
      "특정 Confirm을 직접 추적하거나 close(id) 대상으로 삼고 싶을 때 사용합니다.",
  },
];

export default function ConfirmOptionsTableSection() {
  return (
    <GuideSection
      label="Props Table"
      title="Confirm options 한눈에 보기"
      description="useConfirm().open()과 openAsync()에 넘기는 ConfirmPopupOptions를 중심으로 정리했습니다."
    >
      <GuidePropsTable
        rows={confirmOptionsRows}
        note={
          <>
            <span>
              페이지에서 직접 다루는 API는 <code>ConfirmPopupOptions</code>
              입니다. 내부 <code>ConfirmProps</code>의 <code>open</code>,{" "}
              <code>onExited</code>, <code>isTopmost</code>는 PopupHost가 주입하는
              runtime 값이라 보통 직접 넘기지 않습니다.
            </span>
            <div className="guidePropsTable__noteActions">
              <GuideTypeTooltip
                label="ConfirmContentProps 보기"
                title="ConfirmContentProps"
                description="Confirm이 본문과 버튼 텍스트로 직접 받는 내용 props입니다."
                code={CONFIRM_CONTENT_PROPS_CODE}
              />
              <GuideTypeTooltip
                label="ConfirmPopupOptions 보기"
                title="ConfirmPopupOptions"
                description="useConfirm().open()과 openAsync()에 넘기는 옵션 타입입니다."
                code={CONFIRM_POPUP_OPTIONS_CODE}
              />
              <GuideTypeTooltip
                label="ConfirmProps 보기"
                title="ConfirmProps"
                description="PopupHost가 실제 Confirm 컴포넌트에 넘기는 내부 runtime 포함 타입입니다."
                code={CONFIRM_PROPS_CODE}
              />
            </div>
          </>
        }
      />
    </GuideSection>
  );
}
