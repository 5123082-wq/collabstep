import Link from "next/link";
import { marketingMenu } from "@/config/MarketingMenu.config";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/70 py-12 text-white">
      <div className="marketing-container flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm space-y-3">
          <span className="text-lg font-semibold tracking-wide text-white">Collabverse</span>
          <p className="text-sm text-white/60">
            Платформа для запуска и развития креативных проектов с поддержкой AI и проверенных специалистов.
          </p>
          <p className="text-xs text-white/40">© {new Date().getFullYear()} Collabverse. Все права защищены.</p>
        </div>
        <nav className="grid gap-6 md:grid-cols-2">
          {marketingMenu.map((section) => (
            <div key={section.id} className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-wide text-white/70">{section.label}</p>
              <ul className="space-y-2 text-sm text-white/60">
                {section.children?.map((child) => (
                  <li key={child.id}>
                    <Link
                      href={child.href}
                      className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
                    >
                      {child.label}
                    </Link>
                  </li>
                )) ?? (
                  <li>
                    <Link
                      href={section.href ?? "/"}
                      className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
                    >
                      {section.label}
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </footer>
  );
}
