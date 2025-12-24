import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";
import site from "../content/site.json";

const baseUrl = "https://sameer-bhanot.vercel.app";

export const metadata: Metadata = {
  title: `${site.meta.title} - ${site.meta.headline}`,
  description: site.meta.description,
  openGraph: {
    title: `${site.meta.title} - ${site.meta.headline}`,
    description: site.meta.description,
    url: baseUrl,
    siteName: site.meta.title,
    images: [
      {
        url: site.meta.image,
        width: 630,
        height: 630,
        alt: `${site.meta.title} - ${site.meta.headline}`
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: site.meta.title,
    description: site.meta.description,
    images: [site.meta.image]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-50">
        <div className="min-h-screen flex flex-col">
          <header className="border-b border-slate-800">
            <div className="mx-auto max-w-5xl flex flex-col gap-4 md:flex-row md:items-center md:justify-between py-4 px-4">
              <div className="flex items-center gap-3">
                <div className="relative h-15 w-15 overflow-hidden rounded-full border border-amber-300 bg-amber-100">
                  <Image
                    src="/images/profile.png"
                    alt="Sameer Bhanot"
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-lg text-blue-900 uppercase">
                    {site.meta.title}
                  </div>
                  <div className="text-sm text-blue-700 uppercase">
                    {site.meta.headline}
                  </div>
                </div>
              </div>

              <nav className="flex flex-wrap gap-4 text-md text-amber-900 uppercase md:justify-end">
                <a href="/" className="hover:text-amber-500">
                  Home
                </a>
                <a href="/portfolio" className="hover:text-amber-500">
                  Portfolio
                </a>
                <a href="/services" className="hover:text-amber-500">
                  Services
                </a>
                <a href="/contact" className="hover:text-amber-500">
                  Contact
                </a>
              </nav>
            </div>
          </header>

          <main className="flex-1">{children}</main>
          <footer className="border-t border-slate-800 py-6 text-sm text-slate-400">
            <div className="mx-auto max-w-5xl flex flex-col gap-2 px-4 md:flex-row md:items-center md:justify-between">
              <span>© {new Date().getFullYear()} Sameer Bhanot</span>
              <span>Available for consulting &amp; training</span>
            </div>
          </footer>

        </div>
      </body>
    </html>
  );
}
