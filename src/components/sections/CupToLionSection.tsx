import { Search, Shuffle, Package } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Reveal } from "@/components/motion/Reveal";
import { cupToLionContent } from "@/content/landing";

const STEP_ICONS: Record<string, LucideIcon> = {
  search: Search,
  shuffle: Shuffle,
  package: Package,
};

export function CupToLionSection() {
  return (
    <section id="cup-to-lion" className="min-h-screen scroll-mt-16 bg-background px-5 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="mb-4 block text-xs tracking-[0.3em] text-primary uppercase">{cupToLionContent.label}</span>
            <h2 className="text-3xl font-bold text-foreground dark:text-white md:text-5xl">
              {cupToLionContent.titleTop}{" "}
              <span className="text-primary">{cupToLionContent.titleAccent}</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground dark:text-gray-400 md:text-base">
              {cupToLionContent.descriptionTop}
            </p>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground dark:text-gray-500 md:text-base">
              {cupToLionContent.descriptionBottom}
            </p>
          </div>
        </Reveal>

        <div className="relative mx-auto grid max-w-6xl md:grid-cols-3">
          <div className="pointer-events-none absolute top-14 left-[16.66%] hidden h-[1px] w-[66.66%] bg-border dark:bg-white/10 md:block" />

          {cupToLionContent.steps.map((item) => {
            const Icon = STEP_ICONS[item.icon] || Package;

            return (
              <Reveal key={item.step}>
                <article className="relative bg-transparent p-6 text-center">
                  <div className="relative z-10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 bg-card" style={{ borderColor: item.color, color: item.color }}>
                    <Icon className="h-7 w-7" />
                  </div>
                  <p className="mb-2 text-sm font-semibold tracking-[0.2em] uppercase" style={{ color: item.color }}>{item.step}</p>
                  <h3 className="mb-3 text-lg font-bold text-foreground dark:text-white md:text-xl">{item.title}</h3>
                  <p className="text-sm font-medium leading-relaxed text-muted-foreground dark:text-gray-500">{item.desc}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
