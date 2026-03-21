import { Button, ButtonGroup } from "@/components";
import { GuideProp, GuideSection } from "@/components/Guide";
import { AttentionIcon, CalendarIcon, DelOutlineIcon } from "@/components/Icon";
import { useAlert, usePopupStack } from "@/components/Popup";
import { memo } from "react";

const GUIDE_FIRST_ALERT_ID = "guide-alert-first";
const GUIDE_SECOND_ALERT_ID = "guide-alert-second";

const AlertOptionsGuideProp = memo(function AlertOptionsGuideProp() {
  const alert = useAlert();

  return (
    <GuideProp
      isWide
      name="title | description | icon | confirmText | shouldCloseOnConfirm | onConfirm | className"
      typeLabel="ReactNode | ReactNode | ReactNode | ReactNode | boolean | (() => void) | string"
      description={
        <>
          - Alert는 아이콘, 제목, 설명, 확인 버튼 텍스트만 바꿔서 쓰는 고정형
          팝업입니다.
          <br /> - `title`은 선택이고, `description`은 실제 안내 문구를 표현하는
          기본 텍스트입니다.
          <br /> - `icon`은 기본 경고 아이콘 대신 다른 시각 요소로 바꿀 수 있고,
          `className`은 Alert 루트 스타일을 확장할 때 사용합니다.
          <br /> - `shouldCloseOnConfirm`의 기본값은 `true`이고, `false`로 두면
          확인 버튼 클릭 이후에도 현재 Alert를 유지한 채 다른 popup을 이어서
          띄울 수 있습니다.
          <br /> - `onConfirm`을 전달하면 확인 버튼 클릭 시 원하는 후처리를
          실행하고, 기본적으로는 그 뒤 Alert가 닫힙니다.
        </>
      }
    >
      <Button
        onClick={() =>
          alert.open({
            title: "기본 Alert",
            description:
              "이 Alert는 전역 Zustand store에 등록되고 PopupHost가 portal로 렌더링합니다.",
          })
        }
      >
        기본 Alert 열기
      </Button>

      <Button
        color="primary"
        onClick={() =>
          alert.open({
            description:
              "title, icon 없이 description만으로도 Alert를 사용할 수 있습니다.",
            confirmText: "확인",
            icon: null,
          })
        }
      >
        타이틀, 아이콘 없는 Alert
      </Button>

      <Button
        variant="line"
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
        color="primary"
        variant="line"
        onClick={() =>
          alert.open({
            title: "연속 popup 예시",
            description:
              "확인을 눌러도 현재 Alert를 닫지 않고 다음 Alert를 이어서 띄웁니다.",
            confirmText: "다음 Alert 열기",
            shouldCloseOnConfirm: false,
            onConfirm: () => {
              alert.open({
                title: "다음 Alert",
                description:
                  "이전 Alert를 유지한 상태에서 새 Alert를 추가했습니다.",
                onConfirm: () => {
                  alert.closeAll();
                },
              });
            },
          })
        }
      >
        닫지 않고 다음 Alert 열기
      </Button>
    </GuideProp>
  );
});

const AlertIconGuideProp = memo(function AlertIconGuideProp() {
  const alert = useAlert();

  return (
    <GuideProp
      isWide
      name="icon"
      typeLabel="ReactNode | null"
      description={
        <>
          - `icon`에는 ReactNode를 그대로 전달할 수 있어서 Alert 목적에 맞는
          시각 표현을 얹을 수 있습니다.
          <br /> - 경고, 삭제 확인, 일정 안내, 서비스 안내처럼 같은 Alert 구조를
          유지한 채 아이콘만 바꿔서 사용할 수 있습니다.
        </>
      }
    >
      <Button
        onClick={() =>
          alert.open({
            title: "주의 안내",
            description: "기본 경고 아이콘을 사용하는 Alert 예시입니다.",
            icon: (
              <AttentionIcon
                width={28}
                height={28}
                color="var(--color-warning)"
              />
            ),
          })
        }
      >
        경고 아이콘 Alert
      </Button>

      <Button
        color="secondary"
        onClick={() =>
          alert.open({
            title: "삭제 확인",
            description:
              "삭제처럼 되돌리기 어려운 동작은 에러 톤 아이콘으로 더 분명하게 구분할 수 있습니다.",
            icon: (
              <DelOutlineIcon
                width={28}
                height={28}
                color="var(--color-error)"
              />
            ),
            confirmText: "삭제",
          })
        }
      >
        삭제 아이콘 Alert
      </Button>

      <Button
        variant="line"
        onClick={() =>
          alert.open({
            title: "예약 안내",
            description:
              "일정이나 예약 관련 안내는 중립적인 아이콘을 써도 같은 Alert 구조를 유지할 수 있습니다.",
            icon: <CalendarIcon width={28} height={28} />,
          })
        }
      >
        일정 아이콘 Alert
      </Button>
    </GuideProp>
  );
});

const AlertBehaviorGuideProp = memo(function AlertBehaviorGuideProp() {
  return (
    <GuideProp
      isWide
      name="Alert 고정 동작"
      typeLabel="hasCloseButton=false | shouldCloseOnBackdrop=false | shouldCloseOnEscape=false | shouldCloseOnConfirm=true"
      description={
        <>
          - Alert는 `PopupBase`를 그대로 노출하는 페이지가 아니라, 고정된 규칙을
          가진 Alert 패턴만 다룹니다.
          <br /> - 닫기 버튼은 없고, backdrop 클릭이나 `Escape`로 닫히지
          않습니다.
          <br /> - 현재 구조에서는 확인 버튼을 통한 닫기 흐름을 기본 동작으로
          사용하고, 확인 클릭 후 자동 닫힘 기본값은 `true`입니다.
        </>
      }
    >
      <div className="guidePopupState">
        <strong className="guidePopupState__title">Alert defaults</strong>
        <ul className="guidePopupState__list">
          <li className="guidePopupState__item">`hasCloseButton = false`</li>
          <li className="guidePopupState__item">
            `shouldCloseOnBackdrop = false`
          </li>
          <li className="guidePopupState__item">
            `shouldCloseOnEscape = false`
          </li>
          <li className="guidePopupState__item">
            `shouldCloseOnConfirm = true`
          </li>
          <li className="guidePopupState__item">`size = small`</li>
        </ul>
      </div>
    </GuideProp>
  );
});

// const AlertUsageGuideProp = memo(function AlertUsageGuideProp() {
//   return (
//     <GuideProp
//       isWide
//       name="Alert 사용 기준"
//       typeLabel="안내 / 완료 / 오류 / 정보"
//       description={
//         <>
//           - Alert는 사용자의 선택을 받기보다, 현재 상태를 알려주고 확인 한
//           번으로 마무리하는 경우에 적합합니다.
//           <br /> - 저장 완료, 오류 안내, 권한 안내, 필수 공지처럼 액션 분기보다
//           메시지 전달이 중요한 경우에 사용합니다.
//           <br /> - 사용자의 의사결정이 필요하면 Alert보다 Confirm을 사용하는
//           편이 더 자연스럽습니다.
//         </>
//       }
//     >
//       <div className="guidePopupState">
//         <strong className="guidePopupState__title">When to use Alert</strong>
//         <ul className="guidePopupState__list">
//           <li className="guidePopupState__item">
//             저장 완료, 처리 완료 같은 완료 알림
//           </li>
//           <li className="guidePopupState__item">
//             네트워크 오류, 권한 부족 같은 상태 안내
//           </li>
//           <li className="guidePopupState__item">
//             사용자가 선택하지 않아도 되는 단순 공지
//           </li>
//         </ul>
//       </div>
//     </GuideProp>
//   );
// });

const AlertIdGuideProp = memo(function AlertIdGuideProp() {
  return (
    <GuideProp
      isWide
      name="id"
      typeLabel="string | undefined"
      description={
        <>
          - `id`를 넘기지 않으면 내부에서 고유 id를 자동 생성합니다.
          <br /> - `open()`은 생성된 id를 반환하므로, 필요하면 `close(id)`로
          특정 Alert만 닫을 수 있습니다.
          <br /> - 같은 `id`로 다시 열면 duplicate로 간주되어 에러가 발생합니다.
        </>
      }
    >
      <div className="guidePopupState">
        <strong className="guidePopupState__title">Alert id rules</strong>
        <ul className="guidePopupState__list">
          <li className="guidePopupState__item">`id` 미지정: 자동 생성</li>
          <li className="guidePopupState__item">`open()` 반환값: 생성된 id</li>
          <li className="guidePopupState__item">
            duplicate `id`: store에서 `throw`
          </li>
        </ul>
      </div>
    </GuideProp>
  );
});

const AlertHookGuideProp = memo(function AlertHookGuideProp() {
  const alert = useAlert();
  const demoAlerts = alert.alerts.filter(
    ({ id }) => id === GUIDE_FIRST_ALERT_ID || id === GUIDE_SECOND_ALERT_ID,
  );
  const hasFirstDemoAlert = demoAlerts.some(
    ({ id }) => id === GUIDE_FIRST_ALERT_ID,
  );
  const hasSecondDemoAlert = demoAlerts.some(
    ({ id }) => id === GUIDE_SECOND_ALERT_ID,
  );
  const hasGuidePopupActions = hasFirstDemoAlert && hasSecondDemoAlert;
  const lastDemoAlertId = demoAlerts[demoAlerts.length - 1]?.id;

  return (
    <GuideProp
      isWide
      name="useAlert()"
      typeLabel='{ open: (options) => string; close: (id?: string) => void; closeAll: () => void; alerts: Array<{ id: string; type: "alert"; status: "open" | "closing" }>; }'
      description={
        <>
          - `PopupHost`를 앱 루트에 한 번만 두고, 어느 페이지에서든
          `useAlert()`로 Alert를 띄우고 닫는 구조입니다.
          <br /> - `open()`은 생성된 alert id를 반환하고, `close(id?)`는 특정 id
          또는 가장 마지막 Alert를 닫습니다.
          <br /> - `closeAll()`은 현재 열려 있는 Alert들을 한 번에 닫습니다.
        </>
      }
    >
      <Button
        onClick={() => {
          if (!hasFirstDemoAlert) {
            alert.open({
              id: GUIDE_FIRST_ALERT_ID,
              title: "첫 번째 Alert",
              description:
                "여러 개를 쌓아두고 closeAll로 한 번에 닫을 수 있습니다.",
            });
          }

          if (!hasSecondDemoAlert) {
            alert.open({
              id: GUIDE_SECOND_ALERT_ID,
              title: "두 번째 Alert",
              description: "가장 최근 Alert가 스택의 마지막에 쌓입니다.",
            });
          }
        }}
      >
        Alert 두 개 열기
      </Button>
      {hasGuidePopupActions && (
        <div className="guidePopupActions">
          <ButtonGroup>
            {lastDemoAlertId && (
              <ButtonGroup.Item>
                <Button
                  color="primary"
                  variant="line"
                  onClick={() => alert.close(lastDemoAlertId)}
                >
                  마지막 Alert 닫기
                </Button>
              </ButtonGroup.Item>
            )}

            <ButtonGroup.Item>
              <Button variant="line" onClick={() => alert.closeAll()}>
                Alert 전체 닫기
              </Button>
            </ButtonGroup.Item>
          </ButtonGroup>
        </div>
      )}
    </GuideProp>
  );
});

const StackGuideProp = memo(function StackGuideProp() {
  const popupStack = usePopupStack();
  const activePopupLabels = popupStack.map(
    (popup) => `${popup.type}:${popup.id} (${popup.status})`,
  );
  const hasActivePopups = activePopupLabels.length > 0;

  return (
    <GuideProp
      isWide
      name="usePopupStack()"
      typeLabel='Array<{ id: string; type: "alert" | "confirm"; status: "open" | "closing" }>'
      description="전역에서 현재 어떤 popup이 열려 있는지, 닫히는 중인지 Zustand selector로 바로 조회할 수 있습니다."
    >
      <div
        className={
          hasActivePopups
            ? "guidePopupState guidePopupState--floating"
            : "guidePopupState"
        }
      >
        <strong className="guidePopupState__title">Active popup stack</strong>
        {hasActivePopups ? (
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
      label="Alert"
      title="Alert"
      description="Alert는 전역 store와 PopupHost를 통해 어느 페이지에서든 호출할 수 있는 고정형 확인 팝업입니다. 이 페이지에서는 실제로 쓰는 props와 useAlert 호출 흐름을 기준으로 정리합니다."
    >
      <AlertOptionsGuideProp />
      <AlertIconGuideProp />
      <AlertBehaviorGuideProp />
      {/* <AlertUsageGuideProp /> */}
      <AlertIdGuideProp />
      <AlertHookGuideProp />
      <StackGuideProp />
    </GuideSection>
  );
}
