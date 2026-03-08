import { useCallback, useEffect, useRef, useState } from "react";

import { navigationItems } from "@/content/landing";
import { cn } from "@/lib/utils";

import { ThemeToggle } from "./ThemeToggle";

const ACTIVE_NAV_ID_MAP: Record<string, string> = {
  "cup-to-lion": "curriculum",
};

const FOCUSABLE_SELECTOR =
  "a[href], button:not([disabled]), [tabindex]:not([tabindex='-1'])";

type SiteHeaderProps = {
  activeId: string;
  onNavigate: (id: string) => void;
};

export function SiteHeader({ activeId, onNavigate }: SiteHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

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

  useEffect(() => {
    if (!isMenuOpen) {
      previousFocusRef.current?.focus();
      return;
    }

    previousFocusRef.current = document.activeElement as HTMLElement | null;
    const panel = panelRef.current;
    if (!panel) {
      return;
    }

    const focusables = Array.from(
      panel.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
    );
    focusables[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setIsMenuOpen(false);
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      if (focusables.length === 0) {
        event.preventDefault();
        return;
      }

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const activeElement = document.activeElement;

      if (event.shiftKey && activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const onPointerDown = (event: MouseEvent | TouchEvent) => {
      const toggleButton = toggleButtonRef.current;
      const target = event.target as Node;

      if (panel.contains(target) || toggleButton?.contains(target)) {
        return;
      }

      setIsMenuOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
    };
  }, [isMenuOpen]);

  const handleNavigate = useCallback(
    (id: string) => {
      onNavigate(id);
      setIsMenuOpen(false);
    },
    [onNavigate],
  );

  const activeNavId = ACTIVE_NAV_ID_MAP[activeId] || activeId;

  return (
    <header
      data-testid="site-header"
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors",
        isScrolled || isMenuOpen
          ? "border-b border-border bg-background/90 backdrop-blur"
          : "border-b border-transparent bg-background/60",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a
          href="#intro"
          onClick={(event) => {
            event.preventDefault();
            handleNavigate("intro");
          }}
          className="font-black tracking-wide"
        >
          LIKELION <span className="text-primary">CJU</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {navigationItems.map((item) => {
            const isActive = item.id === activeNavId;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={isActive ? "true" : undefined}
                onClick={(event) => {
                  event.preventDefault();
                  handleNavigate(item.id);
                }}
                className={cn(
                  "nav-label text-xs tracking-[0.15em] uppercase transition-colors",
                  isActive ? "text-primary" : "text-foreground/80 hover:text-foreground",
                )}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          <button
            ref={toggleButtonRef}
            type="button"
            data-testid="mobile-nav-toggle"
            className="inline-flex h-9 items-center rounded-md border border-border px-3 text-xs md:hidden"
            aria-label="Toggle navigation"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        ref={panelRef}
        data-testid="mobile-nav-panel"
        className={cn(
          "border-t border-border bg-background/90 px-5 py-3 backdrop-blur md:hidden",
          isMenuOpen ? "block" : "hidden",
        )}
      >
        <nav className="flex flex-col gap-2" aria-label="Mobile primary">
          {navigationItems.map((item) => {
            const isActive = item.id === activeNavId;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "rounded-md px-2 py-2 text-sm",
                  isActive ? "bg-accent text-accent-foreground" : "text-foreground/80",
                )}
                onClick={(event) => {
                  event.preventDefault();
                  handleNavigate(item.id);
                }}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
