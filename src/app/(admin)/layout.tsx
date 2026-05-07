import Link from "next/link";
import type { ReactNode } from "react";

const adminNavigationItems = [{ href: "/admin", label: "대시보드" }];

export default function AdminAreaLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-zinc-200 px-6 py-4">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-medium text-zinc-500">Admin Area</p>
            <h1 className="text-lg font-semibold">관리자</h1>
          </div>
          <nav aria-label="Admin navigation" className="flex flex-wrap gap-3">
            {adminNavigationItems.map((item) => (
              <Link
                className="text-sm font-medium text-zinc-600 hover:text-zinc-950"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      {children}
    </div>
  );
}
