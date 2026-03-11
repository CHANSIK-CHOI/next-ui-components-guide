import cn from "classnames";
import Link from "next/link";
import React from "react";

import { HomeIcon } from "../Icon";
import { guideNavigation } from "./guideNavigation";

const nameBlock = "guideLayout";

type GuideLayoutProps = {
  title: string;
  description: string;
  currentPath?: string;
  children: React.ReactNode;
  className?: string;
};

export default function GuideLayout({
  title,
  description,
  currentPath = "",
  children,
  className,
}: GuideLayoutProps) {
  return (
    <div className={cn(nameBlock, className)}>
      <header className={cn(`${nameBlock}__header`)}>
        <div className={cn(`${nameBlock}__headerInner`)}>
          <Link
            href="/"
            className={cn(`${nameBlock}__homeButton`)}
            aria-label="Go to home"
          >
            <span className={cn(`${nameBlock}__homeIcon`)}>
              <HomeIcon />
            </span>
            <span className={cn(`${nameBlock}__homeText`)}>Home</span>
          </Link>

          <div className={cn(`${nameBlock}__headerContent`)}>
            <strong className={cn(`${nameBlock}__headerTitle`)}>
              Next UI Components Guide
            </strong>
          </div>
        </div>
      </header>

      <div className={cn(`${nameBlock}__content`)}>
        <aside className={cn(`${nameBlock}__aside`)}>
          <div className={cn(`${nameBlock}__asideCard`)}>
            <span className={cn(`${nameBlock}__asideLabel`)}>
              Component Pages
            </span>

            <nav
              className={cn(`${nameBlock}__nav`)}
              aria-label="Component guides"
            >
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

        <main className={cn(`${nameBlock}__main`)}>
          <section className={cn(`${nameBlock}__hero`)}>
            <span className={cn(`${nameBlock}__heroLabel`)}>
              Project Information
            </span>
            <h1 className={cn(`${nameBlock}__title`)}>{title}</h1>
            <p className={cn(`${nameBlock}__description`)}>{description}</p>
          </section>

          <div className={cn(`${nameBlock}__body`)}>{children}</div>
        </main>
      </div>
    </div>
  );
}
