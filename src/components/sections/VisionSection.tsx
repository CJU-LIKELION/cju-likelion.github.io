import { Reveal } from "@/components/motion/Reveal";
import { visionContent } from "@/content/landing";

export function VisionSection() {
  return (
    <section id="vision" className="scroll-mt-16 bg-card px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-3xl font-black md:text-5xl">{visionContent.title}</h2>
          <p className="mt-3 text-muted-foreground">{visionContent.subtitle}</p>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {visionContent.pillars.map((pillar) => (
            <Reveal key={pillar.title} className="h-full">
              <article className="h-full rounded-2xl border border-border bg-background/70 p-5">
                <h3 className="text-sm font-bold tracking-wide text-primary uppercase">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {pillar.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
