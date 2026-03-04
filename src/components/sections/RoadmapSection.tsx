import { Reveal } from "@/components/motion/Reveal";
import { roadmapContent } from "@/content/landing";

export function RoadmapSection() {
  return (
    <section id="roadmap" className="scroll-mt-16 bg-card px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-3xl font-black md:text-5xl">{roadmapContent.title}</h2>
        </Reveal>

        <div className="mt-10 space-y-4">
          {roadmapContent.items.map((item, index) => (
            <Reveal key={`${item.month}-${item.title}`}>
              <article className="grid items-center gap-4 rounded-2xl border border-border bg-background/70 p-5 md:grid-cols-[80px_1fr]">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {item.month}
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-lg font-bold text-foreground">{item.title}</p>
                    <span className="text-xs text-muted-foreground">Step {index + 1}</span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{item.detail}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
