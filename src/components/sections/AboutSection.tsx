import { Reveal } from "@/components/motion/Reveal";
import { aboutContent } from "@/content/landing";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-16 py-24 md:py-32" >
      <div className="relative mb-16 h-[300px] w-full overflow-hidden md:h-[400px]">
        <img src={aboutContent.imageUrl} alt={aboutContent.imageAlt} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent dark:from-[#050505] dark:via-[#050505]/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-transparent dark:from-[#050505]/80" />

        <div className="absolute bottom-8 left-6 md:left-12 lg:left-24">
          <span className="mb-3 block text-xs tracking-[0.3em] text-[#FF4D00] uppercase">
            {aboutContent.label}
          </span>
          <h2 className="text-3xl text-foreground dark:text-white md:text-5xl">
            {aboutContent.titleTop}
            <br />
            <span className="bg-gradient-to-r from-[#FF4D00] to-[#FF8C00] bg-clip-text text-transparent">
              {aboutContent.titleAccent}
            </span>
          </h2>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:gap-16 md:px-12 lg:px-24">
        <Reveal>
          <div className="space-y-6 border-l-2 border-[#FF4D00]/40 pl-6">
            <p className="text-base leading-relaxed text-foreground/90 dark:text-gray-300 md:text-lg">
              {aboutContent.paragraphs[0]}
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground dark:text-gray-400 md:text-base">
              {aboutContent.paragraphs[1]}
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground dark:text-gray-400 md:text-base">
              {aboutContent.paragraphs[2]}
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-2 gap-4">
            {aboutContent.stats.map((stat) => (
              <article
                key={stat.label}
                className="rounded-xl border border-border bg-card p-6 transition-all duration-300 dark:border-white/5 dark:bg-white/[0.02]"
              >
                <p className="text-2xl text-foreground dark:text-white md:text-3xl">{stat.value}</p>
                <p className="mt-1 text-xs text-muted-foreground dark:text-gray-500">{stat.label}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
