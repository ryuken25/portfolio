import { liveApps } from "@/data/content";

// Signature element: a mock CLI that "runs" `arya --status` and prints the three
// live apps with green ● LIVE markers, CI-log style. The output is real HTML text
// (staggered in with CSS only), so it reads fine with JavaScript disabled.
export default function Terminal() {
  // A stable, deterministic delay per line for the reveal stagger.
  let step = 0;
  const delay = () => ({ animationDelay: `${(step++ * 90)}ms` });

  return (
    <div
      className="w-full overflow-hidden rounded-xl border border-border bg-[#0d0d14] shadow-[0_24px_60px_-30px_rgba(124,58,237,0.55)]"
      aria-label="Deployment status output from running arya --status"
    >
      {/* window chrome */}
      <div className="flex items-center gap-2 border-b border-line bg-surface/70 px-4 py-2.5">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        </span>
        <span className="ml-2 font-mono text-xs text-faint">arya@portfolio — status</span>
      </div>

      {/* body */}
      <div className="overflow-x-auto px-4 py-4 font-mono text-[13px] leading-relaxed">
        <div className="min-w-max">
          <p className="term-line" style={delay()}>
            <span className="text-accent-bright">arya@portfolio</span>
            <span className="text-faint">:</span>
            <span className="text-accent-soft">~</span>
            <span className="text-faint">$ </span>
            <span className="text-text">arya --status</span>
          </p>

          <p className="term-line mt-2 text-muted" style={delay()}>
            <span className="text-live" aria-hidden="true">✔ </span>
            resolving deployments... <span className="text-text">3 found</span>
          </p>

          <div className="mt-3 space-y-1.5" role="list">
            {liveApps.map((app) => (
              <p
                key={app.name}
                role="listitem"
                className="term-line flex items-center gap-x-3 whitespace-nowrap"
                style={delay()}
              >
                <span className="inline-flex items-center gap-1.5 text-live">
                  <span aria-hidden="true">●</span>
                  <span className="font-bold">LIVE</span>
                </span>
                <span className="w-40 text-text">{app.name}</span>
                <a
                  href={`https://${app.host}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-soft underline-offset-4 hover:underline"
                >
                  {app.host}
                </a>
              </p>
            ))}
          </div>

          <p className="term-line mt-3 text-muted" style={delay()}>
            <span className="text-live" aria-hidden="true">✔ </span>
            3/3 healthy
            <span className="text-faint"> · </span>
            50+ bots delivered
            <span className="text-faint"> · </span>
            since 2023
          </p>

          <p className="term-line mt-2" style={delay()} aria-hidden="true">
            <span className="text-accent-soft">~</span>
            <span className="text-faint">$ </span>
            <span className="inline-block h-4 w-2 translate-y-0.5 bg-accent-bright align-middle animate-blink" />
          </p>
        </div>
      </div>
    </div>
  );
}
