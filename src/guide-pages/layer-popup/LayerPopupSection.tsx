import { Button, ButtonGroup } from "@/components";
import { GuideProp, GuideSection } from "@/components/Guide";
import {
  LayerPopup,
  type LayerPopupComponentProps,
  useLayerPopup,
  usePopupStack,
} from "@/components/Popup";
import { memo } from "react";
import PopupShellGuideProp from "../popup/PopupShellGuideProp";

const GUIDE_FIRST_LAYER_ID = "guide-layer-popup-first";
const GUIDE_SECOND_LAYER_ID = "guide-layer-popup-second";
const STACK_TYPE_LABEL =
  'Array<{ id: string; type: "alert" | "confirm" | "layerPopup" | "bottomSheet" | "fullPopup"; status: "open" | "closing" }>';

type SummaryItem = {
  label: string;
  value: string;
};

function LayerSummaryContent({
  badges,
  summaryItems,
}: {
  badges: string[];
  summaryItems: SummaryItem[];
}) {
  return (
    <div className="guidePopupDemo">
      <div className="guidePopupDemo__meta">
        {badges.map((badge) => (
          <span key={badge} className="guidePopupDemo__badge">
            {badge}
          </span>
        ))}
      </div>

      <div className="guidePopupDemo__grid">
        {summaryItems.map((item) => (
          <div key={item.label} className="guidePopupDemo__card">
            <span className="guidePopupDemo__cardLabel">{item.label}</span>
            <strong className="guidePopupDemo__cardTitle">{item.value}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

function MembershipCouponLayerPopup(runtimeProps: LayerPopupComponentProps) {
  return (
    <LayerPopup
      {...runtimeProps}
      title="Starter 플랜 혜택"
      description="계약 상세 보기 전에 현재 플랜에서 즉시 쓸 수 있는 혜택을 한 번에 확인합니다."
      footer={
        <ButtonGroup>
          <ButtonGroup.Item>
            <Button
              type="button"
              variant="line"
              onClick={runtimeProps.onRequestClose}
            >
              나중에
            </Button>
          </ButtonGroup.Item>
          <ButtonGroup.Item>
            <Button type="button" onClick={runtimeProps.onRequestClose}>
              혜택 적용
            </Button>
          </ButtonGroup.Item>
        </ButtonGroup>
      }
    >
      <LayerSummaryContent
        badges={["쿠폰 3장", "즉시 적용", "레이어 기본형"]}
        summaryItems={[
          { label: "이번 달 남은 쿠폰", value: "3장" },
          { label: "우선 지원 응답", value: "4시간 이내" },
          { label: "팀 공유 좌석", value: "최대 5명" },
          { label: "데이터 보관 기간", value: "180일" },
        ]}
      />
    </LayerPopup>
  );
}

function EnterpriseLayerPopup(runtimeProps: LayerPopupComponentProps) {
  return (
    <LayerPopup
      {...runtimeProps}
      title="Enterprise 상세 안내"
      description="비교표처럼 정보량이 많을 때는 large size로 확장해서 상세 정보를 보여줄 수 있습니다."
      size="large"
      footer={
        <ButtonGroup>
          <ButtonGroup.Item>
            <Button
              type="button"
              variant="line"
              onClick={runtimeProps.onRequestClose}
            >
              검토 보류
            </Button>
          </ButtonGroup.Item>
          <ButtonGroup.Item>
            <Button type="button" onClick={runtimeProps.onRequestClose}>
              견적 요청
            </Button>
          </ButtonGroup.Item>
        </ButtonGroup>
      }
    >
      <LayerSummaryContent
        badges={["large", "상세 비교", "계약 검토"]}
        summaryItems={[
          { label: "보안 리뷰", value: "전담 심사 제공" },
          { label: "조직 단위 권한", value: "무제한" },
          { label: "감사 로그 보관", value: "1년" },
          { label: "전담 CSM", value: "포함" },
        ]}
      />
    </LayerPopup>
  );
}

function CheckoutNoticeLayerPopup(runtimeProps: LayerPopupComponentProps) {
  return (
    <LayerPopup
      {...runtimeProps}
      title="결제 직전 안내"
      description="중간 입력을 잃지 않게 backdrop click으로 닫히지 않도록 고정한 케이스입니다."
      shouldCloseOnBackdrop={false}
      footer={
        <ButtonGroup>
          <ButtonGroup.Item>
            <Button
              type="button"
              variant="line"
              onClick={runtimeProps.onRequestClose}
            >
              취소
            </Button>
          </ButtonGroup.Item>
          <ButtonGroup.Item>
            <Button type="button" onClick={runtimeProps.onRequestClose}>
              계속 진행
            </Button>
          </ButtonGroup.Item>
        </ButtonGroup>
      }
    >
      <LayerSummaryContent
        badges={["backdrop 고정", "입력 보호"]}
        summaryItems={[
          { label: "결제 예정 금액", value: "₩129,000" },
          { label: "사용 시작일", value: "즉시" },
          { label: "자동 갱신", value: "설정 가능" },
          { label: "적용 예정 좌석", value: "12개" },
        ]}
      />
    </LayerPopup>
  );
}

function WorkspaceShareLayerPopup(runtimeProps: LayerPopupComponentProps) {
  return (
    <LayerPopup
      {...runtimeProps}
      title="Growth Squad 공유 설정"
      description="등록한 custom popup 컴포넌트 안에서 title, footer, children을 직접 조합하는 예시입니다."
      footer={
        <ButtonGroup>
          <ButtonGroup.Item>
            <Button
              type="button"
              variant="line"
              onClick={runtimeProps.onRequestClose}
            >
              취소
            </Button>
          </ButtonGroup.Item>
          <ButtonGroup.Item>
            <Button type="button" onClick={runtimeProps.onRequestClose}>
              공유 링크 만들기
            </Button>
          </ButtonGroup.Item>
        </ButtonGroup>
      }
    >
      <div className="guidePopupDemo">
        <div className="guidePopupDemo__card">
          <strong className="guidePopupDemo__sectionTitle">참여 멤버</strong>
          <ul className="guidePopupDemo__list">
            {["PM", "Designer", "Frontend", "Data Analyst"].map(
              (participant) => (
                <li key={participant} className="guidePopupDemo__listItem">
                  {participant}
                </li>
              ),
            )}
          </ul>
        </div>

        <div className="guidePopupDemo__card">
          <strong className="guidePopupDemo__sectionTitle">공유 채널</strong>
          <div className="guidePopupDemo__meta">
            {["Link", "Email", "Slack"].map((channel) => (
              <span key={channel} className="guidePopupDemo__badge">
                {channel}
              </span>
            ))}
          </div>
          <p className="guidePopupDemo__cardText">
            초대 전에 어떤 채널로 공유할지 popup 안에서 바로 정리합니다.
          </p>
        </div>
      </div>
    </LayerPopup>
  );
}

function FirstGuideLayerPopup(runtimeProps: LayerPopupComponentProps) {
  return (
    <LayerPopup
      {...runtimeProps}
      title="첫 번째 LayerPopup"
      description="LayerPopup도 alert/confirm처럼 stack에 순서대로 쌓입니다."
      footer={
        <Button type="button" onClick={runtimeProps.onRequestClose}>
          닫기
        </Button>
      }
    >
      <LayerSummaryContent
        badges={["stack", "first"]}
        summaryItems={[
          { label: "닫기 기준", value: "특정 id 또는 마지막 항목" },
          { label: "현재 상태", value: "open" },
        ]}
      />
    </LayerPopup>
  );
}

function SecondGuideLayerPopup(runtimeProps: LayerPopupComponentProps) {
  return (
    <LayerPopup
      {...runtimeProps}
      title="두 번째 LayerPopup"
      description="closeAll은 현재 열린 LayerPopup 타입만 한 번에 닫도록 분리됩니다."
      footer={
        <Button type="button" onClick={runtimeProps.onRequestClose}>
          닫기
        </Button>
      }
    >
      <LayerSummaryContent
        badges={["stack", "second"]}
        summaryItems={[
          { label: "최근 항목", value: "마지막 순서" },
          { label: "정리 범위", value: "현재 LayerPopup 전체" },
        ]}
      />
    </LayerPopup>
  );
}

const LayerPopupStructureGuideProp = memo(
  function LayerPopupStructureGuideProp() {
    const layerPopup = useLayerPopup();

    return (
      <GuideProp
        isWide
        name="title | children | footer | size | hasCloseButton | shouldCloseOnBackdrop | shouldCloseOnEscape | className"
        typeLabel="ReactNode | ReactNode | ReactNode | PopupSize | boolean | boolean | boolean | string"
        description={
          <>
            - LayerPopup은 Alert/Confirm처럼 옵션만으로 형태를 고정하는 팝업이
            아니라, popup 컴포넌트 안에서 `children`과 `footer`를 조합해서
            화면을 구성하는 일반적인 중앙 레이어 팝업입니다.
            <br /> - hook으로 넘기는 값은 `component`와 선택적인 `id` 정도만
            두고, 실제 콘텐츠와 상세 설정은 각 popup 컴포넌트 내부에서 직접
            정의합니다.
            <br /> - `size`, `hasCloseButton`, `shouldCloseOnBackdrop`,
            `shouldCloseOnEscape` 같은 shell 설정도 필요하면 해당 popup 컴포넌트
            안의 `LayerPopup`에 바로 선언합니다.
          </>
        }
      >
        <Button
          onClick={() =>
            layerPopup.open({ component: MembershipCouponLayerPopup })
          }
        >
          기본 LayerPopup 열기
        </Button>

        <Button
          color="primary"
          onClick={() => layerPopup.open({ component: EnterpriseLayerPopup })}
        >
          large LayerPopup 열기
        </Button>

        <Button
          variant="line"
          onClick={() =>
            layerPopup.open({ component: CheckoutNoticeLayerPopup })
          }
        >
          backdrop 고정 LayerPopup
        </Button>
      </GuideProp>
    );
  },
);

const LayerPopupRegistrationGuideProp = memo(
  function LayerPopupRegistrationGuideProp() {
    const layerPopup = useLayerPopup();

    return (
      <GuideProp
        isWide
        name="component | id"
        typeLabel="React.ComponentType<LayerPopupComponentProps> | string | undefined"
        description={
          <>
            - `useLayerPopup().open()`에는 실제로 렌더할 popup 컴포넌트 자체를
            `component`로 넘깁니다.
            <br /> - popup 내용에 필요한 데이터는 외부 props로 넘기지 않고, 해당
            컴포넌트 내부 로직에서 바로 구성합니다.
            <br /> - `id`, `open`, `onRequestClose`, `onExited`는 여전히
            `PopupHost`가 runtime에 주입합니다.
          </>
        }
      >
        <pre className="guideCodeBlock">{`layerPopup.open({
  id: "workspace-share-popup",
  component: WorkspaceShareLayerPopup,
});`}</pre>

        <Button
          onClick={() =>
            layerPopup.open({
              component: WorkspaceShareLayerPopup,
            })
          }
        >
          component 등록형 LayerPopup
        </Button>
      </GuideProp>
    );
  },
);

const LayerPopupHookGuideProp = memo(function LayerPopupHookGuideProp() {
  const layerPopup = useLayerPopup();
  const demoLayerPopups = layerPopup.layerPopups.filter(
    ({ id }) => id === GUIDE_FIRST_LAYER_ID || id === GUIDE_SECOND_LAYER_ID,
  );
  const hasFirstDemoLayer = demoLayerPopups.some(
    ({ id }) => id === GUIDE_FIRST_LAYER_ID,
  );
  const hasSecondDemoLayer = demoLayerPopups.some(
    ({ id }) => id === GUIDE_SECOND_LAYER_ID,
  );

  return (
    <GuideProp
      isWide
      name="useLayerPopup()"
      typeLabel='{ open: (options) => string; close: (id?: string) => void; closeAll: () => void; layerPopups: Array<{ id: string; type: "layerPopup"; status: "open" | "closing" }>; }'
      description={
        <>
          - `useLayerPopup()`은 등록형 LayerPopup을 전역 store에 쌓고, 마지막
          popup만 닫거나 현재 타입만 한 번에 닫을 수 있게 해줍니다.
          <br /> - `open()`은 생성된 id를 반환하고, `close(id?)`는 특정 id 또는
          마지막 LayerPopup을 닫습니다.
          <br /> - 이 예제처럼 두 개를 연 뒤에는 `closeAll()`로 현재 열린
          LayerPopup만 묶어서 정리할 수 있습니다.
        </>
      }
    >
      <Button
        onClick={() => {
          if (!hasFirstDemoLayer) {
            layerPopup.open({
              id: GUIDE_FIRST_LAYER_ID,
              component: FirstGuideLayerPopup,
            });
          }

          if (!hasSecondDemoLayer) {
            layerPopup.open({
              id: GUIDE_SECOND_LAYER_ID,
              component: SecondGuideLayerPopup,
            });
          }
        }}
      >
        LayerPopup 두 개 열기
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
      typeLabel={STACK_TYPE_LABEL}
      description="전역 popup stack을 그대로 조회할 수 있어서 LayerPopup이 다른 popup 타입과 함께 열려 있는 상태도 바로 확인할 수 있습니다."
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

export default function LayerPopupSection() {
  return (
    <GuideSection
      label="LayerPopup"
      title="LayerPopup"
      description="LayerPopup은 PopupBase를 기반으로 한 일반적인 중앙 레이어 팝업입니다. Alert/Confirm과 달리 popup 컴포넌트 자체를 등록하고, 콘텐츠는 각 popup 컴포넌트 내부에서 직접 구성합니다."
    >
      <LayerPopupStructureGuideProp />
      <PopupShellGuideProp popupName="LayerPopup" />
      <LayerPopupRegistrationGuideProp />
      <LayerPopupHookGuideProp />
      <StackGuideProp />
    </GuideSection>
  );
}
