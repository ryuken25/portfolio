import Section from "./Section";
import { alsoShipped, projects, type Badge as BadgeType } from "@/data/content";
import { CodeIcon, ExternalIcon } from "./icons";

function Badge({ badge }: { badge: BadgeType }) {
  const styles: Record<BadgeType, string> = {
    LIVE: "border-live/40 bg-live/10 text-live",
    "IN PROGRESS": "border-progress/40 bg-progress/10 text-progress",
    "CLIENT WORK": "border-accent/40 bg-accent/10 text-accent-soft",
  };
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[11px] font-bold uppercase tracking-wider ${styles[badge]}`}
    >
      {badge === "LIVE" ? (
        <span className="h-1.5 w-1.5 rounded-full bg-live" aria-hidden="true" />
      ) : null}
      {badge}
    </span>
  );
}

export default function Projects() {
  return (
    <Section
      id="projects"
      label="projects"
      title="Selected work"
      intro="Products I designed, built, and shipped — three are live in production right now."
    >
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <li
            key={p.name}
            className="card-hover flex h-full flex-col rounded-xl border border-border bg-surface p-5"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-bold leading-tight">{p.name}</h3>
              {p.badge ? <Badge badge={p.badge} /> : null}
            </div>

            <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">
              {p.description}
            </p>

            <ul className="mt-4 flex flex-wrap gap-1.5">
              {p.tech.map((t) => (
                <li
                  key={t}
                  className="rounded-md border border-line bg-raised px-2 py-0.5 font-mono text-[11px] text-faint"
                >
                  {t}
                </li>
              ))}
            </ul>

            {(p.live || p.repo) && (
              <div className="mt-4 flex flex-wrap gap-4 border-t border-line pt-4">
                {p.live ? (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-accent-soft underline-offset-4 hover:underline"
                  >
                    <ExternalIcon />
                    Live app
                  </a>
                ) : null}
                {p.repo ? (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-muted underline-offset-4 hover:text-text hover:underline"
                  >
                    <CodeIcon />
                    Code
                  </a>
                ) : null}
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* Also shipped — one compact row */}
      <div className="mt-8 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-baseline sm:gap-4">
        <span className="mono-label whitespace-nowrap text-faint">also shipped</span>
        <ul className="flex flex-wrap items-center gap-x-2 gap-y-2 font-mono text-xs text-muted">
          {alsoShipped.map((s, i) => (
            <li key={s.label} className="inline-flex items-center">
              {i > 0 ? <span className="mr-2 text-border">·</span> : null}
              {s.href ? (
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-soft underline-offset-4 hover:underline"
                >
                  {s.label}
                </a>
              ) : (
                <span className="text-text">{s.label}</span>
              )}
              {s.note ? <span className="ml-1.5 text-faint">({s.note})</span> : null}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
