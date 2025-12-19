import Image from "next/image";

type Link = { label: string; href: string };
type FileLink = { label: string; url: string };

type AppCardProps = {
  name: string;
  category: string;
  country: string;
  description: string;
  tech: string[];
  links?: Link[];
  files?: FileLink[];
  image?: string; // new
};

export function AppCard({
  name,
  category,
  country,
  description,
  tech,
  links = [],
  files = [],
  image,
}: AppCardProps) {
  return (
    <article className="rounded-xl border border-amber-200 bg-amber-50/80 p-5 flex flex-col gap-3 shadow-sm">
      <div className="flex items-start gap-4">
        {image && (
          <div className="relative h-20 w-24 overflow-hidden rounded-lg border border-amber-200 bg-white flex-shrink-0">
            <Image
              src={image}
              alt={name}
              fill
              sizes="64px"
              className="object-cover"
            />
          </div>
        )}
        <div className="flex-1">
          <h3 className="font-semibold text-amber-900 uppercase">{name}</h3>
          <p className="text-xs text-slate-600 mt-1">
            {category} • {country}
          </p>
        </div>
      </div>

      <p className="text-sm text-slate-800 mt-1">{description}</p>

      <div className="flex flex-wrap gap-1 mt-1">
        {tech.map((t) => (
          <span
            key={t}
            className="rounded-full bg-amber-100 px-2 py-0.5 text-[11px] text-amber-900"
          >
            {t}
          </span>
        ))}
      </div>

      {(links.length > 0 || files.length > 0) && (
        <div className="flex flex-wrap gap-3 mt-2 text-xs">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="text-blue-700 hover:text-blue-800 underline underline-offset-2"
            >
              {l.label}
            </a>
          ))}
          {files.map((f) => (
            <a
              key={f.url}
              href={f.url}
              target="_blank"
              rel="noreferrer"
              className="text-teal-700 hover:text-teal-800 underline underline-offset-2"
            >
              {f.label}
            </a>
          ))}
        </div>
      )}
    </article>
  );
}
