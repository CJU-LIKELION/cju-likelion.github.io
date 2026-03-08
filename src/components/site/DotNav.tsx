import { navigationItems } from "@/content/landing";
import { cn } from "@/lib/utils";

const ACTIVE_NAV_ID_MAP: Record<string, string> = {
  "cup-to-lion": "curriculum",
};

type DotNavProps = {
  activeId: string;
  onNavigate: (id: string) => void;
};

export function DotNav({ activeId, onNavigate }: DotNavProps) {
  const activeNavId = ACTIVE_NAV_ID_MAP[activeId] || activeId;

  return (
    <nav className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 lg:block">
      <ul className="flex flex-col gap-3">
        {navigationItems.map((item) => {
          const isActive = item.id === activeNavId;
          return (
            <li key={item.id} className="flex h-4 w-4 items-center justify-center">
              <a
                href={`#${item.id}`}
                aria-current={isActive ? "true" : undefined}
                onClick={(event) => {
                  event.preventDefault();
                  onNavigate(item.id);
                }}
                className={cn(
                  "group flex h-4 w-4 items-center justify-center rounded-full outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "h-2 w-2 rounded-full bg-muted-foreground transition-all duration-200",
                    isActive
                      ? "bg-primary scale-200"
                      : "scale-100 group-hover:bg-foreground/70",
                  )}
                />
                <span className="sr-only">{item.label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
