export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-sm text-muted-foreground md:flex-row">
        <p className="font-semibold text-foreground">LIKELION CJU</p>
        <p>© {currentYear} LIKELION CJU. All rights reserved.</p>
      </div>
    </footer>
  );
}
