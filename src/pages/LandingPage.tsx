import { AboutSection } from "@/components/sections/AboutSection";
import { ApplySection } from "@/components/sections/ApplySection";
import { CurriculumSection } from "@/components/sections/CurriculumSection";
import { IntroSection } from "@/components/sections/IntroSection";
import { RoadmapSection } from "@/components/sections/RoadmapSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { VisionSection } from "@/components/sections/VisionSection";
import { DotNav } from "@/components/site/DotNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { sectionOrder } from "@/content/landing";
import { useScrollSpy } from "@/hooks/useScrollSpy";

export function LandingPage() {
  const activeId = useScrollSpy(sectionOrder);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader activeId={activeId} />
      <DotNav activeId={activeId} />

      <main>
        <IntroSection />
        <VisionSection />
        <AboutSection />
        <TeamSection />
        <CurriculumSection />
        <RoadmapSection />
        <ApplySection />
      </main>

      <SiteFooter />
    </div>
  );
}
