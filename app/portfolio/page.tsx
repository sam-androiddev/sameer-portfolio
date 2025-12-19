import { Section } from "../components/Section";
import { AppCard } from "../components/AppCard";
import portfolio from "../../content/portfolio.json";

export default function PortfolioPage() {
  const { intro, apps } = portfolio;

  return (
    <Section
      eyebrow="Selected work"
      title="Production mobile apps delivered for clients worldwide."
    >
      <p className="mb-6">{intro}</p>
      <div className="grid gap-5 md:grid-cols-2">
        {apps.map((app) => (
          <AppCard
            key={app.name}
            name={app.name}
            category={app.category}
            country={app.country}
            description={app.description}
            tech={app.tech}
            links={app.links}
            files={app.files}
            image={app.image} // new
          />
        ))}
      </div>
    </Section>
  );
}
