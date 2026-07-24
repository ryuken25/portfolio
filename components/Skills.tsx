import Section from "./Section";
import { skills } from "@/data/content";

export default function Skills() {
  return (
    <Section id="skills" label="skills" title="Toolkit">
      <div className="grid gap-5 sm:grid-cols-2">
        {skills.map((group) => (
          <div
            key={group.label}
            className="rounded-xl border border-border bg-surface p-5"
          >
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-accent-bright">
              {group.label}
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-line bg-raised px-2.5 py-1 font-mono text-[12px] text-text"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
