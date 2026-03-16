import { GuideProp } from "@/components/Guide";

type PopupShellGuidePropProps = {
  popupName: "LayerPopup" | "BottomSheet" | "FullPopup";
};

export default function PopupShellGuideProp({
  popupName,
}: PopupShellGuidePropProps) {
  const runtimeTypeName = `${popupName}ComponentProps`;
  const supportsSize = popupName === "LayerPopup";
  const shellTypeLabel = supportsSize
    ? "title | icon | description | children | footer | className | panelClassName | bodyClassName | footerClassName | size | contentAlign | hasCloseButton | closeButtonLabel | shouldCloseOnBackdrop | shouldCloseOnEscape | dialogLabel | onClickClose"
    : "title | icon | description | children | footer | className | panelClassName | bodyClassName | footerClassName | contentAlign | hasCloseButton | closeButtonLabel | shouldCloseOnBackdrop | shouldCloseOnEscape | dialogLabel | onClickClose";
  const shellPropIntro = supportsSize
    ? "`title`, `footer`, `size`, `contentAlign`, `panelClassName` 같은 shell props를 직접 설정할 수 있습니다."
    : "`title`, `footer`, `contentAlign`, `panelClassName` 같은 shell props를 직접 설정할 수 있습니다. `size`는 LayerPopup 전용입니다.";
  const sizeExampleLine = supportsSize ? '\n      size="large"' : "";
  const layoutPropLabel = supportsSize
    ? "`size`, `contentAlign`, `className`, `panelClassName`, `bodyClassName`, `footerClassName`"
    : "`contentAlign`, `className`, `panelClassName`, `bodyClassName`, `footerClassName`";

  return (
    <GuideProp
      isWide
      name="PopupBase shell / design props"
      typeLabel={shellTypeLabel}
      description={
        <>
          - {popupName}은 `PopupBase` shell을 감싼 wrapper이므로, custom popup
          컴포넌트 안에서 {shellPropIntro}
          <br /> - 반대로 `id`, `open`, `onRequestClose`, `onExited`는 디자인
          props가 아니라 `PopupHost`가 runtime에 주입하는 인스턴스 제어용
          props입니다.
          <br /> - 그래서 보통 custom popup 컴포넌트에서는
          `...runtimeProps`를 펼친 뒤, 필요한 shell props만 추가 선언하는 패턴을
          사용합니다.
        </>
      }
    >
      <pre className="guideCodeBlock">{`function ExamplePopup(runtimeProps: ${runtimeTypeName}) {
  return (
    <${popupName}
      {...runtimeProps}
      title="팝업 제목"
      description="PopupBase shell props를 직접 제어하는 예시"
${sizeExampleLine}
      contentAlign="left"
      panelClassName="customPanel"
      bodyClassName="customBody"
      footerClassName="customFooter"
      hasCloseButton
      closeButtonLabel="닫기"
      shouldCloseOnBackdrop={false}
      shouldCloseOnEscape={true}
      dialogLabel="상세 설정 팝업"
      onClickClose={() => {
        console.log("close button clicked");
      }}
      footer={<button onClick={runtimeProps.onRequestClose}>닫기</button>}
    >
      <div>custom contents</div>
    </${popupName}>
  );
}`}</pre>

      <div className="guidePopupState">
        <strong className="guidePopupState__title">Shell prop groups</strong>
        <ul className="guidePopupState__list">
          <li className="guidePopupState__item">
            Header / content: `title`, `icon`, `description`, `children`,
            `footer`
          </li>
          <li className="guidePopupState__item">
            Layout / style: {layoutPropLabel}
          </li>
          <li className="guidePopupState__item">
            Close / accessibility: `hasCloseButton`, `closeButtonLabel`,
            `shouldCloseOnBackdrop`, `shouldCloseOnEscape`, `dialogLabel`,
            `onClickClose`
          </li>
          <li className="guidePopupState__item">
            Runtime from host: `id`, `open`, `onRequestClose`, `onExited`
          </li>
        </ul>
      </div>
    </GuideProp>
  );
}
