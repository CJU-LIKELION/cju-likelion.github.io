import { Github, Globe, Instagram } from "lucide-react";

import { socialLinks } from "@/content/landing";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  const iconMap = {
    Instagram,
    Globe,
    Github,
  } as const;

  return (
    <footer className="w-full border-t border-border bg-background py-12 dark:border-white/5 dark:bg-[#050505]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-6 text-sm text-muted-foreground md:flex-row md:px-12 lg:px-24">
        <h3 className="text-sm tracking-[0.15em] text-foreground dark:text-white">
          LIKELION <span className="text-[#FF4D00]">@ CJU</span>
        </h3>

        <ul className="flex items-center gap-4">
          {socialLinks.map((item) => {
            const isExternal = /^https?:\/\//.test(item.href);
            const Icon = iconMap[item.label as keyof typeof iconMap];

            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  aria-label={item.label}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:border-[#FF4D00]/30 hover:text-[#FF4D00] dark:border-white/10 dark:text-gray-500"
                >
                  {Icon ? <Icon size={16} /> : <span className="text-xs">*</span>}
                </a>
              </li>
            );
          })}
        </ul>

        <p className="text-[10px] tracking-wider text-muted-foreground dark:text-gray-700">
          © {currentYear} LIKELION CJU. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
