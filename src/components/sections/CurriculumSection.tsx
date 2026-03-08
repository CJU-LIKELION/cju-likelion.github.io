import { Reveal } from "@/components/motion/Reveal";
import { Code, LayoutTemplate, Server, Database, PenTool, Bot } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { curriculumContent } from "@/content/landing";

const TRACK_ICONS: Record<string, LucideIcon> = {
  "HTML/CSS & JS": Code,
  "React & Frontend": LayoutTemplate,
  "Python & Django": Server,
  "Database & API": Database,
  "UI/UX Design": PenTool,
  "AI Convergence": Bot,
};

export function CurriculumSection() {
  return (
    <section id="class" className="min-h-screen bg-background dark:bg-[#0A0A0A] px-5 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-16 text-center">
            <span className="mb-4 block text-xs tracking-[0.3em] text-[#FF4D00] uppercase">
              {curriculumContent.label}
            </span>
            <h2 className="text-3xl font-bold text-foreground dark:text-white md:text-5xl">
              {curriculumContent.titleTop}{" "}
              <span className="text-[#FF4D00]">
                {curriculumContent.titleAccent}
              </span>
            </h2>
          </div>
        </Reveal>

        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
          {curriculumContent.groups.map((group) => (
            <Reveal key={group.name}>
              <section className="rounded-2xl border border-border bg-card p-5 transition-colors dark:border-white/5 dark:bg-white/[0.02]">
                <header className="mb-4 border-b border-border pb-3 dark:border-white/10">
                  <h3 className="text-base font-semibold text-foreground dark:text-white">
                    {group.name}
                  </h3>
                  <p className="mt-1 text-[11px] tracking-[0.15em] text-[#FF4D00] uppercase">
                    {group.subtitle}
                  </p>
                </header>

                <div className="space-y-3">
                  {group.items.map((item) => {
                    const Icon = TRACK_ICONS[item.title] || Code;
                    return (
                      <article
                        key={item.title}
                        className="group rounded-xl border border-border bg-background p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#FF4D00]/30 dark:border-white/8 dark:bg-black/20"
                      >
                        <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-[#FF4D00]/6 text-muted-foreground transition-colors duration-300 group-hover:text-[#FF4D00] dark:text-gray-500">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h4 className="mb-2 text-sm font-semibold text-foreground transition-colors duration-300 group-hover:text-[#FF4D00] dark:text-white">
                          {item.title}
                        </h4>
                        <p className="text-xs leading-relaxed text-muted-foreground dark:text-gray-400">
                          {item.desc}
                        </p>
                      </article>
                    )
                  })}
                </div>
              </section>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
