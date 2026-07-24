import Section from "./Section";
import { about, credentials, site } from "@/data/content";

export default function About() {
  return (
    <Section id="about" label="about" title="About">
      <div className="grid gap-8 sm:grid-cols-[minmax(0,13rem)_1fr] sm:gap-10 lg:grid-cols-[minmax(0,15rem)_1fr]">
        {/* Portrait */}
        <div className="w-full max-w-[13rem] sm:max-w-none">
          <div className="relative overflow-hidden rounded-xl border border-border ring-1 ring-accent/20 shadow-[0_20px_50px_-24px_rgba(124,58,237,0.5)]">
            <picture>
              <source srcSet={site.photoWebp} type="image/webp" />
              <img
                src={site.photo}
                alt={site.photoAlt}
                width={760}
                height={1014}
                loading="lazy"
                decoding="async"
                className="block h-auto w-full"
              />
            </picture>
            {/* quiet violet blend so the photo sits in the theme */}
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-base/45 via-transparent to-transparent"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Copy */}
        <div>
          <div className="max-w-2xl space-y-4 text-base leading-relaxed text-muted">
            {about.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>

          <p className="mt-6 max-w-2xl border-l-2 border-accent/50 pl-4 font-mono text-xs leading-relaxed text-faint">
            {credentials}
          </p>
        </div>
      </div>
    </Section>
  );
}
