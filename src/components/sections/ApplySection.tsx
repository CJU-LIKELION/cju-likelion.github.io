import { Reveal } from "@/components/motion/Reveal";
import { applyContent } from "@/content/landing";

export function ApplySection() {
  return (
    <section id="apply" className="scroll-mt-16 px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="rounded-3xl border border-border bg-card p-7 md:p-10">
            <h2 className="text-3xl font-black md:text-5xl">{applyContent.title}</h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              {applyContent.description}
            </p>
            <p className="mt-3 text-sm font-medium text-primary">{applyContent.period}</p>

            <a
              data-testid="apply-cta"
              href={applyContent.ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground"
            >
              {applyContent.ctaLabel}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
