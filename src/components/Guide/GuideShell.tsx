import cn from "classnames";
import Link from "next/link";
import { memo } from "react";

import { GitHubIcon, HomeIcon } from "../Icon";
import { guideNavigation } from "./guideNavigation";

const nameBlock = "guideLayout";

type GuideShellProps = {
  currentPath: string;
  children: React.ReactNode;
};

const GuideHeader = memo(function GuideHeader() {
  return (
    <header className={cn(`${nameBlock}__header`)}>
      <div className={cn(`${nameBlock}__headerInner`)}>
        <div className={cn(`${nameBlock}__headerActions`)}>
          <Link
            href="/"
            className={cn(`${nameBlock}__actionButton`)}
            aria-label="Go to home"
          >
            <span className={cn(`${nameBlock}__actionIcon`)}>
              <HomeIcon />
            </span>
            <span className={cn(`${nameBlock}__actionText`)}>Home</span>
          </Link>

          <a
            href="https://github.com/CHANSIK-CHOI/next-ui-components-guide"
            target="_blank"
            rel="noreferrer"
            className={cn(`${nameBlock}__actionButton`)}
            aria-label="Open GitHub repository"
          >
            <span className={cn(`${nameBlock}__actionIcon`)}>
              <GitHubIcon />
            </span>
            <span className={cn(`${nameBlock}__actionText`)}>GitHub</span>
          </a>
        </div>

        <div className={cn(`${nameBlock}__headerContent`)}>
          <strong className={cn(`${nameBlock}__headerTitle`)}>
            Next UI Components Guide
          </strong>
        </div>
      </div>
    </header>
  );
});

type GuideAsideProps = {
  currentPath: string;
};

const GuideAside = memo(function GuideAside({ currentPath }: GuideAsideProps) {
  return (
    <aside className={cn(`${nameBlock}__aside`)}>
      <div className={cn(`${nameBlock}__asideCard`)}>
        <span className={cn(`${nameBlock}__asideLabel`)}>Component Pages</span>

        <nav className={cn(`${nameBlock}__nav`)} aria-label="Component guides">
          {guideNavigation.map((item) => {
            const isCurrent = currentPath === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(`${nameBlock}__navLink`, {
                  [`${nameBlock}__navLink--current`]: isCurrent,
                })}
                aria-current={isCurrent ? "page" : undefined}
              >
                <strong className={cn(`${nameBlock}__navTitle`)}>
                  {item.label}
                </strong>
                <span className={cn(`${nameBlock}__navDescription`)}>
                  {item.description}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
});

export default function GuideShell({
  currentPath,
  children,
}: GuideShellProps) {
  return (
    <div className={cn(nameBlock)}>
      <GuideHeader />

      <div className={cn(`${nameBlock}__content`)}>
        <GuideAside currentPath={currentPath} />
        {children}
      </div>
    </div>
  );
}
