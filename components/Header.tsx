import Link from "next/link";
import { DesktopNav } from "@/components/DesktopNav";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white ">
      <div className="container mx-auto flex items-center justify-between">
        {/*Logo*/}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Osaze<span className="text-accent">.</span>
          </h1>
        </Link>

        {/*Desktop Nav*/}
        <div className="hidden xl:flex items-center gap-8">
          <DesktopNav />
          <Link href="/contact">
            <Button>Hire Me</Button>
          </Link>
        </div>

        {/*Mobile Nav*/}
        <div className="xl:hidden">mobile nav</div>
      </div>
    </header>
  );
};
