"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

export interface HeaderNavigationProps {
  items: BlogCategory[];
}

export function HeaderNavigation({ items }: HeaderNavigationProps) {
  const pathname = usePathname();

  return items.map((navItem, idx) => (
    <li key={idx}>
      <Link
        className={clsx(
          "font-primary font-bold text-main-color text-xs lg:text-sm leading-none",
          navItem?.url === pathname &&
            "underline underline-offset-8 decoration-4 decoration-highlight-color"
        )}
        href={navItem?.url ?? ""}
      >
        {navItem?.title}
      </Link>
    </li>
  ));
}
