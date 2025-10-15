"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { marketingMenu, type NavItem } from "@/config/MarketingMenu.config";

type MobileMenuProps = {
  items?: NavItem[];
};

export function MobileMenu({ items }: MobileMenuProps) {
  const menu = useMemo(() => items ?? marketingMenu, [items]);
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    if (!open) {
      setExpanded(null);
    }
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="inline-flex items-center justify-center rounded-full border border-white/20 p-2 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="marketing-mobile-menu"
        aria-label="Открыть меню"
      >
        <span className="sr-only">Меню</span>
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      {open ? (
        <div
          id="marketing-mobile-menu"
          className="absolute inset-x-0 top-16 z-40 mx-auto w-[92%] rounded-3xl border border-white/10 bg-slate-950/95 p-6 shadow-2xl"
        >
          <nav aria-label="Мобильное меню" className="space-y-4 text-white">
            {menu.map((item) => {
              const hasChildren = Boolean(item.children?.length);
              const isExpanded = expanded === item.id;
              return (
                <div key={item.id} className="border-b border-white/10 pb-4 last:border-none">
                  {hasChildren ? (
                    <button
                      type="button"
                      className="flex w-full items-center justify-between text-left text-base font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
                      aria-expanded={isExpanded}
                      aria-controls={`${item.id}-panel`}
                      onClick={() => setExpanded((value) => (value === item.id ? null : item.id))}
                    >
                      <span>{item.label}</span>
                      <svg
                        className={`h-5 w-5 transition-transform ${isExpanded ? "rotate-180" : "rotate-0"}`}
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m6 8 4 4 4-4" />
                      </svg>
                    </button>
                  ) : (
                    <Link
                      href={item.href ?? "/"}
                      className="block text-base font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                  {hasChildren ? (
                    <div id={`${item.id}-panel`} className={`mt-3 space-y-3 text-sm text-white/80 ${isExpanded ? "block" : "hidden"}`}>
                      {item.children?.map((child) => (
                        <div key={child.id} className="space-y-1">
                          <Link
                            href={child.href}
                            className="block rounded-lg bg-white/5 px-4 py-3 font-medium text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
                            onClick={() => setOpen(false)}
                          >
                            {child.label}
                          </Link>
                          {child.cta ? (
                            <Link
                              href={child.cta.href}
                              className="inline-flex items-center text-xs font-semibold uppercase tracking-wide text-sky-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
                              onClick={() => setOpen(false)}
                            >
                              {child.cta.label}
                            </Link>
                          ) : null}
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </nav>
          <div className="mt-6 flex flex-col gap-3">
            <Link
              href="/login"
              className="rounded-full border border-white/20 px-4 py-2 text-center text-sm font-medium text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
              onClick={() => setOpen(false)}
            >
              Войти
            </Link>
            <Link
              href="/register"
              className="marketing-btn-primary text-center text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
              onClick={() => setOpen(false)}
            >
              Начать бесплатно
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}
