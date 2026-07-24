import Section from "./Section";
import { experience } from "@/data/content";

export default function Experience() {
  return (
    <Section id="experience" label="experience" title="Where I've worked">
      <ol className="space-y-5">
        {experience.map((job) => (
          <li
            key={`${job.org}-${job.period}`}
            className="rounded-xl border border-border bg-surface p-5 sm:p-6"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
              <h3 className="text-lg font-bold">{job.role}</h3>
              <span className="whitespace-nowrap font-mono text-xs text-accent-soft">
                {job.period}
              </span>
            </div>
            <p className="mt-1 font-mono text-sm text-muted">
              {job.org}
              {job.place ? (
                <>
                  <span className="mx-2 text-border">·</span>
                  {job.place}
                </>
              ) : null}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">{job.summary}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
