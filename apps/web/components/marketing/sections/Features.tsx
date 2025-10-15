import Link from "next/link";

export type Feature = {
  id: string;
  title: string;
  description: string;
  href?: string;
  ctaLabel?: string;
};

type FeaturesSectionProps = {
  title: string;
  subtitle?: string;
  features: Feature[];
  columns?: 2 | 3;
};

export function FeaturesSection({ title, subtitle, features, columns = 3 }: FeaturesSectionProps) {
  return (
    <section className="py-20 text-white">
      <div className="marketing-container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
          {subtitle ? <p className="text-lg text-white/70">{subtitle}</p> : null}
        </div>
        <div className={`marketing-grid columns-${columns}`}>
          {features.map((feature) => (
            <article key={feature.id} className="marketing-card p-8">
              <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-3 text-base text-white/70">{feature.description}</p>
              {feature.href ? (
                <Link
                  href={feature.href}
                  className="mt-6 inline-flex items-center text-sm font-medium text-sky-300 transition hover:text-sky-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
                >
                  {feature.ctaLabel ?? "Подробнее"}
                </Link>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
