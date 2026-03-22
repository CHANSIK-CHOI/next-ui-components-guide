import { Button, ButtonGroup } from "@/components";
import { GuideProp, GuideSection } from "@/components/Guide";
import {
  BottomSheet,
  type BottomSheetComponentProps,
  useBottomSheet,
  usePopupStack,
} from "@/components/Popup";
import { memo } from "react";
import PopupShellGuideProp from "../popup/PopupShellGuideProp";

const GUIDE_FIRST_BOTTOM_SHEET_ID = "guide-bottom-sheet-first";
const GUIDE_SECOND_BOTTOM_SHEET_ID = "guide-bottom-sheet-second";
const STACK_TYPE_LABEL =
  'Array<{ id: string; type: "alert" | "confirm" | "layerPopup" | "bottomSheet" | "fullPopup"; status: "open" | "closing" }>';

function FilterBottomSheet(runtimeProps: BottomSheetComponentProps) {
  return (
    <BottomSheet
      {...runtimeProps}
      title="상품 필터"
      description="모바일 상품 리스트에서 현재 스크롤 위치를 유지한 채 필터만 빠르게 조정합니다."
      footer={
        <ButtonGroup>
          <ButtonGroup.Item>
            <Button
              type="button"
              variant="line"
              onClick={runtimeProps.onRequestClose}
            >
              초기화
            </Button>
          </ButtonGroup.Item>
          <ButtonGroup.Item>
            <Button type="button" onClick={runtimeProps.onRequestClose}>
              필터 적용
            </Button>
          </ButtonGroup.Item>
        </ButtonGroup>
      }
    >
      <div className="guidePopupDemo">
        <div className="guidePopupDemo__card">
          <strong className="guidePopupDemo__sectionTitle">
            현재 적용 필터
          </strong>
          <div className="guidePopupDemo__meta">
            {["무료배송", "재고 있음", "리뷰 4.5+"].map((filter) => (
              <span key={filter} className="guidePopupDemo__badge">
                {filter}
              </span>
            ))}
          </div>
        </div>

        <div className="guidePopupDemo__grid">
          {["오늘 도착", "신상품", "브랜드 할인", "세트 구성"].map((filter) => (
            <div key={filter} className="guidePopupDemo__card">
              <span className="guidePopupDemo__cardLabel">추천 옵션</span>
              <strong className="guidePopupDemo__cardTitle">{filter}</strong>
              <p className="guidePopupDemo__cardText">
                현재 화면을 유지한 채 빠르게 선택을 이어갈 수 있습니다.
              </p>
            </div>
          ))}
        </div>
      </div>
    </BottomSheet>
  );
}

function DeliverySlotBottomSheet(runtimeProps: BottomSheetComponentProps) {
  return (
    <BottomSheet
      {...runtimeProps}
      title="새벽 배송 수령 시간 선택"
      description="짧은 선택지를 빠르게 고를 때 BottomSheet 안에서 리스트와 하단 버튼을 함께 구성할 수 있습니다."
      hasCloseButton={false}
      footer={
        <Button type="button" onClick={runtimeProps.onRequestClose}>
          선택 완료
        </Button>
      }
    >
      <div className="guidePopupDemo">
        <div className="guidePopupDemo__card">
          <strong className="guidePopupDemo__sectionTitle">가능 시간</strong>
          <ul className="guidePopupDemo__list">
            {[
              "오늘 19:00 - 21:00",
              "내일 07:00 - 09:00",
              "내일 09:00 - 11:00",
            ].map((slot) => (
              <li key={slot} className="guidePopupDemo__listItem">
                {slot}
              </li>
            ))}
          </ul>
        </div>
        <p className="guidePopupDemo__intro">
          BottomSheet는 선택 후 원래 화면으로 바로 돌아가는 흐름에
          자연스럽습니다.
        </p>
      </div>
    </BottomSheet>
  );
}

function FixedBottomSheet(runtimeProps: BottomSheetComponentProps) {
  return (
    <BottomSheet
      {...runtimeProps}
      title="예약 옵션"
      description="중간 선택값을 잃지 않게 backdrop click으로 닫히지 않도록 고정한 케이스입니다."
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
              옵션 저장
            </Button>
          </ButtonGroup.Item>
        </ButtonGroup>
      }
    >
      <div className="guidePopupDemo">
        <div className="guidePopupDemo__card">
          <strong className="guidePopupDemo__sectionTitle">현재 선택</strong>
          <div className="guidePopupDemo__meta">
            {["주말 우선", "1인석", "창가"].map((item) => (
              <span key={item} className="guidePopupDemo__badge">
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="guidePopupDemo__grid">
          {["바 좌석", "전기 콘센트", "조용한 공간"].map((item) => (
            <div key={item} className="guidePopupDemo__card">
              <strong className="guidePopupDemo__cardTitle">{item}</strong>
              <p className="guidePopupDemo__cardText">
                시트 내부에서 바로 옵션 설명과 완료 버튼을 묶어 처리합니다.
              </p>
            </div>
          ))}
        </div>
      </div>
    </BottomSheet>
  );
}

function FirstGuideBottomSheet(runtimeProps: BottomSheetComponentProps) {
  return (
    <BottomSheet
      {...runtimeProps}
      title="첫 번째 BottomSheet"
      description="BottomSheet도 다른 popup 타입과 별개로 stack을 관리합니다."
      footer={
        <Button type="button" onClick={runtimeProps.onRequestClose}>
          닫기
        </Button>
      }
    >
      <div className="guidePopupDemo">
        <div className="guidePopupDemo__meta">
          <span className="guidePopupDemo__badge">stack</span>
          <span className="guidePopupDemo__badge">first</span>
        </div>
      </div>
    </BottomSheet>
  );
}

function SecondGuideBottomSheet(runtimeProps: BottomSheetComponentProps) {
  return (
    <BottomSheet
      {...runtimeProps}
      title="두 번째 BottomSheet"
      description="가장 최근 BottomSheet가 마지막 순서로 쌓이고, closeAll로 함께 닫을 수 있습니다."
      footer={
        <Button type="button" onClick={runtimeProps.onRequestClose}>
          닫기
        </Button>
      }
    >
      <div className="guidePopupDemo">
        <div className="guidePopupDemo__meta">
          <span className="guidePopupDemo__badge">stack</span>
          <span className="guidePopupDemo__badge">second</span>
        </div>
      </div>
    </BottomSheet>
  );
}

const BottomSheetStructureGuideProp = memo(
  function BottomSheetStructureGuideProp() {
    const bottomSheet = useBottomSheet();

    return (
      <GuideProp
        isWide
        name="title | children | footer | hasCloseButton | shouldCloseOnBackdrop | shouldCloseOnEscape | className"
        typeLabel="ReactNode | ReactNode | ReactNode | boolean | boolean | boolean | string"
        description={
          <>
            - BottomSheet는 `PopupBase`의 shell을 유지한 채 variant만 하단
            시트로 고정한 팝업입니다.
            <br /> - hook에서는 `component`만 등록하고, 필터 목록이나 선택지처럼
            실제 콘텐츠 데이터는 각 BottomSheet 컴포넌트 내부에서 직접
            구성합니다.
            <br /> - backdrop 닫힘과 close button 노출 여부도 개별 시트 컴포넌트
            안의 `BottomSheet`에 바로 선언합니다.
          </>
        }
      >
        <Button
          onClick={() => bottomSheet.open({ component: FilterBottomSheet })}
        >
          필터 BottomSheet 열기
        </Button>

        <Button
          color="primary"
          onClick={() =>
            bottomSheet.open({ component: DeliverySlotBottomSheet })
          }
        >
          선택형 BottomSheet 열기
        </Button>

        <Button
          variant="line"
          onClick={() => bottomSheet.open({ component: FixedBottomSheet })}
        >
          backdrop 고정 BottomSheet
        </Button>
      </GuideProp>
    );
  },
);

const BottomSheetRegistrationGuideProp = memo(
  function BottomSheetRegistrationGuideProp() {
    const bottomSheet = useBottomSheet();

    return (
      <GuideProp
        isWide
        name="component | id"
        typeLabel="React.ComponentType<BottomSheetComponentProps> | string | undefined"
        description={
          <>
            - BottomSheet도 LayerPopup과 동일하게 `component` 자체를 등록하는
            구조입니다.
            <br /> - hook 호출부에서는 어떤 시트를 띄울지만 결정하고, 시트 안의
            제목, 설명, 리스트, 버튼은 해당 popup 컴포넌트가 직접 가집니다.
          </>
        }
      >
        <pre className="guideCodeBlock">{`bottomSheet.open({
  id: "delivery-slot-bottom-sheet",
  component: DeliverySlotBottomSheet,
});`}</pre>

        <Button
          onClick={() =>
            bottomSheet.open({
              component: DeliverySlotBottomSheet,
            })
          }
        >
          component 등록형 BottomSheet
        </Button>
      </GuideProp>
    );
  },
);

const BottomSheetHookGuideProp = memo(function BottomSheetHookGuideProp() {
  const bottomSheet = useBottomSheet();
  const demoBottomSheets = bottomSheet.bottomSheets.filter(
    ({ id }) =>
      id === GUIDE_FIRST_BOTTOM_SHEET_ID || id === GUIDE_SECOND_BOTTOM_SHEET_ID,
  );
  const hasFirstDemoSheet = demoBottomSheets.some(
    ({ id }) => id === GUIDE_FIRST_BOTTOM_SHEET_ID,
  );
  const hasSecondDemoSheet = demoBottomSheets.some(
    ({ id }) => id === GUIDE_SECOND_BOTTOM_SHEET_ID,
  );
  const hasGuidePopupActions = hasFirstDemoSheet && hasSecondDemoSheet;
  const lastDemoSheetId = demoBottomSheets[demoBottomSheets.length - 1]?.id;

  return (
    <GuideProp
      isWide
      name="useBottomSheet()"
      typeLabel='{ open: (options) => string; close: (id?: string) => void; closeAll: () => void; bottomSheets: Array<{ id: string; type: "bottomSheet"; status: "open" | "closing" }>; }'
      description={
        <>
          - `useBottomSheet()`은 등록형 BottomSheet를 전역 store로 열고 닫는
          훅입니다.
          <br /> - `close(id?)`는 특정 시트 또는 가장 마지막 시트를 닫고,
          `closeAll()`은 현재 열린 BottomSheet 타입만 한 번에 닫습니다.
        </>
      }
    >
      <Button
        onClick={() => {
          if (!hasFirstDemoSheet) {
            bottomSheet.open({
              id: GUIDE_FIRST_BOTTOM_SHEET_ID,
              component: FirstGuideBottomSheet,
            });
          }

          if (!hasSecondDemoSheet) {
            bottomSheet.open({
              id: GUIDE_SECOND_BOTTOM_SHEET_ID,
              component: SecondGuideBottomSheet,
            });
          }
        }}
      >
        BottomSheet 두 개 열기
      </Button>

      {hasGuidePopupActions && (
        <div className="guidePopupActions">
          <ButtonGroup>
            {lastDemoSheetId && (
              <ButtonGroup.Item>
                <Button
                  color="primary"
                  variant="line"
                  onClick={() => bottomSheet.close(lastDemoSheetId)}
                >
                  마지막 BottomSheet 닫기
                </Button>
              </ButtonGroup.Item>
            )}

            <ButtonGroup.Item>
              <Button variant="line" onClick={() => bottomSheet.closeAll()}>
                BottomSheet 전체 닫기
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
      description="전역 popup stack을 그대로 조회할 수 있어서 BottomSheet가 다른 popup과 섞여 떠 있는 상태도 한 번에 확인할 수 있습니다."
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

export default function BottomSheetSection() {
  return (
    <GuideSection
      label="BottomSheet"
      title="BottomSheet"
      description="BottomSheet는 PopupBase를 기반으로 한 하단 시트형 팝업입니다. 필터, 짧은 선택지, 빠른 액션처럼 현재 화면을 유지한 채 즉시 반응해야 하는 흐름을 정리합니다."
    >
      <BottomSheetStructureGuideProp />
      <PopupShellGuideProp popupName="BottomSheet" />
      <BottomSheetRegistrationGuideProp />
      <BottomSheetHookGuideProp />
      <StackGuideProp />
    </GuideSection>
  );
}
