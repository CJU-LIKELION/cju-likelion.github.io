import { Reveal } from "@/components/motion/Reveal";
import { curriculumContent } from "@/content/landing";

export function CurriculumSection() {
  return (
    <section id="curriculum" className="scroll-mt-16 px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-3xl font-black md:text-5xl">{curriculumContent.title}</h2>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {curriculumContent.tracks.map((track) => (
            <Reveal key={track.title}>
              <article className="h-full rounded-2xl border border-border bg-card p-5">
                <h3 className="text-lg font-bold text-foreground">{track.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {track.description}
                </p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {track.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-border bg-background px-3 py-1 text-xs text-foreground/90"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
