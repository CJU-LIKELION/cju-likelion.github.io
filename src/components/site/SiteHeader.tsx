import { navigationItems } from "@/content/landing";

type SiteHeaderProps = {
  activeId: string;
};

export function SiteHeader({ activeId }: SiteHeaderProps) {
  return (
    <header
      data-testid="site-header"
      className="fixed inset-x-0 top-0 z-50 border-b border-transparent bg-background/70 backdrop-blur"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#intro" className="font-black tracking-wide">
          LIKELION <span className="text-primary">CJU</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {navigationItems.map((item) => {
            const isActive = item.id === activeId;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={isActive ? "true" : undefined}
                className="text-xs tracking-[0.15em] uppercase"
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <button
          type="button"
          data-testid="mobile-nav-toggle"
          className="inline-flex h-9 items-center rounded-md border border-border px-3 text-xs md:hidden"
          aria-label="Toggle navigation"
        >
          Menu
        </button>
      </div>

      <div
        data-testid="mobile-nav-panel"
        className="hidden border-t border-border px-5 py-3 md:hidden"
      />
    </header>
  );
}
