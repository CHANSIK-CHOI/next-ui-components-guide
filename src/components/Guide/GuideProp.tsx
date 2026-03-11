import cn from "classnames";
import React from "react";

const nameBlock = "guideProp";

type GuidePropProps = {
  name: string;
  typeLabel: string;
  defaultValue?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
};

export default function GuideProp({
  name,
  typeLabel,
  defaultValue,
  description,
  children,
  className,
}: GuidePropProps) {
  const previewItems = React.Children.toArray(children);

  return (
    <section className={cn(nameBlock, className)}>
      <div className={cn(`${nameBlock}__head`)}>
        <span className={cn(`${nameBlock}__label`)}>Prop</span>

        <div className={cn(`${nameBlock}__titleRow`)}>
          <h3 className={cn(`${nameBlock}__title`)}>{name}</h3>
          <code className={cn(`${nameBlock}__type`)}>{typeLabel}</code>
        </div>

        {defaultValue && (
          <span className={cn(`${nameBlock}__default`)}>
            default: {defaultValue}
          </span>
        )}

        {description && (
          <p className={cn(`${nameBlock}__description`)}>{description}</p>
        )}
      </div>

      <div className={cn(`${nameBlock}__preview`)}>
        {previewItems.map((child, index) => (
          <div key={index} className={cn(`${nameBlock}__previewItem`)}>
            {child}
          </div>
        ))}
      </div>
    </section>
  );
}
