import { Reveal } from "@/components/motion/Reveal";
import { visionContent } from "@/content/landing";

export function VisionSection() {
  return (
    <section id="vision" className="min-h-screen scroll-mt-16 bg-background dark:bg-[#0A0A0A] px-5 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="mb-16 text-center md:mb-20">
            <span className="mb-4 block text-xs tracking-[0.3em] text-[#FF4D00] uppercase">
              {visionContent.label}
            </span>
            <h2 className="text-3xl text-foreground dark:text-white md:text-5xl">
              {visionContent.titleTop}
              <br />
              <span className="bg-gradient-to-r from-[#FF4D00] to-[#FF8C00] bg-clip-text text-transparent">
                {visionContent.titleAccent}
              </span>
            </h2>
          </div>
        </Reveal>

        <div className="relative mx-auto max-w-5xl">
          <div className="absolute top-[1.75rem] left-[10%] right-[10%] hidden h-px bg-border dark:bg-[#FF4D00]/30 md:block" />

          <div className="grid grid-cols-2 gap-6 md:grid-cols-5 md:gap-4">
            {visionContent.pillars.map((pillar) => (
              <Reveal key={pillar.label} className="flex flex-col items-center text-center">
                <div className="relative z-10 mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-border bg-card text-muted-foreground dark:border-gray-700 dark:bg-[#0A0A0A] dark:text-gray-500 transition-all duration-300">
                  <span className="text-xs">*</span>
                </div>
                <h3 className="mb-2 text-sm tracking-wider text-foreground dark:text-white uppercase transition-colors">
                  {pillar.label}
                </h3>
                <p className="whitespace-pre-line text-xs leading-relaxed text-muted-foreground dark:text-gray-500">
                  {pillar.desc}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
