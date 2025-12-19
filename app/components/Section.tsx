import { ReactNode } from "react";

export function Section({
  title,
  eyebrow,
  children,
}: {
  title: string;
  eyebrow?: string;
  children: ReactNode;
}) {
  return (
    <section className="mx-auto max-w-5xl px-4 py-10">
      {eyebrow && (
        <p className="text-xl font-semibold uppercase tracking-[0.2em] text-blue-900 mb-2">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl md:text-5xl font-semibold mb-4 text-amber-900">
        {title}
      </h2>
      <div className="text-sm md:text-base text-amber-900 leading-relaxed">
        {children}
      </div>
    </section>
  );
}
