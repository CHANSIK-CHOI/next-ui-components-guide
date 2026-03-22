import { Button, ButtonGroup } from "@/components";
import { GuideProp, GuideSection } from "@/components/Guide";
import {
  FullPopup,
  type FullPopupComponentProps,
  useFullPopup,
  usePopupStack,
} from "@/components/Popup";
import { memo } from "react";
import PopupShellGuideProp from "../popup/PopupShellGuideProp";

const GUIDE_FIRST_FULL_POPUP_ID = "guide-full-popup-first";
const GUIDE_SECOND_FULL_POPUP_ID = "guide-full-popup-second";
const STACK_TYPE_LABEL =
  'Array<{ id: string; type: "alert" | "confirm" | "layerPopup" | "bottomSheet" | "fullPopup"; status: "open" | "closing" }>';

type SummaryItem = {
  label: string;
  value: string;
};

function FullPopupSummary({
  progressLabel,
  summaryItems,
  checklist,
}: {
  progressLabel: string;
  summaryItems: SummaryItem[];
  checklist: string[];
}) {
  return (
    <div className="guidePopupDemo">
      <div className="guidePopupDemo__meta">
        <span className="guidePopupDemo__badge">{progressLabel}</span>
        <span className="guidePopupDemo__badge">full viewport</span>
        <span className="guidePopupDemo__badge">long form flow</span>
      </div>

      <div className="guidePopupDemo__grid">
        {summaryItems.map((item) => (
          <div key={item.label} className="guidePopupDemo__card">
            <span className="guidePopupDemo__cardLabel">{item.label}</span>
            <strong className="guidePopupDemo__cardTitle">{item.value}</strong>
          </div>
        ))}
      </div>

      <div className="guidePopupDemo__card">
        <strong className="guidePopupDemo__sectionTitle">
          이번 단계 체크리스트
        </strong>
        <ul className="guidePopupDemo__list">
          {checklist.map((item) => (
            <li key={item} className="guidePopupDemo__listItem">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function WorkspaceSetupFullPopup(runtimeProps: FullPopupComponentProps) {
  return (
    <FullPopup
      {...runtimeProps}
      title="워크스페이스 설정"
      description="프로젝트 생성 직후 필요한 설정을 전체 화면 흐름으로 순서대로 마무리합니다."
      footer={
        <ButtonGroup>
          <ButtonGroup.Item>
            <Button
              type="button"
              variant="line"
              onClick={runtimeProps.onRequestClose}
            >
              임시 저장
            </Button>
          </ButtonGroup.Item>
          <ButtonGroup.Item>
            <Button type="button" onClick={runtimeProps.onRequestClose}>
              다음 단계
            </Button>
          </ButtonGroup.Item>
        </ButtonGroup>
      }
    >
      <FullPopupSummary
        progressLabel="1 / 3 단계"
        summaryItems={[
          { label: "팀 이름", value: "Design System" },
          { label: "기본 권한", value: "Editor" },
          { label: "연동 도구", value: "Slack · GitHub" },
          { label: "알림 정책", value: "주간 요약" },
        ]}
        checklist={[
          "멤버 초대 범위 확인",
          "기본 라벨 세트 선택",
          "알림 채널 연결",
          "보관 기간 정책 검토",
        ]}
      />
    </FullPopup>
  );
}

function CampaignPreviewFullPopup(runtimeProps: FullPopupComponentProps) {
  return (
    <FullPopup
      {...runtimeProps}
      title="여름 프로모션 편집 흐름"
      description="FullPopup은 현재 화면 위에서 별도의 작업 화면을 여는 감각으로 사용할 수 있습니다."
      footer={
        <ButtonGroup>
          <ButtonGroup.Item>
            <Button
              type="button"
              variant="line"
              onClick={runtimeProps.onRequestClose}
            >
              초안 저장
            </Button>
          </ButtonGroup.Item>
          <ButtonGroup.Item>
            <Button type="button" onClick={runtimeProps.onRequestClose}>
              검수 요청
            </Button>
          </ButtonGroup.Item>
        </ButtonGroup>
      }
    >
      <div className="guidePopupDemo">
        <div className="guidePopupDemo__card">
          <span className="guidePopupDemo__cardLabel">Owner</span>
          <strong className="guidePopupDemo__cardTitle">Growth Marketer</strong>
          <p className="guidePopupDemo__cardText">
            라우팅을 바꾸지 않고도 편집 전용 화면처럼 구성할 수 있습니다.
          </p>
        </div>

        <div className="guidePopupDemo__card">
          <strong className="guidePopupDemo__sectionTitle">구성 섹션</strong>
          <ul className="guidePopupDemo__list">
            {[
              "캠페인 개요",
              "노출 채널",
              "메시지 블록",
              "승인 라인",
              "배포 일정",
            ].map((section) => (
              <li key={section} className="guidePopupDemo__listItem">
                {section}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </FullPopup>
  );
}

function FinalReviewFullPopup(runtimeProps: FullPopupComponentProps) {
  return (
    <FullPopup
      {...runtimeProps}
      title="승인 전 최종 검토"
      description="명시적인 하단 액션으로만 흐름을 통제하고 싶을 때는 close button을 감출 수 있습니다."
      hasCloseButton={false}
      footer={
        <ButtonGroup>
          <ButtonGroup.Item>
            <Button
              type="button"
              variant="line"
              onClick={runtimeProps.onRequestClose}
            >
              검토 중지
            </Button>
          </ButtonGroup.Item>
          <ButtonGroup.Item>
            <Button type="button" onClick={runtimeProps.onRequestClose}>
              검토 완료
            </Button>
          </ButtonGroup.Item>
        </ButtonGroup>
      }
    >
      <FullPopupSummary
        progressLabel="최종 단계"
        summaryItems={[
          { label: "검토 대상", value: "8개 섹션" },
          { label: "남은 승인자", value: "2명" },
          { label: "예상 소요", value: "3분" },
          { label: "배포 예정", value: "오늘 18:00" },
        ]}
        checklist={[
          "모든 링크 동작 확인",
          "메시지 톤앤매너 검토",
          "배포 시간 재확인",
        ]}
      />
    </FullPopup>
  );
}

function FirstGuideFullPopup(runtimeProps: FullPopupComponentProps) {
  return (
    <FullPopup
      {...runtimeProps}
      title="첫 번째 FullPopup"
      description="FullPopup도 다른 popup 타입과 분리된 stack으로 관리됩니다."
      footer={
        <Button type="button" onClick={runtimeProps.onRequestClose}>
          닫기
        </Button>
      }
    >
      <FullPopupSummary
        progressLabel="1 / 2 단계"
        summaryItems={[
          { label: "현재 상태", value: "open" },
          { label: "닫기 방식", value: "close(id?)" },
        ]}
        checklist={["현재 인스턴스 상태 확인", "다음 full popup과 순서 비교"]}
      />
    </FullPopup>
  );
}

function SecondGuideFullPopup(runtimeProps: FullPopupComponentProps) {
  return (
    <FullPopup
      {...runtimeProps}
      title="두 번째 FullPopup"
      description="마지막 항목 기준으로 닫거나, closeAll로 현재 full popup 타입만 한 번에 닫을 수 있습니다."
      footer={
        <Button type="button" onClick={runtimeProps.onRequestClose}>
          닫기
        </Button>
      }
    >
      <FullPopupSummary
        progressLabel="2 / 2 단계"
        summaryItems={[
          { label: "최근 항목", value: "마지막 순서" },
          { label: "전체 닫기", value: "closeAll()" },
        ]}
        checklist={["stack 순서 확인", "전체 닫기 동작 확인"]}
      />
    </FullPopup>
  );
}

const FullPopupStructureGuideProp = memo(
  function FullPopupStructureGuideProp() {
    const fullPopup = useFullPopup();

    return (
      <GuideProp
        isWide
        name="title | children | footer | hasCloseButton | shouldCloseOnEscape | className"
        typeLabel="ReactNode | ReactNode | ReactNode | boolean | boolean | string"
        description={
          <>
            - FullPopup은 `PopupBase`의 shell을 전체 화면 variant로 고정한
            팝업입니다.
            <br /> - hook에서는 어떤 작업 화면을 띄울지만 결정하고, 긴 편집
            흐름에 필요한 카드, 체크리스트, 액션은 각 FullPopup 컴포넌트
            내부에서 직접 구성합니다.
            <br /> - `hasCloseButton` 같은 shell 정책도 popup 컴포넌트 안의
            `FullPopup`에 바로 선언하는 방식이 더 자연스럽습니다.
          </>
        }
      >
        <Button
          onClick={() => fullPopup.open({ component: WorkspaceSetupFullPopup })}
        >
          기본 FullPopup 열기
        </Button>

        <Button
          color="primary"
          onClick={() =>
            fullPopup.open({ component: CampaignPreviewFullPopup })
          }
        >
          편집형 FullPopup 열기
        </Button>

        <Button
          variant="line"
          onClick={() => fullPopup.open({ component: FinalReviewFullPopup })}
        >
          close button 없는 FullPopup
        </Button>
      </GuideProp>
    );
  },
);

const FullPopupRegistrationGuideProp = memo(
  function FullPopupRegistrationGuideProp() {
    const fullPopup = useFullPopup();

    return (
      <GuideProp
        isWide
        name="component | id"
        typeLabel="React.ComponentType<FullPopupComponentProps> | string | undefined"
        description={
          <>
            - FullPopup도 custom popup 컴포넌트를 등록하는 구조입니다.
            <br /> - route를 바꾸지 않고도 별도의 작업 화면을 띄우는 방식이기
            때문에, hook 호출부에는 `component`만 두고 화면 내부 내용은 popup
            컴포넌트에서 직접 조합하는 편이 더 단순합니다.
          </>
        }
      >
        <pre className="guideCodeBlock">{`fullPopup.open({
  id: "campaign-preview-full-popup",
  component: CampaignPreviewFullPopup,
});`}</pre>

        <Button
          onClick={() =>
            fullPopup.open({
              component: CampaignPreviewFullPopup,
            })
          }
        >
          component 등록형 FullPopup
        </Button>
      </GuideProp>
    );
  },
);

const FullPopupHookGuideProp = memo(function FullPopupHookGuideProp() {
  const fullPopup = useFullPopup();
  const demoFullPopups = fullPopup.fullPopups.filter(
    ({ id }) =>
      id === GUIDE_FIRST_FULL_POPUP_ID || id === GUIDE_SECOND_FULL_POPUP_ID,
  );
  const hasFirstDemoFullPopup = demoFullPopups.some(
    ({ id }) => id === GUIDE_FIRST_FULL_POPUP_ID,
  );
  const hasSecondDemoFullPopup = demoFullPopups.some(
    ({ id }) => id === GUIDE_SECOND_FULL_POPUP_ID,
  );
  const hasGuidePopupActions = hasFirstDemoFullPopup && hasSecondDemoFullPopup;
  const lastDemoFullPopupId = demoFullPopups[demoFullPopups.length - 1]?.id;

  return (
    <GuideProp
      isWide
      name="useFullPopup()"
      typeLabel='{ open: (options) => string; close: (id?: string) => void; closeAll: () => void; fullPopups: Array<{ id: string; type: "fullPopup"; status: "open" | "closing" }>; }'
      description={
        <>
          - `useFullPopup()`은 전체 화면 popup을 전역으로 열고 닫는 훅입니다.
          <br /> - 여러 개를 순차적으로 stack에 쌓을 수 있고, `close(id?)`,
          `closeAll()`로 현재 full popup 흐름만 분리해서 제어할 수 있습니다.
        </>
      }
    >
      <Button
        onClick={() => {
          if (!hasFirstDemoFullPopup) {
            fullPopup.open({
              id: GUIDE_FIRST_FULL_POPUP_ID,
              component: FirstGuideFullPopup,
            });
          }

          if (!hasSecondDemoFullPopup) {
            fullPopup.open({
              id: GUIDE_SECOND_FULL_POPUP_ID,
              component: SecondGuideFullPopup,
            });
          }
        }}
      >
        FullPopup 두 개 열기
      </Button>

      {hasGuidePopupActions && (
        <div className="guidePopupActions">
          <ButtonGroup>
            {lastDemoFullPopupId && (
              <ButtonGroup.Item>
                <Button
                  color="primary"
                  variant="line"
                  onClick={() => fullPopup.close(lastDemoFullPopupId)}
                >
                  마지막 FullPopup 닫기
                </Button>
              </ButtonGroup.Item>
            )}

            <ButtonGroup.Item>
              <Button variant="line" onClick={() => fullPopup.closeAll()}>
                FullPopup 전체 닫기
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
      typeLabel={STACK_TYPE_LABEL}
      description="전역 popup stack을 그대로 조회할 수 있어서 FullPopup이 다른 popup 흐름과 함께 떠 있는 상태도 한 번에 확인할 수 있습니다."
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

export default function FullPopupSection() {
  return (
    <GuideSection
      label="FullPopup"
      title="FullPopup"
      description="FullPopup은 PopupBase를 기반으로 한 전체 화면 팝업입니다. 라우트 전환 없이도 긴 편집 흐름과 다단계 작업 화면을 구성할 수 있는 패턴을 정리합니다."
    >
      <FullPopupStructureGuideProp />
      <PopupShellGuideProp popupName="FullPopup" />
      <FullPopupRegistrationGuideProp />
      <FullPopupHookGuideProp />
      <StackGuideProp />
    </GuideSection>
  );
}
