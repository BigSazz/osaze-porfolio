"use client";

import Link from "next/link";

export const Logo = () => {
  return (
    <>
      <Link href="/public">
        <h1 className="text-4xl font-semibold">
          Osaze<span className="text-accent">.</span>
        </h1>
      </Link>
    </>
  );
};
