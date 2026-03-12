import React from "react";
import cn from "classnames";
import {
  CalendarIcon,
  DelIcon,
  ShowPwIcon,
  HidePwIcon,
  SearchIcon,
} from "@/components/Icon";

type TextfieldBtnProps = {
  icon: "clear" | "showPw" | "hidePw" | "search" | "date";
  title: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
};

const nameBlock = "textfield";
export default function TextfieldBtn({
  icon,
  title,
  className,
  onClick,
  disabled,
}: TextfieldBtnProps) {
  const iconMap = {
    clear: {
      iconComponent: <DelIcon />,
    },
    showPw: {
      iconComponent: <ShowPwIcon />,
    },
    hidePw: {
      iconComponent: <HidePwIcon />,
    },
    search: {
      iconComponent: <SearchIcon />,
    },
    date: {
      iconComponent: <CalendarIcon />,
    },
  };

  const { iconComponent } = iconMap[icon];

  return (
    <button
      type="button"
      className={cn(`${nameBlock}__btn`, className)}
      disabled={disabled}
      onMouseDown={(e) => e.preventDefault()}
      onClick={onClick}
    >
      {iconComponent}
      <span className="a11y-hidden">{title}</span>
    </button>
  );
}
