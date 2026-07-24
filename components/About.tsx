import Section from "./Section";
import { about, credentials } from "@/data/content";

export default function About() {
  return (
    <Section id="about" label="about" title="About">
      <div className="max-w-2xl space-y-4 text-base leading-relaxed text-muted">
        {about.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>

      <p className="mt-6 max-w-2xl border-l-2 border-accent/50 pl-4 font-mono text-xs leading-relaxed text-faint">
        {credentials}
      </p>
    </Section>
  );
}
