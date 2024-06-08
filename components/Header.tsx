import Link from "next/link";

import { Button } from "@/components/ui/button";

// Navigation
import { DesktopNav } from "@/components/DesktopNav";
import { MobileNav } from "@/components/MobileNav";
import { Logo } from "@/components/Logo";

export const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white ">
      <div className="container mx-auto flex items-center justify-between">
        {/*Logo*/}
        <Logo />

        {/*Desktop Nav*/}
        <div className="hidden xl:flex items-center gap-8">
          <DesktopNav />
          <Link href="/contact">
            <Button>Hire Me</Button>
          </Link>
        </div>

        {/*Mobile Nav*/}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};
