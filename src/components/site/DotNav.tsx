import { navigationItems } from "@/content/landing";
import { cn } from "@/lib/utils";

type DotNavProps = {
  activeId: string;
  onNavigate: (id: string) => void;
};

export function DotNav({ activeId, onNavigate }: DotNavProps) {
  return (
    <nav className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 lg:block">
      <ul className="flex flex-col gap-3">
        {navigationItems.map((item) => {
          const isActive = item.id === activeId;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={isActive ? "true" : undefined}
                onClick={(event) => {
                  event.preventDefault();
                  onNavigate(item.id);
                }}
                className={cn(
                  "block rounded-full transition-all duration-200",
                  isActive
                    ? "h-4 w-4 bg-primary"
                    : "h-2 w-2 bg-muted-foreground hover:bg-foreground/70",
                )}
              >
                <span className="sr-only">{item.label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
