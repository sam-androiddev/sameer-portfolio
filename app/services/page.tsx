import { Section } from "../components/Section";
import services from "../../content/services.json";

export default function ServicesPage() {
  return (
    <Section eyebrow="Consulting & training" title={services.title}>
      <div className="space-y-4">
        <p>{services.intro}</p>
        <ul className="list-disc pl-5 space-y-2">
          {services.items.map((item: string) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="pt-2">{services.closing}</p>
      </div>
    </Section>
  );
}
