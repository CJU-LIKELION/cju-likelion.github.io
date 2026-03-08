import { Reveal } from "@/components/motion/Reveal";
import { ChevronDown } from "lucide-react";
import { introContent } from "@/content/landing";

export function IntroSection() {
  return (
    <section
      id="intro"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={introContent.backgroundImage}
          alt="Coding Background"
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/45 to-white dark:from-[#050505]/60 dark:via-[#050505]/40 dark:to-[#050505]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,77,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,77,0,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 mx-[0px] my-[50px] flex flex-col items-center px-[24px] py-[50px] text-center">
        <Reveal>
          <span className="mb-8 inline-block rounded-full border border-[#FF4D00]/30 px-4 py-1.5 text-xs tracking-[0.25em] text-[#FF4D00] uppercase">
            {introContent.badge}
          </span>

          <h1 className="mb-8 text-5xl font-black tracking-tight text-foreground dark:text-white sm:text-6xl md:text-8xl lg:text-9xl">
            {introContent.titleTop}
            <br />
            <span className="text-[#FF4D00]">
              {introContent.titleAccent}
            </span>
          </h1>

          <p className="mx-auto mb-12 max-w-xl text-base leading-relaxed text-muted-foreground dark:text-gray-400 sm:text-lg md:text-xl">
            <span className="text-foreground dark:text-white">{introContent.descriptionTop}</span>
            <br />
            {introContent.descriptionBottom}
          </p>

          <div className="mb-20 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`#${introContent.primaryCta.targetId}`}
              className="inline-flex cursor-pointer rounded-full bg-[#FF4D00] px-8 py-3.5 text-sm font-bold tracking-wider text-white uppercase transition-all duration-300 hover:bg-[#FF6A2B] hover:shadow-lg hover:shadow-[#FF4D00]/20"
            >
              {introContent.primaryCta.label}
            </a>
          </div>

          <a
            href="#vision"
            className="flex cursor-pointer flex-col items-center text-muted-foreground dark:text-gray-500 transition-colors hover:text-[#FF4D00]"
          >
            <span className="mb-2 text-[10px] tracking-[0.3em] uppercase">Scroll Down</span>
            <ChevronDown className="h-5 w-5 animate-bounce" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
