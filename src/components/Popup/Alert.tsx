import cn from "classnames";
import { AttentionIcon } from "@/components/Icon";
import Button from "../Button/Button";
import ButtonGroup from "../Button/ButtonGroup";
import PopupBase from "./PopupBase";
import type { AlertProps } from "./PopupBase.types";

const nameBlock = "popupAlert";

export default function Alert({
  id,
  open,
  onExited,
  className,
  title,
  description,
  icon = <AttentionIcon width={28} height={28} />,
  confirmText = "확인",
  onConfirm,
}: AlertProps) {
  const footerContent = (
    <ButtonGroup className={cn(`${nameBlock}__actions`)}>
      <ButtonGroup.Item>
        <Button type="button" onClick={onConfirm}>
          {confirmText}
        </Button>
      </ButtonGroup.Item>
    </ButtonGroup>
  );

  return (
    <PopupBase
      id={id}
      open={open}
      onExited={onExited}
      className={cn(nameBlock, className)}
      title={title}
      description={description}
      footer={footerContent}
      showCloseButton={false}
      closeOnBackdrop={false}
      closeOnEscape={false}
      dialogLabel={title ? undefined : "Alert 팝업"}
    >
      {icon !== null && <div className={cn(`${nameBlock}__icon`)}>{icon}</div>}
    </PopupBase>
  );
}
