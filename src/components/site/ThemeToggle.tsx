import { useTheme } from "@/hooks/useTheme";

export function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      data-testid="theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      aria-pressed={isDark}
      className="inline-flex h-9 items-center rounded-md border border-border px-3 text-xs"
    >
      {isDark ? "Light" : "Dark"}
    </button>
  );
}
