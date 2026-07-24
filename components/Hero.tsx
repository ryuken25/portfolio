import { site } from "@/data/content";
import Terminal from "./Terminal";
import {
  ArrowDownIcon,
  DownloadIcon,
  GitHubIcon,
  MailIcon,
} from "./icons";

export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-name"
      className="container-x pt-16 pb-14 sm:pt-24 sm:pb-20"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        {/* Left: identity */}
        <div className="animate-rise-in">
          <p className="mono-label">
            <span className="text-faint">// </span>
            {site.title}
          </p>

          <h1
            id="hero-name"
            className="mt-4 text-4xl font-extrabold leading-[1.05] sm:text-6xl"
          >
            {site.name}
          </h1>

          <p className="mt-5 max-w-xl text-lg text-muted sm:text-xl">
            {site.heroOneLiner}
          </p>

          <p className="mt-5 font-mono text-sm text-faint">
            {site.location}
            <span className="mx-2 text-border">|</span>
            <span className="text-accent-soft">{site.relocation}</span>
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn btn-primary">
              View projects
              <ArrowDownIcon />
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              <GitHubIcon />
              GitHub
            </a>
            <a href={`mailto:${site.email}`} className="btn btn-ghost">
              <MailIcon />
              Email me
            </a>
          </div>

          <a
            href={site.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-1.5 font-mono text-sm text-muted underline-offset-4 hover:text-accent-soft hover:underline"
          >
            <DownloadIcon />
            Download resume (PDF)
          </a>
        </div>

        {/* Right: signature terminal */}
        <div className="animate-rise-in lg:pl-2" style={{ animationDelay: "120ms" }}>
          <Terminal />
        </div>
      </div>
    </section>
  );
}
