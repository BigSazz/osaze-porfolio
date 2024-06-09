"use client";

import CountUp from "react-countup";
import { cn } from "@/lib/utils";

const stats = [
  {
    num: 4,
    text: "+ Years of Experience",
  },
  {
    num: 10,
    text: "Projects Completed",
  },
  {
    num: 8,
    text: "Technologies Mastered",
  },
  {
    num: 4000,
    text: "+ Git Commits",
  },
];

export const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            return (
              <div
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                key={idx}
              >
                <CountUp
                  end={stat.num}
                  duration={5}
                  delay={2}
                  className="text-3xl xl:text-6xl font-extrabold"
                />
                <p
                  className={cn(
                    "text-white/70 leading-snug",
                    stat.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]",
                  )}
                >
                  {stat.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
