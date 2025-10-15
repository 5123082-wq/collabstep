"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { marketingMenu } from "@/config/MarketingMenu.config";
import { MobileMenu } from "./MobileMenu";

type TriggerMap = Record<string, HTMLButtonElement | HTMLAnchorElement | null>;
type PanelMap = Record<string, HTMLAnchorElement[]>;

export function MarketingNavbar() {
  const [openItem, setOpenItem] = useState<string | null>(null);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement | null>(null);
  const triggersRef = useRef<TriggerMap>({});
  const panelsRef = useRef<PanelMap>({});

  const closePanels = useCallback(() => setOpenItem(null), []);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!navRef.current) return;
      if (event.target instanceof Node && navRef.current.contains(event.target)) {
        return;
      }
      closePanels();
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closePanels();
      }
    };

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [closePanels]);

  useEffect(() => {
    closePanels();
  }, [pathname, closePanels]);

  const topLevel = useMemo(() => marketingMenu, []);

  const focusTrigger = useCallback((id: string) => {
    const trigger = triggersRef.current[id];
    trigger?.focus();
  }, []);

  const focusSibling = useCallback(
    (currentId: string, direction: "prev" | "next") => {
      const index = topLevel.findIndex((item) => item.id === currentId);
      if (index === -1) return;
      const nextIndex = (index + (direction === "next" ? 1 : -1) + topLevel.length) % topLevel.length;
      focusTrigger(topLevel[nextIndex].id);
    },
    [focusTrigger, topLevel]
  );

  return (
    <header ref={navRef} className="sticky top-0 z-40 bg-slate-950/70 backdrop-blur">
      <div className="marketing-container flex items-center justify-between py-4">
        <Link
          href="/"
          className="text-lg font-semibold tracking-wide text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
        >
          Collabverse
        </Link>
        <nav aria-label="Главное меню" className="hidden items-center gap-6 text-sm text-white/80 lg:flex">
          {topLevel.map((item) => {
            const hasChildren = Boolean(item.children?.length);
            const isOpen = openItem === item.id;
            return (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() => hasChildren && setOpenItem(item.id)}
                onMouseLeave={() => hasChildren && setOpenItem((value) => (value === item.id ? null : value))}
              >
                {hasChildren ? (
                  <button
                    type="button"
                    ref={(node) => {
                      triggersRef.current[item.id] = node;
                    }}
                    className={`rounded-full px-4 py-2 font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 ${
                      isOpen ? "bg-white/10 text-white" : "hover:bg-white/10"
                    }`}
                    aria-expanded={isOpen}
                    aria-controls={`${item.id}-panel`}
                    onClick={() => setOpenItem((value) => (value === item.id ? null : item.id))}
                    onKeyDown={(event) => {
                      if (event.key === "ArrowDown") {
                        event.preventDefault();
                        setOpenItem(item.id);
                        const first = panelsRef.current[item.id]?.[0];
                        requestAnimationFrame(() => first?.focus());
                      }
                      if (event.key === "ArrowRight") {
                        event.preventDefault();
                        focusSibling(item.id, "next");
                      }
                      if (event.key === "ArrowLeft") {
                        event.preventDefault();
                        focusSibling(item.id, "prev");
                      }
                    }}
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    ref={(node) => {
                      triggersRef.current[item.id] = node;
                    }}
                    href={item.href ?? "/"}
                    className="rounded-full px-4 py-2 font-medium transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
                    onKeyDown={(event) => {
                      if (event.key === "ArrowRight") {
                        event.preventDefault();
                        focusSibling(item.id, "next");
                      }
                      if (event.key === "ArrowLeft") {
                        event.preventDefault();
                        focusSibling(item.id, "prev");
                      }
                    }}
                  >
                    {item.label}
                  </Link>
                )}
                {hasChildren ? (
                  <div
                    id={`${item.id}-panel`}
                    role="dialog"
                    aria-label={`Раздел ${item.label}`}
                    className={`absolute left-1/2 mt-4 w-80 -translate-x-1/2 rounded-2xl border border-white/10 bg-slate-950/95 p-6 shadow-2xl transition-opacity duration-150 ${
                      isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
                    }`}
                  >
                    <ul className="space-y-4">
                      {item.children?.map((child, index) => (
                        <li key={child.id} className="space-y-1">
                          <Link
                            ref={(node) => {
                              const refs = panelsRef.current[item.id] ?? [];
                              if (node) {
                                refs[index] = node;
                              } else {
                                refs.splice(index, 1);
                              }
                              panelsRef.current[item.id] = refs;
                            }}
                            href={child.href}
                            className="block rounded-lg px-3 py-2 text-left text-sm font-medium text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
                            onKeyDown={(event) => {
                              if (event.key === "ArrowDown" || event.key === "ArrowUp") {
                                event.preventDefault();
                                const refs = panelsRef.current[item.id] ?? [];
                                const currentIndex = refs.indexOf(event.currentTarget);
                                if (currentIndex === -1) return;
                                const offset = event.key === "ArrowDown" ? 1 : -1;
                                const nextIndex = (currentIndex + offset + refs.length) % refs.length;
                                refs[nextIndex]?.focus();
                              }
                              if (event.key === "Escape") {
                                closePanels();
                                focusTrigger(item.id);
                              }
                            }}
                          >
                            <div className="font-semibold text-white">{child.label}</div>
                            {child.cta ? (
                              <div className="text-xs text-white/60">{child.cta.label}</div>
                            ) : null}
                          </Link>
                          {child.cta ? (
                            <Link
                              href={child.cta.href}
                              className="block text-xs font-medium text-sky-300 transition hover:text-sky-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
                            >
                              {child.cta.label}
                            </Link>
                          ) : null}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>
        <div className="flex items-center gap-3 lg:hidden">
          <MobileMenu items={topLevel} />
        </div>
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/login"
            className="rounded-full px-4 py-2 text-sm font-medium text-white/80 transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
          >
            Войти
          </Link>
          <Link
            href="/register"
            className="marketing-btn-primary text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
          >
            Начать бесплатно
          </Link>
        </div>
      </div>
    </header>
  );
}
