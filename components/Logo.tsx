"use client";

import Link from "next/link";
import { FaLaptopCode } from "react-icons/fa";

export const Logo = () => {
  return (
    <>
      <Link href="/" className="flex items-center justify-center gap-1">
        <FaLaptopCode className="text-accent size-8 inline-block ml-2" />
        <h1 className="text-4xl font-semibold">
          Osaze<span className="text-accent">.</span>
        </h1>
      </Link>
    </>
  );
};
