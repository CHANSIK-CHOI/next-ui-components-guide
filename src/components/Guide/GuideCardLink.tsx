import cn from "classnames";
import Link from "next/link";

const nameBlock = "guideCardLink";

type GuideCardLinkProps = {
  href: string;
  title: string;
  description: string;
  label?: string;
  className?: string;
};

export default function GuideCardLink({
  href,
  title,
  description,
  label = "Guide",
  className,
}: GuideCardLinkProps) {
  return (
    <Link href={href} className={cn(nameBlock, className)}>
      <span className={cn(`${nameBlock}__label`)}>{label}</span>
      <strong className={cn(`${nameBlock}__title`)}>{title}</strong>
      <p className={cn(`${nameBlock}__description`)}>{description}</p>
      <span className={cn(`${nameBlock}__action`)}>Open guide</span>
    </Link>
  );
}
