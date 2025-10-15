import Link from "next/link";

export function Breadcrumbs({
  items
}: {
  items: { label: string; href: string }[];
}) {
  if (items.length === 0) return null;
  return (
    <nav className="flex items-center gap-2 text-xs text-muted" aria-label="Breadcrumb">
      {items.map((item, index) => (
        <span key={item.href} className="flex items-center gap-2">
          <Link href={item.href} className="font-medium text-foreground/80 hover:text-foreground">
            {item.label}
          </Link>
          {index < items.length - 1 ? <span className="text-muted">/</span> : null}
        </span>
      ))}
    </nav>
  );
}
