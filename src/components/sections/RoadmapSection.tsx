import { Reveal } from "@/components/motion/Reveal";
import { Flag, TrendingUp, Lightbulb, Rocket, Globe } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { roadmapContent } from "@/content/landing";

const PHASE_ICONS: Record<string, LucideIcon> = {
  "The Beginning": Flag,
  "Growth": TrendingUp,
  "Ideathon": Lightbulb,
  "Hackathon": Rocket,
  "Expansion": Globe,
};

export function RoadmapSection() {
  return (
    <section id="roadmap" className="relative scroll-mt-16 px-5 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <div className="relative z-10 mb-16 text-center">
            <span className="mb-4 block text-xs tracking-[0.3em] text-[#FF4D00] uppercase">
              {roadmapContent.label}
            </span>
            <h2 className="text-3xl text-foreground dark:text-white md:text-5xl">
              {roadmapContent.titleTop}{" "}
              <span className="bg-gradient-to-r from-[#FF4D00] to-[#FF8C00] bg-clip-text text-transparent">
                {roadmapContent.titleAccent}
              </span>
            </h2>
          </div>
        </Reveal>

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute top-0 bottom-0 left-4 w-px bg-gradient-to-b from-transparent via-border to-transparent dark:via-white/10 md:hidden" />

          <div className="relative z-10 space-y-8">
            {roadmapContent.items.map((item, index) => (
              <Reveal key={`${item.period}-${item.title}`}>
                <article
                  className={`relative flex items-start gap-6 md:gap-0 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                >
                  {/* Desktop Connection Line SVG */}
                  {index < roadmapContent.items.length - 1 && (
                    <div className="pointer-events-none absolute top-8 -bottom-8 left-0 z-0 hidden w-full md:block">
                      <svg
                        className="h-full w-full text-foreground/35 dark:text-white/18"
                        viewBox="0 0 832 100"
                        preserveAspectRatio="none"
                        style={{ overflow: "visible" }}
                      >
                        <path
                          d={
                            index % 2 === 0
                              ? "M 416 0 C 556 20, 318 80, 416 100"
                              : "M 416 0 C 256 20, 528 80, 416 100"
                          }
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeDasharray={index % 2 === 0 ? "8 5 3 7" : "5 6 8 4"}
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  )}

                  <div
                    className={`pl-10 md:w-[calc(50%-2rem)] md:pl-0 ${index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"
                      }`}
                  >
                    <span
                      className="mb-1 block text-xs tracking-[0.2em] uppercase"
                      style={{ color: item.color }}
                    >
                      {item.period}
                    </span>
                    <h3 className="mb-3 text-lg text-foreground dark:text-white md:text-xl">{item.title}</h3>
                    <ul className="space-y-1.5">
                      {item.items.map((desc) => (
                        <li
                          key={desc}
                          className="flex items-center gap-2 text-xs text-muted-foreground dark:text-gray-500"
                          style={{
                            justifyContent: index % 2 === 0 ? "flex-end" : "flex-start",
                          }}
                        >
                          <span className="hidden h-1 w-1 shrink-0 rounded-full bg-muted-foreground dark:bg-gray-600 md:inline" />
                          <span>{desc}</span>
                          <span className="order-first h-1 w-1 shrink-0 rounded-full bg-muted-foreground dark:bg-gray-600 md:hidden" />
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="absolute top-0 left-0 z-10 md:left-1/2 md:-translate-x-1/2">
                    <div
                      className="flex h-8 w-8 items-center justify-center rounded-full border-2 bg-card"
                      style={{
                        borderColor: item.color,
                        color: item.color,
                      }}
                    >
                      {(() => {
                        const Icon = PHASE_ICONS[item.title] || Flag;
                        return <Icon className="h-4 w-4" />;
                      })()}
                    </div>
                  </div>

                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
