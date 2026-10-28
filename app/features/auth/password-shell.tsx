import type * as React from "react";
import { EcwWordmark } from "@/components/brand/ecw-wordmark";

export function PasswordShell({
  children,
  description,
  footer,
  title
}: {
  children: React.ReactNode;
  description: string;
  footer?: React.ReactNode;
  title: string;
}): React.ReactElement {
  return (
    <main className="ecw-auth flex min-h-screen items-center justify-center bg-rail px-4 py-12">
      <div className="w-full max-w-md">
        <EcwWordmark />
        <section className="overflow-hidden rounded-[24px] border border-divider bg-sidebar shadow-sm">
          <header className="px-6 pb-2 pt-5">
            <h1 className="text-xl font-semibold tracking-tight">{title}</h1>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
          </header>
          <div className="px-6 pb-6 pt-3">{children}</div>
          {footer ? (
            <footer className="flex justify-center border-t border-divider bg-card/30 px-6 py-4">
              {footer}
            </footer>
          ) : null}
        </section>
        <ProductAttribution />
      </div>
    </main>
  );
}

export function ProductAttribution(): React.ReactElement {
  return (
    <p className="ecw-attribution mt-4 text-center text-[11px] text-tertiary">
      Self-hosted on Cloudflare <span aria-hidden="true">·</span>{" "}
      <a
        className="underline-offset-4 transition-colors hover:text-foreground hover:underline"
        href="https://hqbase.io/"
        rel="noopener"
        target="_blank"
      >
        <img alt="" src="/logo.svg" />
        Powered by HQBase
      </a>
      <span aria-hidden="true">·</span>
      <a
        className="underline-offset-4 transition-colors hover:text-foreground hover:underline"
        href="https://github.com/connerv/eastern-colorado-weekly-mail"
        rel="noopener"
        target="_blank"
      >
        Source
      </a>
    </p>
  );
}
