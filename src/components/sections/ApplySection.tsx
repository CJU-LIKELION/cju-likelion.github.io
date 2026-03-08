import { Reveal } from "@/components/motion/Reveal";
import { Sparkles, ArrowRight } from "lucide-react";
import { applyContent } from "@/content/landing";

export function ApplySection() {
  return (
    <section
      id="apply"
      className="relative flex min-h-[80vh] flex-col items-center justify-center scroll-mt-16 px-5 py-32 text-center md:py-40"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF4D00]/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mb-6 flex items-center justify-center gap-2 text-[#FF4D00]">
            <Sparkles className="h-4 w-4" />
            <span className="text-xs tracking-[0.3em] uppercase">{applyContent.recruitLabel}</span>
            <Sparkles className="h-4 w-4" />
          </div>

          <h2 className="mb-4 text-4xl tracking-tight text-foreground dark:text-white sm:text-5xl md:text-7xl">
            {applyContent.titleTop} <span className="bg-gradient-to-r from-[#FF4D00] to-[#FF8C00] bg-clip-text text-transparent">{applyContent.titleAccent}</span>
          </h2>

          <a
            data-testid="apply-cta"
            href={applyContent.ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-[#FF4D00] px-10 py-4 text-sm tracking-wider text-white uppercase shadow-lg transition-all duration-300 hover:bg-[#FF6A2B] hover:shadow-[#FF4D00]/20"
          >
            {applyContent.ctaLabel}
            <ArrowRight className="h-5 w-5" />
          </a>

          <p className="mt-6 text-xs text-muted-foreground dark:text-gray-600">{applyContent.period}</p>
        </Reveal>
      </div>
    </section>
  );
}
