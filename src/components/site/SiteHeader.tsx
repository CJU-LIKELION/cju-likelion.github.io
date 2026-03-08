import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

type SiteHeaderProps = {
  onNavigate: (id: string) => void;
};

export function SiteHeader({ onNavigate }: SiteHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      data-testid="site-header"
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors",
        isScrolled
          ? "border-b border-border bg-background/90 backdrop-blur"
          : "border-b border-transparent bg-background/60",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a
          href="#intro"
          onClick={(event) => {
            event.preventDefault();
            onNavigate("intro");
          }}
          className="flex items-center gap-2 text-lg font-black tracking-wide"
        >
          <img src="/cju-likelion-logo.svg" alt="CJU Likelion" className="h-6 w-6" />
          <span>CJU <span className="text-primary">LIKELION</span></span>
        </a>
      </div>
    </header>
  );
}
