import cn from "classnames";
import { memo } from "react";

const nameBlock = "guideLayout";

type GuideLayoutProps = {
  title: string;
  description: string;
  children: React.ReactNode;
  className?: string;
};

type GuideHeroProps = {
  title: string;
  description: string;
};

const GuideHero = memo(function GuideHero({
  title,
  description,
}: GuideHeroProps) {
  return (
    <section className={cn(`${nameBlock}__hero`)}>
      <span className={cn(`${nameBlock}__heroLabel`)}>Project Information</span>
      <h1 className={cn(`${nameBlock}__title`)}>{title}</h1>
      <p className={cn(`${nameBlock}__description`)}>{description}</p>
    </section>
  );
});

export default function GuideLayout({
  title,
  description,
  children,
  className,
}: GuideLayoutProps) {
  return (
    <main className={cn(`${nameBlock}__main`, className)}>
      <GuideHero title={title} description={description} />

      <div className={cn(`${nameBlock}__body`)}>{children}</div>
    </main>
  );
}
