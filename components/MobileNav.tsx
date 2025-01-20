"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "@/components/Logo";
import { cn } from "@/lib/utils";
import { useState } from "react";

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
  // {
  //   name: "Work",
  //   path: "/work",
  // },
  {
    name: "Contact",
    path: "/contact",
  },
];

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const onClick = (href: string) => {
    router.push(href);
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger>
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/*Logo*/}
        <div className="mt-32 mb-40 text-center text-2xl">
          <Logo />
        </div>

        {/*Nav*/}
        <nav className="flex flex-col items-center justify-center gap-8">
          {links.map((link, idx) => {
            return (
              <div
                key={idx}
                onClick={() => onClick(link.path)}
                className={cn(
                  "capitalize font-medium hover:text-accent transition-all cursor-pointer",
                  {
                    "text-accent border-b-2 border-accent":
                      link.path === pathname,
                  },
                )}
              >
                {link.name}
              </div>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};
