import { navigationItems } from "@/content/landing";
import { cn } from "@/lib/utils";

type DotNavProps = {
  activeId: string;
  onNavigate: (id: string) => void;
};

export function DotNav({ activeId, onNavigate }: DotNavProps) {
  return (
    <nav className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 lg:block">
      <ul className="flex flex-col items-end gap-3">
        {navigationItems.map((item) => {
          const isActive = item.id === activeId;
          return (
            <li key={item.id} className="flex h-5 items-center">
              <a
                href={`#${item.id}`}
                aria-current={isActive ? "true" : undefined}
                onClick={(event) => {
                  event.preventDefault();
                  onNavigate(item.id);
                }}
                className="group relative flex items-center justify-end outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
              >
                <span
                  className={cn(
                    "absolute right-full mr-3 whitespace-nowrap text-sm font-medium transition-all duration-300",
                    isActive
                      ? "translate-x-0 opacity-100 text-foreground"
                      : "pointer-events-none translate-x-2 opacity-0 text-muted-foreground group-hover:translate-x-0 group-hover:opacity-100 group-hover:text-foreground/70"
                  )}
                >
                  {item.label}
                </span>
                <span
                  aria-hidden="true"
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    isActive
                      ? "w-8 bg-primary"
                      : "w-2 bg-muted-foreground group-hover:w-4 group-hover:bg-foreground/70"
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
