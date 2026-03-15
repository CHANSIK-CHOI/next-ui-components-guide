import { Button } from "@/components";
import { GuideProp, GuideSection } from "@/components/Guide";
import { useAlert, usePopupStack } from "@/components/Popup";
import { memo } from "react";

const HookGuideProp = memo(function HookGuideProp() {
  const alert = useAlert();

  return (
    <GuideProp
      isWide
      name="useAlert().open(options)"
      typeLabel="({ title, description, icon, confirmText, onConfirm, className }) => string"
      description={
        <>
          - `PopupProvider`를 앱 루트에 한 번만 두고, 어느 페이지에서든
          `useAlert().open()`으로 Alert를 띄우는 구조입니다.
          <br /> - `open()`은 생성된 popup id를 반환하고, `close(id?)`는 특정 id
          또는 가장 마지막 Alert를 닫습니다.
          <br /> - 현재는 Alert만 연결했지만 같은 store/provider 구조로 Confirm,
          LayerPopup, BottomSheet, FullPopup을 같은 방식으로 확장할 수 있습니다.
        </>
      }
    >
      <Button
        onClick={() =>
          alert.open({
            title: "기본 Alert",
            description:
              "이 Alert는 전역 Zustand store에 등록되고 PopupProvider가 portal로 렌더링합니다.",
          })
        }
      >
        기본 Alert 열기
      </Button>

      <Button
        color="primary"
        onClick={() =>
          alert.open({
            title: "커스텀 액션",
            description: "확인 버튼을 누르면 console에 로그를 남기고 닫힙니다.",
            confirmText: "로그 남기기",
            onConfirm: () => {
              console.log("alert confirmed");
            },
          })
        }
      >
        확인 액션이 있는 Alert
      </Button>

      <Button
        variant="line"
        onClick={() =>
          alert.open({
            title: "중첩 Alert",
            description:
              "전역 스택에 쌓이는 구조라 여러 개가 동시에 열려 있는 상태도 추적할 수 있습니다.",
          })
        }
      >
        Alert 하나 더 열기
      </Button>
    </GuideProp>
  );
});

const StackGuideProp = memo(function StackGuideProp() {
  const popupStack = usePopupStack();
  const activePopupLabels = popupStack.map(
    (popup) => `${popup.type}:${popup.id} (${popup.status})`,
  );

  return (
    <GuideProp
      isWide
      name="usePopupStack()"
      typeLabel='Array<{ id: string; type: "alert"; status: "open" | "closing" }>'
      description="전역에서 현재 어떤 팝업이 열려 있는지, 닫히는 중인지 Zustand selector로 바로 조회할 수 있습니다."
    >
      <div className="guidePopupState">
        <strong className="guidePopupState__title">Active popup stack</strong>
        {activePopupLabels.length > 0 ? (
          <ul className="guidePopupState__list">
            {activePopupLabels.map((label) => (
              <li key={label} className="guidePopupState__item">
                {label}
              </li>
            ))}
          </ul>
        ) : (
          <p className="guidePopupState__empty">열린 팝업이 없습니다.</p>
        )}
      </div>
    </GuideProp>
  );
});

export default function AlertSection() {
  return (
    <GuideSection
      label="Popup"
      title="PopupBase + Alert"
      description="PopupBase는 공통 shell 역할만 맡고, Alert는 그 위에 얇은 wrapper로 올렸습니다. 전역 상태는 Zustand로 관리하고, PopupProvider는 portal 렌더링과 scroll lock만 담당합니다."
    >
      <HookGuideProp />
      <StackGuideProp />
    </GuideSection>
  );
}
