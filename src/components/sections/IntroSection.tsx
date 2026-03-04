import { Reveal } from "@/components/motion/Reveal";
import { introContent } from "@/content/landing";

export function IntroSection() {
  return (
    <section
      id="intro"
      className="relative min-h-screen scroll-mt-16 overflow-hidden bg-background px-5 pb-20 pt-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,77,0,0.15),transparent_45%)]" />
      <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(to_right,transparent_0,transparent_39px,rgba(255,255,255,0.04)_40px),linear-gradient(to_bottom,transparent_0,transparent_39px,rgba(255,255,255,0.04)_40px)] [background-size:40px_40px]" />

      <div className="mx-auto max-w-6xl">
        <Reveal className="relative z-10">
          <p className="mb-4 text-xs tracking-[0.25em] text-primary uppercase">
            {introContent.badge}
          </p>
          <h1 className="text-4xl font-black tracking-tight text-foreground md:text-7xl">
            {introContent.titleTop}
            <br />
            <span className="bg-gradient-to-r from-[var(--brand-500)] to-[var(--brand-400)] bg-clip-text text-transparent">
              {introContent.titleAccent}
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {introContent.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={introContent.primaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground"
            >
              {introContent.primaryCta.label}
            </a>
            <a
              href={`#${introContent.secondaryCta.targetId}`}
              className="inline-flex rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-card-foreground"
            >
              {introContent.secondaryCta.label}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
