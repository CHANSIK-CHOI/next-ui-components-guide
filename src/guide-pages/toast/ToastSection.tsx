import { Button } from "@/components";
import { GuideProp, GuideSection } from "@/components/Guide";
import { useToast, useToastStack } from "@/components/Toast";
import { memo, useState } from "react";

const GUIDE_FIRST_TOAST_ID = "guide-toast-first";
const GUIDE_SECOND_TOAST_ID = "guide-toast-second";
const GUIDE_THIRD_TOAST_ID = "guide-toast-third";
const STACK_TYPE_LABEL =
  'Array<{ id: string; status: "open" | "closing"; tone: "default" | "error" }>';

const ToastOptionsGuideProp = memo(function ToastOptionsGuideProp() {
  const toast = useToast();
  const [callbackLogs, setCallbackLogs] = useState<string[]>([]);

  const appendCallbackLog = (nextLog: string) => {
    setCallbackLogs((previousLogs) => [nextLog, ...previousLogs].slice(0, 5));
  };

  return (
    <GuideProp
      isWide
      name="message | tone | duration | id | onOpenComplete | onCloseComplete | className"
      typeLabel="ReactNode | ToastTone | number | string | (() => void) | (() => void) | string"
      defaultValue='tone="default", duration=2400'
      description={
        <>
          - `message`는 toast에 표시할 실제 안내 문구이고, string뿐 아니라
          ReactNode도 그대로 넣을 수 있습니다.
          <br /> - `tone`은 현재 `default | error` 두 가지를 지원하고, error는
          더 강한 색과 <code>role=&quot;alert&quot;</code>로 동작합니다.
          <br /> - `duration`은 자동 닫힘 시간(ms)이고, `0` 이하로 주면 자동으로
          닫히지 않습니다.
          <br /> - `id`를 지정하면 특정 toast만 선택적으로 닫을 수 있고,
          `onOpenComplete` / `onCloseComplete`는 애니메이션 완료 시점
          콜백입니다.
        </>
      }
    >
      <Button
        onClick={() =>
          toast.open({
            message: "기본 Toast는 2.4초 뒤 자동으로 닫힙니다.",
          })
        }
      >
        기본 Toast 열기
      </Button>

      <Button
        color="secondary"
        onClick={() =>
          toast.open({
            message:
              "저장에 실패했습니다. 네트워크 상태를 확인한 뒤 다시 시도해 주세요.",
            tone: "error",
          })
        }
      >
        error Toast 열기
      </Button>

      <Button
        variant="line"
        onClick={() =>
          toast.open({
            message: "5초 동안 유지되는 Toast 예시입니다.",
            duration: 5000,
          })
        }
      >
        duration 변경 Toast
      </Button>

      <Button
        color="primary"
        variant="line"
        onClick={() =>
          toast.open({
            message: "열림/닫힘 콜백이 실행되면 아래 로그에 기록됩니다.",
            onOpenComplete: () => {
              appendCallbackLog("onOpenComplete 실행");
            },
            onCloseComplete: () => {
              appendCallbackLog("onCloseComplete 실행");
            },
          })
        }
      >
        callback Toast
      </Button>

      <div className="guidePopupState">
        <strong className="guidePopupState__title">Toast callback logs</strong>
        {callbackLogs.length > 0 ? (
          <ul className="guidePopupState__list">
            {callbackLogs.map((log, index) => (
              <li key={`${log}-${index}`} className="guidePopupState__item">
                {log}
              </li>
            ))}
          </ul>
        ) : (
          <p className="guidePopupState__empty">
            아직 실행된 callback이 없습니다.
          </p>
        )}
      </div>
    </GuideProp>
  );
});

const ToastHookGuideProp = memo(function ToastHookGuideProp() {
  const toast = useToast();

  return (
    <GuideProp
      isWide
      name="useToast()"
      typeLabel='{ open: (options) => string; close: (id?: string) => void; closeAll: () => void; toasts: Array<{ id: string; status: "open" | "closing"; tone: "default" | "error" }>; }'
      description={
        <>
          - `useToast()`는 modal popup처럼 component를 등록하지 않고, 옵션
          객체만 넘겨서 가벼운 feedback 메시지를 전역 stack에 추가합니다.
          <br /> - `open()`은 생성된 id를 반환하고, `close(id?)`는 특정 toast
          또는 마지막 toast를 닫습니다.
          <br /> - 여러 toast가 열린 상태에서는 `closeAll()`로 현재 열린 toast
          전체를 closing 상태로 바꿔서 한 번에 정리합니다.
        </>
      }
    >
      <pre className="guideCodeBlock">{`const toast = useToast();

toast.open({
  id: "profile-saved-toast",
  message: "프로필이 저장되었습니다.",
  tone: "default",
  duration: 2400,
});`}</pre>

      <Button
        onClick={() =>
          toast.open({
            id: GUIDE_FIRST_TOAST_ID,
            message: "첫 번째 Toast입니다.",
          })
        }
      >
        첫 번째 Toast 열기
      </Button>

      <Button
        color="primary"
        onClick={() =>
          toast.open({
            id: GUIDE_SECOND_TOAST_ID,
            message: "두 번째 Toast입니다.",
          })
        }
      >
        두 번째 Toast 열기
      </Button>

      <Button
        color="secondary"
        variant="line"
        onClick={() =>
          toast.open({
            id: GUIDE_THIRD_TOAST_ID,
            message: "세 번째 Toast는 error tone으로 추가됩니다.",
            tone: "error",
            duration: 3600,
          })
        }
      >
        세 번째 error Toast 열기
      </Button>
    </GuideProp>
  );
});

const ToastStackGuideProp = memo(function ToastStackGuideProp() {
  const toastStack = useToastStack();
  const activeToastLabels = toastStack.map(
    (toast) => `${toast.tone}:${toast.id} (${toast.status})`,
  );
  const hasActiveToasts = activeToastLabels.length > 0;

  return (
    <GuideProp
      isWide
      name="useToastStack()"
      typeLabel={STACK_TYPE_LABEL}
      description={
        <>
          - 현재 열린 toast stack을 그대로 조회할 수 있어서, 자동 닫힘과 수동
          닫힘이 섞인 상태도 바로 확인할 수 있습니다.
          <br /> - ToastHost는 이 stack 순서대로 렌더하고, CSS column 방향을
          이용해 화면 하단에서 위로 쌓이게 처리합니다.
        </>
      }
    >
      <div className="guidePopupState">
        <strong className="guidePopupState__title">Active toast stack</strong>
        {hasActiveToasts ? (
          <ul className="guidePopupState__list">
            {activeToastLabels.map((label) => (
              <li key={label} className="guidePopupState__item">
                {label}
              </li>
            ))}
          </ul>
        ) : (
          <p className="guidePopupState__empty">열린 toast가 없습니다.</p>
        )}
      </div>
    </GuideProp>
  );
});

const ToastBehaviorGuideProp = memo(function ToastBehaviorGuideProp() {
  return (
    <GuideProp
      isWide
      name="Toast 기본 규칙"
      typeLabel="non-modal | auto dismiss | stack upward | no focus steal"
      description={
        <>
          - Toast는 Alert/Confirm처럼 사용자의 응답을 기다리는 modal이 아니라,
          현재 작업을 끊지 않고 짧게 피드백만 전달하는 non-modal UI입니다.
          <br /> - backdrop, focus trap, `Escape` 닫기 같은 modal 동작은 없고,
          기본적으로는 지정한 시간 뒤 자동으로 사라집니다.
          <br /> - 여러 개가 동시에 열리면 화면 하단 기준으로 위로 쌓이고, 각각
          자신의 duration을 기준으로 독립적으로 닫힙니다.
        </>
      }
    >
      <div className="guidePopupState">
        <strong className="guidePopupState__title">Toast defaults</strong>
        <ul className="guidePopupState__list">
          <li className="guidePopupState__item">`tone = default`</li>
          <li className="guidePopupState__item">`duration = 2400`</li>
          <li className="guidePopupState__item">portal root: `#toast-root`</li>
          <li className="guidePopupState__item">
            stack direction: bottom to top
          </li>
          <li className="guidePopupState__item">
            focus 이동 없음 / background inert 없음
          </li>
        </ul>
      </div>
    </GuideProp>
  );
});

const ToastAccessibilityGuideProp = memo(
  function ToastAccessibilityGuideProp() {
    return (
      <GuideProp
        isWide
        name="접근성 규칙"
        typeLabel='tone="default" => role="status", tone="error" => role="alert"'
        description={
          <>
            - 기본 tone은 <code>role=&quot;status&quot;</code>와{" "}
            <code>aria-live=&quot;polite&quot;</code>로 동작해서 현재 작업
            흐름을 방해하지 않는 보조 알림으로 읽힙니다.
            <br /> - error tone은 <code>role=&quot;alert&quot;</code>와{" "}
            <code>aria-live=&quot;assertive&quot;</code>로 바뀌어서 실패나 주의
            메시지를 더 빠르게 전달합니다.
            <br /> - toast는 포커스를 가져오지 않기 때문에, 바로 확인이나 선택이
            필요한 내용은 Toast보다 Alert/Confirm이 더 적합합니다.
          </>
        }
      >
        <div className="guidePopupDemo">
          <div className="guidePopupDemo__card">
            <span className="guidePopupDemo__cardLabel">default</span>
            <strong className="guidePopupDemo__cardTitle">
              저장 완료, 복사 완료, 전송 완료
            </strong>
            <p className="guidePopupDemo__cardText">
              사용자의 현재 흐름을 유지하면서 짧게 안내할 때 적합합니다.
            </p>
          </div>

          <div className="guidePopupDemo__card">
            <span className="guidePopupDemo__cardLabel">error</span>
            <strong className="guidePopupDemo__cardTitle">
              저장 실패, 네트워크 오류, 업로드 실패
            </strong>
            <p className="guidePopupDemo__cardText">
              즉시 다시 시도하거나 상태를 확인해야 하는 실패 피드백에
              적합합니다.
            </p>
          </div>
        </div>
      </GuideProp>
    );
  },
);

export default function ToastSection() {
  return (
    <GuideSection
      label="Toast"
      title="Toast"
      description="Toast는 modal popup과 별도로 관리되는 전역 feedback UI입니다. 현재 화면을 막지 않고 짧은 상태 변화를 전달하며, 여러 개가 동시에 열리면 화면 하단에서 위로 차곡차곡 쌓입니다."
    >
      <ToastOptionsGuideProp />
      <ToastHookGuideProp />
      <ToastStackGuideProp />
      <ToastBehaviorGuideProp />
      <ToastAccessibilityGuideProp />
    </GuideSection>
  );
}
