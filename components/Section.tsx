import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  label: string;
  title: string;
  intro?: string;
  children: ReactNode;
}

// Mono "// label" heading style — ties the section markers to the terminal theme,
// and deliberately avoids big 01 / 02 / 03 section numbers.
export default function Section({ id, label, title, intro, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="scroll-mt-8 border-t border-line py-16 sm:py-24"
    >
      <div className="container-x">
        <p className="mono-label">
          <span className="text-faint">// </span>
          {label}
        </p>
        <h2 id={`${id}-title`} className="mt-3 text-2xl font-bold sm:text-3xl">
          {title}
        </h2>
        {intro ? (
          <p className="mt-3 max-w-2xl text-muted">{intro}</p>
        ) : null}
        <div className="mt-8 sm:mt-10">{children}</div>
      </div>
    </section>
  );
}
