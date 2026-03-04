import { Reveal } from "@/components/motion/Reveal";
import { teamContent } from "@/content/landing";

export function TeamSection() {
  return (
    <section id="team" className="scroll-mt-16 bg-card px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-3xl font-black md:text-5xl">{teamContent.title}</h2>
          <p className="mt-3 text-muted-foreground">{teamContent.description}</p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {teamContent.members.map((member) => (
            <Reveal key={`${member.role}-${member.name}`}>
              <article className="rounded-2xl border border-border bg-background/70 p-5">
                <p className="text-xs tracking-[0.2em] text-primary uppercase">{member.role}</p>
                <h3 className="mt-2 text-xl font-bold text-foreground">{member.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{member.part}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
