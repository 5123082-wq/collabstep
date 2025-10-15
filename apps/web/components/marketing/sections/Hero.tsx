import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export type HeroAction = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

type HeroProps = {
  title: ReactNode;
  description: string;
  eyebrow?: string;
  image?: { src: string; alt: string; width: number; height: number };
  primaryAction: HeroAction;
  secondaryAction?: HeroAction;
};

export function Hero({
  title,
  description,
  eyebrow,
  image,
  primaryAction,
  secondaryAction
}: HeroProps) {
  return (
    <section className="relative overflow-hidden pb-16 pt-24 text-white">
      <div className="marketing-container">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:items-center">
          <div className="space-y-6">
            {eyebrow ? (
              <span className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-1 text-sm tracking-wide text-white/80">
                {eyebrow}
              </span>
            ) : null}
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-white/80">{description}</p>
            <div className="flex flex-wrap items-center gap-4">
              <HeroLink action={primaryAction} />
              {secondaryAction ? <HeroLink action={secondaryAction} /> : null}
            </div>
          </div>
          {image ? (
            <div className="relative isolate flex justify-center">
              <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-sky-400/40 via-indigo-400/30 to-purple-500/40 blur-3xl" />
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                priority
                className="h-auto w-full max-w-md rounded-3xl border border-white/10 shadow-2xl"
              />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

function HeroLink({ action }: { action: HeroAction }) {
  const className =
    action.variant === "secondary"
      ? "marketing-btn-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
      : "marketing-btn-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400";

  return (
    <Link href={action.href} className={className}>
      {action.label}
    </Link>
  );
}
