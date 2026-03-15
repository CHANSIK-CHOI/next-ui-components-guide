import cn from "classnames";
import { AttentionIcon } from "@/components/Icon";
import Button from "../Button/Button";
import ButtonGroup from "../Button/ButtonGroup";
import PopupBase from "./PopupBase";
import type { ConfirmProps } from "./PopupBase.types";

const nameBlock = "popupConfirm";

export default function Confirm({
  id,
  open,
  onExited,
  className,
  title,
  description,
  icon = <AttentionIcon width={28} height={28} />,
  cancelText = "취소",
  confirmText = "확인",
  onCancel,
  onConfirm,
}: ConfirmProps) {
  const footerContent = (
    <ButtonGroup className={cn(`${nameBlock}__actions`)}>
      <ButtonGroup.Item>
        <Button type="button" variant="line" size="medium" onClick={onCancel}>
          {cancelText}
        </Button>
      </ButtonGroup.Item>
      <ButtonGroup.Item>
        <Button type="button" size="medium" onClick={onConfirm}>
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
      hasCloseButton={false}
      shouldCloseOnBackdrop={false}
      shouldCloseOnEscape={false}
      dialogLabel={title ? undefined : "Confirm 팝업"}
      size="small"
    >
      {icon !== null && <div className={cn(`${nameBlock}__icon`)}>{icon}</div>}
    </PopupBase>
  );
}
