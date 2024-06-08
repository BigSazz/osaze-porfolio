"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Resume",
    path: "/resume",
  },
  {
    name: "Work",
    path: "/work",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export const DesktopNav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {links.map((link, idx) => {
        return (
          <Link
            key={idx}
            href={link.path}
            className={cn(
              "capitalize font-medium hover:text-accent transition-all",
              {
                "text-accent border-b-2 border-accent": link.path === pathname,
              },
            )}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};
