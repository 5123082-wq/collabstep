import Link from "next/link";

export function CTASection({
  title,
  description,
  primary,
  secondary
}: {
  title: string;
  description: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="py-24">
      <div className="marketing-container">
        <div className="marketing-card flex flex-col items-center gap-6 px-8 py-14 text-center text-white">
          <h2 className="text-3xl font-semibold sm:text-4xl">{title}</h2>
          <p className="max-w-2xl text-lg text-white/70">{description}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={primary.href}
              className="marketing-btn-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
            >
              {primary.label}
            </Link>
            {secondary ? (
              <Link
                href={secondary.href}
                className="marketing-btn-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
              >
                {secondary.label}
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
