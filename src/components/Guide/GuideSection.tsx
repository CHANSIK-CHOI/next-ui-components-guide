import cn from "classnames";
import React from "react";

const nameBlock = "guideSection";

type GuideSectionProps = {
  title: string;
  description?: string | React.ReactNode;
  label?: string;
  children: React.ReactNode;
  className?: string;
};

export default function GuideSection({
  title,
  description,
  label,
  children,
  className,
}: GuideSectionProps) {
  return (
    <section className={cn(nameBlock, className)}>
      <div className={cn(`${nameBlock}__head`)}>
        {label && <span className={cn(`${nameBlock}__label`)}>{label}</span>}
        <h2 className={cn(`${nameBlock}__title`)}>{title}</h2>
        {description && (
          <p className={cn(`${nameBlock}__description`)}>{description}</p>
        )}
      </div>

      <div className={cn(`${nameBlock}__body`)}>{children}</div>
    </section>
  );
}
