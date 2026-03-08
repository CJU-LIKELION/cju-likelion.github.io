import { useEffect, useRef } from "react";

import { AboutSection } from "@/components/sections/AboutSection";
import { ApplySection } from "@/components/sections/ApplySection";
import { CupToLionSection } from "@/components/sections/CupToLionSection";
import { CurriculumSection } from "@/components/sections/CurriculumSection";
import { IntroSection } from "@/components/sections/IntroSection";
import { RoadmapSection } from "@/components/sections/RoadmapSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { VisionSection } from "@/components/sections/VisionSection";
import { DotNav } from "@/components/site/DotNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { sectionOrder } from "@/content/landing";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { scrollToId } from "@/lib/scroll";

export function LandingPage() {
  const activeId = useScrollSpy(sectionOrder);
  const prefersReducedMotion = usePrefersReducedMotion();
  const didInitialHashScroll = useRef(false);

  useEffect(() => {
    if (didInitialHashScroll.current) {
      return;
    }

    didInitialHashScroll.current = true;
    const hash = window.location.hash.replace("#", "");
    if (!hash || !sectionOrder.includes(hash as (typeof sectionOrder)[number])) {
      return;
    }

    requestAnimationFrame(() => {
      scrollToId(hash, { behavior: "auto", updateHash: false });
    });
  }, []);

  const handleNavigate = (id: string) => {
    scrollToId(id, {
      behavior: prefersReducedMotion ? "auto" : "smooth",
      updateHash: true,
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader activeId={activeId} onNavigate={handleNavigate} />
      <DotNav activeId={activeId} onNavigate={handleNavigate} />

      <main>
        <IntroSection />
        <VisionSection />
        <AboutSection />
        <TeamSection />
        <CurriculumSection />
        <CupToLionSection />
        <RoadmapSection />
        <ApplySection />
      </main>

      <SiteFooter />
    </div>
  );
}
