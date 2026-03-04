import { Reveal } from "@/components/motion/Reveal";
import { aboutContent } from "@/content/landing";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-16 px-5 py-24">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.1fr_1fr] md:items-center">
        <Reveal>
          <h2 className="text-3xl font-black md:text-5xl">{aboutContent.title}</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">{aboutContent.description}</p>

          <div className="mt-7 grid grid-cols-3 gap-3">
            {aboutContent.stats.map((stat) => (
              <article key={stat.label} className="rounded-xl border border-border bg-card p-4">
                <p className="text-xl font-black text-foreground md:text-2xl">{stat.value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <img
            src={aboutContent.imageUrl}
            alt="LIKELION CJU members collaborating"
            className="h-[420px] w-full rounded-2xl border border-border object-cover"
          />
        </Reveal>
      </div>
    </section>
  );
}
