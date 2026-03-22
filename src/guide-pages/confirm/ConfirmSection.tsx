import { Button } from "@/components";
import { GuideProp, GuideSection } from "@/components/Guide";
import { AttentionIcon, DelOutlineIcon } from "@/components/Icon";
import { useConfirm, usePopupStack } from "@/components/Popup";
import { memo } from "react";

const GUIDE_FIRST_CONFIRM_ID = "guide-confirm-first";
const GUIDE_SECOND_CONFIRM_ID = "guide-confirm-second";

const ConfirmOptionsGuideProp = memo(function ConfirmOptionsGuideProp() {
  const confirm = useConfirm();

  return (
    <GuideProp
      isWide
      name="title | description | icon | cancelText | confirmText | shouldCloseOnCancel | shouldCloseOnConfirm | onCancel | onConfirm | className"
      typeLabel="ReactNode | ReactNode | ReactNode | ReactNode | ReactNode | boolean | boolean | (() => void) | (() => void) | string"
      description={
        <>
          - Confirm은 Alert와 같은 고정형 popup 구조를 유지하면서, 취소와 확인
          두 액션을 함께 제공하는 패턴입니다.
          <br /> - `title`, `description`, `icon`은 Alert와 동일한 의미로
          사용하고, 버튼 텍스트와 cancel/confirm callback만 확장됩니다.
          <br /> - `shouldCloseOnCancel`, `shouldCloseOnConfirm`의 기본값은 모두
          `true`이고, `false`로 두면 버튼 클릭 이후에도 현재 Confirm을 유지한
          채 후속 popup을 열 수 있습니다.
          <br /> - `onCancel`, `onConfirm`은 각 버튼 클릭 시 실행된 뒤 popup이
          닫힙니다.
        </>
      }
    >
      <Button
        onClick={() =>
          confirm.open({
            title: "기본 Confirm",
            description:
              "취소와 확인 중 하나를 선택해야 하는 상황에 사용합니다.",
          })
        }
      >
        기본 Confirm 열기
      </Button>

      <Button
        color="secondary"
        onClick={() =>
          confirm.open({
            title: "삭제 확인",
            description: "삭제 작업은 되돌릴 수 없으므로 한 번 더 확인합니다.",
            icon: (
              <DelOutlineIcon
                width={28}
                height={28}
                color="var(--color-error)"
              />
            ),
            cancelText: "유지",
            confirmText: "삭제",
          })
        }
      >
        버튼 텍스트 변경 Confirm
      </Button>

      <Button
        variant="line"
        onClick={() =>
          confirm.open({
            title: "작성 취소",
            description: "변경 내용을 저장하지 않고 화면을 나갈지 확인합니다.",
            onCancel: () => {
              console.log("confirm cancelled");
            },
            onConfirm: () => {
              console.log("confirm accepted");
            },
          })
        }
      >
        cancel / confirm 액션 Confirm
      </Button>

      <Button
        color="primary"
        variant="line"
        onClick={() =>
          confirm.open({
            title: "다음 단계 확인",
            description:
              "확인을 눌러도 현재 Confirm을 닫지 않고 다음 Confirm을 이어서 띄웁니다.",
            confirmText: "다음 Confirm",
            shouldCloseOnConfirm: false,
            onConfirm: () => {
              confirm.open({
                title: "후속 Confirm",
                description: "이전 Confirm을 유지한 채 새 Confirm을 추가했습니다.",
              });
            },
          })
        }
      >
        닫지 않고 다음 Confirm 열기
      </Button>
    </GuideProp>
  );
});

const ConfirmBehaviorGuideProp = memo(function ConfirmBehaviorGuideProp() {
  return (
    <GuideProp
      isWide
      name="Confirm 고정 동작"
      typeLabel="hasCloseButton=false | shouldCloseOnBackdrop=false | shouldCloseOnEscape=false | shouldCloseOnCancel=true | shouldCloseOnConfirm=true"
      description={
        <>
          - Confirm도 Alert와 동일하게 닫기 버튼, backdrop click, `Escape`
          닫힘을 모두 막아두고 버튼 액션으로만 닫히게 합니다.
          <br /> - 취소 버튼은 `onCancel`, 확인 버튼은 `onConfirm` 흐름을
          담당합니다.
          <br /> - 현재 기본 레이아웃은 small size와 중앙 정렬을 유지하고,
          버튼 클릭 후 자동 닫힘 기본값은 둘 다 `true`입니다.
        </>
      }
    >
      <div className="guidePopupState">
        <strong className="guidePopupState__title">Confirm defaults</strong>
        <ul className="guidePopupState__list">
          <li className="guidePopupState__item">`hasCloseButton = false`</li>
          <li className="guidePopupState__item">
            `shouldCloseOnBackdrop = false`
          </li>
          <li className="guidePopupState__item">
            `shouldCloseOnEscape = false`
          </li>
          <li className="guidePopupState__item">
            `shouldCloseOnCancel = true`
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

const ConfirmAsyncGuideProp = memo(function ConfirmAsyncGuideProp() {
  return (
    <GuideProp
      isWide
      name="openAsync()"
      typeLabel="(options) => Promise<boolean>"
      description={
        <>
          - `openAsync()`는 Confirm 결과를 {"`Promise<boolean>`"}으로 돌려줘서
          `await` 다음 줄에서 바로 분기할 수 있습니다.
          <br /> - 확인 버튼은 `true`, 취소 버튼은 `false`를 반환합니다.
          <br /> - `close()`나 `closeAll()`처럼 코드로 닫아도 `false`로
          정리됩니다.
        </>
      }
    >
      <pre className="guideCodeBlock">{`const isConfirmed = await confirm.openAsync({
  title: "삭제 확인",
  description: "정말 삭제하시겠습니까?",
});

if (isConfirmed) {
  // 확인 이후 로직
}`}</pre>
    </GuideProp>
  );
});

const ConfirmIdGuideProp = memo(function ConfirmIdGuideProp() {
  return (
    <GuideProp
      isWide
      name="id"
      typeLabel="string | undefined"
      description={
        <>
          - `id`를 넘기지 않으면 내부에서 고유 id를 자동 생성합니다.
          <br /> - `open()`은 생성된 id를 반환하고, `openAsync()`도 내부적으로
          id를 만들거나 전달받은 id를 그대로 사용합니다.
          <br /> - 같은 `id`로 다시 열면 duplicate로 간주되어 에러가 발생합니다.
        </>
      }
    >
      <div className="guidePopupState">
        <strong className="guidePopupState__title">Confirm id rules</strong>
        <ul className="guidePopupState__list">
          <li className="guidePopupState__item">`id` 미지정: 자동 생성</li>
          <li className="guidePopupState__item">
            `open()` / `openAsync()` 모두 특정 id 지정 가능
          </li>
          <li className="guidePopupState__item">
            duplicate `id`: store에서 `throw`
          </li>
        </ul>
      </div>
    </GuideProp>
  );
});

const ConfirmHookGuideProp = memo(function ConfirmHookGuideProp() {
  const confirm = useConfirm();
  const demoConfirms = confirm.confirms.filter(
    ({ id }) => id === GUIDE_FIRST_CONFIRM_ID || id === GUIDE_SECOND_CONFIRM_ID,
  );
  const hasFirstDemoConfirm = demoConfirms.some(
    ({ id }) => id === GUIDE_FIRST_CONFIRM_ID,
  );
  const hasSecondDemoConfirm = demoConfirms.some(
    ({ id }) => id === GUIDE_SECOND_CONFIRM_ID,
  );

  return (
    <GuideProp
      isWide
      name="useConfirm()"
      typeLabel='{ open: (options) => string; openAsync: (options) => Promise<boolean>; close: (id?: string) => void; closeAll: () => void; confirms: Array<{ id: string; type: "confirm"; status: "open" | "closing" }>; }'
      description={
        <>
          - `useConfirm()`은 `Alert`와 같은 방식으로 어느 페이지에서든 Confirm을
          전역 호출할 수 있게 해줍니다.
          <br /> - `open()`은 confirm id를 반환하고, `close(id?)`는 특정 id 또는
          가장 마지막 Confirm을 닫습니다.
          <br /> - `openAsync()`는 `await`로 확인 결과를 받아서 다음 로직을
          이어갈 수 있고, 여러 개가 열린 상태에서는 `closeAll()`로 현재 열린
          Confirm만 한 번에 닫을 수 있습니다.
        </>
      }
    >
      <Button
        onClick={() => {
          if (!hasFirstDemoConfirm) {
            confirm.open({
              id: GUIDE_FIRST_CONFIRM_ID,
              title: "첫 번째 Confirm",
              description:
                "Confirm도 여러 개 쌓을 수 있고 마지막 항목 기준으로 닫을 수 있습니다.",
              icon: (
                <AttentionIcon
                  width={28}
                  height={28}
                  color="var(--color-warning)"
                />
              ),
            });
          }

          if (!hasSecondDemoConfirm) {
            confirm.open({
              id: GUIDE_SECOND_CONFIRM_ID,
              title: "두 번째 Confirm",
              description:
                "closeAll은 Confirm 타입만 닫도록 분리되어 있습니다.",
            });
          }
        }}
      >
        Confirm 두 개 열기
      </Button>

      <Button
        color="primary"
        variant="line"
        onClick={async () => {
          const isConfirmed = await confirm.openAsync({
            title: "비동기 Confirm",
            description:
              "확인을 누르면 true, 취소를 누르면 false를 반환합니다.",
          });

          console.log("confirm result:", isConfirmed);
        }}
      >
        await Confirm 열기
      </Button>
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
      description="전역 popup stack을 그대로 조회할 수 있어서 Alert와 Confirm이 함께 떠 있는 상태도 한 번에 확인할 수 있습니다."
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

export default function ConfirmSection() {
  return (
    <GuideSection
      label="Confirm"
      title="Confirm"
      description="Confirm은 취소와 확인 두 선택지를 제공하는 고정형 확인 popup입니다. 이 페이지에서는 실제로 쓰는 props와 useConfirm 호출 흐름을 기준으로 정리합니다."
    >
      <ConfirmOptionsGuideProp />
      <ConfirmBehaviorGuideProp />
      <ConfirmAsyncGuideProp />
      <ConfirmIdGuideProp />
      <ConfirmHookGuideProp />
      <StackGuideProp />
    </GuideSection>
  );
}
