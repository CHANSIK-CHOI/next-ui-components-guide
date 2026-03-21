import {
  GuidePropsTable,
  GuideSection,
  GuideTypeTooltip,
  type GuidePropsTableRow,
} from "@/components/Guide";
import {
  ALERT_CONTENT_PROPS_CODE,
  ALERT_POPUP_OPTIONS_CODE,
  ALERT_PROPS_CODE,
} from "@/components/Guide/popupTypeReferences";

const alertOptionsRows: GuidePropsTableRow[] = [
  {
    name: "title",
    typeLabel: "React.ReactNode",
    defaultValue: "undefined",
    description:
      "선택적 제목입니다. 없으면 description 중심의 단순 안내형 Alert로 사용할 수 있습니다.",
  },
  {
    name: "description",
    typeLabel: "React.ReactNode",
    defaultValue: "undefined",
    description: "실제 안내 문구 본문입니다.",
  },
  {
    name: "icon",
    typeLabel: "React.ReactNode | null",
    defaultValue: "<AttentionIcon />",
    description:
      "기본 경고 아이콘 대신 다른 시각 요소로 바꾸거나, null로 숨길 수 있습니다.",
  },
  {
    name: "confirmText",
    typeLabel: "React.ReactNode",
    defaultValue: '"확인"',
    description: "하단 단일 확인 버튼 텍스트입니다.",
  },
  {
    name: "onConfirm",
    typeLabel: "() => void",
    defaultValue: "undefined",
    description:
      "확인 버튼 클릭 시 실행되는 후처리입니다. 기본적으로 그 뒤 Alert가 닫힙니다.",
  },
  {
    name: "shouldCloseOnConfirm",
    typeLabel: "boolean",
    defaultValue: "true",
    description:
      "확인 클릭 뒤 현재 Alert를 자동으로 닫을지 제어합니다. false면 후속 popup을 이어서 띄우는 흐름을 만들 수 있습니다.",
  },
  {
    name: "className",
    typeLabel: "string",
    defaultValue: "undefined",
    description: "Alert 루트 스타일 확장용 클래스입니다.",
  },
  {
    name: "id",
    typeLabel: "string",
    defaultValue: "auto generated id",
    description:
      "특정 Alert를 직접 추적하거나 close(id) 대상으로 삼고 싶을 때 사용합니다.",
  },
];

export default function AlertOptionsTableSection() {
  return (
    <GuideSection
      label="Props Table"
      title="Alert options 한눈에 보기"
      description="useAlert().open()에 넘기는 AlertPopupOptions와 내부 Alert 고정 동작을 함께 정리했습니다."
    >
      <GuidePropsTable
        rows={alertOptionsRows}
        note={
          <>
            <span>
              페이지에서 직접 다루는 API는 <code>AlertPopupOptions</code>입니다.
              내부 <code>AlertProps</code>의 <code>open</code>, <code>onExited</code>,{" "}
              <code>isTopmost</code>는 PopupHost가 주입하는 runtime 값이라 보통
              직접 넘기지 않습니다.
            </span>
            <div className="guidePropsTable__noteActions">
              <GuideTypeTooltip
                label="AlertContentProps 보기"
                title="AlertContentProps"
                description="Alert가 본문과 버튼 텍스트로 직접 받는 내용 props입니다."
                code={ALERT_CONTENT_PROPS_CODE}
              />
              <GuideTypeTooltip
                label="AlertPopupOptions 보기"
                title="AlertPopupOptions"
                description="useAlert().open()에 넘기는 옵션 타입입니다."
                code={ALERT_POPUP_OPTIONS_CODE}
              />
              <GuideTypeTooltip
                label="AlertProps 보기"
                title="AlertProps"
                description="PopupHost가 실제 Alert 컴포넌트에 넘기는 내부 runtime 포함 타입입니다."
                code={ALERT_PROPS_CODE}
              />
            </div>
          </>
        }
      />
    </GuideSection>
  );
}
