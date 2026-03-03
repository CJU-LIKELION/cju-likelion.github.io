import { Reveal } from "@/components/motion/Reveal";

export function IntroSection() {
  return (
    <section
      id="intro"
      className="min-h-screen scroll-mt-16 bg-background px-5 pb-20 pt-28"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-4 text-xs tracking-[0.25em] text-primary uppercase">
            LIKELION 14TH GENERATION @ CJU
          </p>
          <h1 className="text-4xl font-black tracking-tight text-foreground md:text-7xl">
            BUILD YOUR
            <br />
            <span className="bg-gradient-to-r from-[var(--brand-500)] to-[var(--brand-400)] bg-clip-text text-transparent">
              OWN UNIVERSE
            </span>
          </h1>
        </Reveal>
      </div>
    </section>
  );
}
