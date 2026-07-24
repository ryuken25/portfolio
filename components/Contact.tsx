import Section from "./Section";
import { contact, site } from "@/data/content";
import { GitHubIcon, MailIcon, TelegramIcon } from "./icons";

export default function Contact() {
  return (
    <Section id="contact" label="contact" title="Get in touch">
      <div className="rounded-xl border border-border bg-surface p-6 sm:p-8">
        <p className="max-w-xl text-lg text-text">{contact.copy}</p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a href={`mailto:${site.email}`} className="btn btn-primary">
            <MailIcon />
            {site.email}
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            <GitHubIcon />
            {site.githubHandle}
          </a>
          <a
            href={site.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            <TelegramIcon />
            @{site.telegramHandle}
          </a>
        </div>

        <p className="mt-6 inline-flex items-center gap-2 font-mono text-xs text-muted">
          <span className="h-2 w-2 rounded-full bg-live" aria-hidden="true" />
          {contact.availability}
        </p>
      </div>
    </Section>
  );
}
