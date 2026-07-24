import { site } from "@/data/content";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line py-10">
      <div className="container-x flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
        <p className="text-sm text-muted">
          {site.fullName}
          <span className="mx-2 text-border">·</span>
          <span className="text-faint">{year}</span>
        </p>
        <p className="font-mono text-xs text-faint">Built with Next.js</p>
      </div>
    </footer>
  );
}
