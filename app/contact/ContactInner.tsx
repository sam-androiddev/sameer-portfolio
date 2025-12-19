import { Section } from "../components/Section";
import site from "../../content/site.json";
import { Resend } from "resend";
import { redirect } from "next/navigation";

export default function ContactInner({ success }: { success: boolean }) {
  const { email, linkedin, intro, formServices } = site.contact;

  async function handleSubmit(formData: FormData) {
    "use server";

    const resend = new Resend(process.env.RESEND_API_KEY as string);

    const name = (formData.get("name") as string || "").trim();
    const phone = (formData.get("phone") as string || "").trim();
    const service = (formData.get("service") as string || "").trim();

    if (!name || !phone || !service) return;

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.CONTACT_RECIPIENT_EMAIL as string,
      subject: `New Client contact (${service})`,
      html: `<h2>New Client contact from portfolio:</h2>
             <p>Name: <strong>${name}</strong></p>
             <p>Phone: <strong>${phone}</strong></p>
             <p>Service: <strong>${service}</strong></p>`
    });

    redirect("/contact?success=1");
  }

  return (
    <Section eyebrow="Contact" title="Start a conversation.">
      <div className="grid gap-8 md:grid-cols-2 items-start">
        {/* LEFT: existing content */}
        <div>
          <p className="mb-4">{intro}</p>
          <div className="space-y-3 text-sm">
            <p>
              Email:{" "}
              <a
                href={`mailto:${email}`}
                className="text-blue-700 underline underline-offset-2"
              >
                {email}
              </a>
            </p>
            <p>
              LinkedIn:{" "}
              <a
                href={linkedin}
                className="text-blue-700 underline underline-offset-2"
                target="_blank"
                rel="noreferrer"
              >
                {linkedin}
              </a>
            </p>
            <p>
              A short 30‑minute intro call can be scheduled after an initial
              email to discuss fit and next steps.
            </p>

          </div>
        </div>

        {/* RIGHT: form */}
        <div className="rounded-xl border border-slate-200 bg-white/70 p-6 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-900 mb-3">
            Share your details
          </h3>
          <p className="text-xs text-slate-600 mb-4">
            Leave your details and select the service you are interested in.
          </p>

          <form action={handleSubmit} className="space-y-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="text-sm text-slate-700">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="rounded-md border border-slate-300 px-3 py-2 text-sm"
                placeholder="Your full name"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="phone" className="text-sm text-slate-700">
                Phone number (with country code)
              </label>
              <input
                id="phone"
                name="phone"
                required
                className="rounded-md border border-slate-300 px-3 py-2 text-sm"
                placeholder="+91 98xxxxxx"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="service" className="text-sm text-slate-700">
                Service
              </label>
              <select
                id="service"
                name="service"
                required
                className="rounded-md border border-slate-300 px-3 py-2 text-sm bg-white"
              >
                <option value="">Select a service</option>
                {formServices.map((s: string) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="rounded-full bg-amber-600 px-4 py-2 text-sm font-medium text-white hover:bg-amber-700"
            >
              Submit details
            </button>
        </form>
{success && (
              <div className="mt-4 rounded-md bg-emerald-50 border border-emerald-200 px-3 py-2 text-sm text-emerald-800">
                Request submitted successfully. You will receive a call back very soon.
              </div>
            )}
        </div>
      </div>
    </Section>
  );
}
