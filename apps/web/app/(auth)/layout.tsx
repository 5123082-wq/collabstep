import type { ReactNode } from "react";
import Link from "next/link";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-surface via-background to-surface px-6 py-16">
      <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-primary/10 to-transparent blur-3xl" aria-hidden />
      <div className="relative z-10 w-full max-w-2xl space-y-10 text-center">
        <div className="space-y-2">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-soft">
            CV
          </div>
          <h1 className="text-2xl font-semibold text-foreground">Collabverse</h1>
          <p className="text-sm text-muted">CRM с AI-помощниками для креативных команд</p>
        </div>
        {children}
        <p className="text-xs text-muted">
          Продолжая, вы соглашаетесь с {" "}
          <Link href="/legal/terms" className="text-primary underline-offset-2 hover:underline">
            Условиями использования
          </Link>{" "}
          и {" "}
          <Link href="/legal/privacy" className="text-primary underline-offset-2 hover:underline">
            Политикой конфиденциальности
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
