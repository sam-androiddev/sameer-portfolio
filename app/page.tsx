import { Section } from "./components/Section";
import site from "../content/site.json";

export default function HomePage() {
  const { heroEyebrow, heroTitle, paragraphs, ctaPrimaryLabel, ctaSecondaryLabel } =
    site.home;

  return (
    <Section eyebrow={heroEyebrow} title={heroTitle}>
      {paragraphs.map((p) => (
        <p key={p} className="mb-3">
          {p}
        </p>
      ))}
      <div className="mt-6 flex flex-wrap gap-3 text-sm">
        <a
          href="/portfolio"
          className="rounded-full bg-blue-900 px-4 py-2 font-medium text-amber-50 hover:bg-amber-500"
        >
          {ctaPrimaryLabel}
        </a>
        <a
          href="/contact"
          className="rounded-full border border-slate-600 px-4 py-2 font-medium hover:border-slate-400"
        >
          {ctaSecondaryLabel}
        </a>
      </div>
    </Section>
  );
}
