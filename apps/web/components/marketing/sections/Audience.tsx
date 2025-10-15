import Link from "next/link";

type AudienceCard = {
  id: string;
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
};

type AudienceSectionProps = {
  title: string;
  subtitle: string;
  cards: AudienceCard[];
};

export function AudienceSection({ title, subtitle, cards }: AudienceSectionProps) {
  return (
    <section id="audience" className="py-20 text-white">
      <div className="marketing-container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
          <p className="text-lg text-white/70">{subtitle}</p>
        </div>
        <div className="marketing-grid columns-2">
          {cards.map((card) => (
            <article key={card.id} id={card.id} className="marketing-card flex flex-col p-8">
              <h3 className="text-xl font-semibold text-white">{card.title}</h3>
              <p className="mt-3 flex-1 text-base text-white/70">{card.description}</p>
              <Link
                href={card.href}
                className="mt-6 inline-flex items-center text-sm font-medium text-sky-300 transition hover:text-sky-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
              >
                {card.ctaLabel}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
