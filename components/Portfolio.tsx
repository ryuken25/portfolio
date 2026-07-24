"use client";

import { CSSProperties, ReactNode, useEffect, useRef, useState } from "react";
import {
  about,
  alsoShipped,
  badgeStyles,
  contactCopy,
  credentials,
  experience,
  filters,
  type Filter,
  projects,
  type Project,
  site,
  skills,
  terminalLines,
} from "@/data/content";

const mono = "'JetBrains Mono', monospace";
const display = "'Space Grotesk', sans-serif";

function prefersReduced() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function matchesFilter(p: Project, filter: Filter) {
  if (filter === "All") return true;
  if (filter === "Live") return p.badge === "LIVE";
  if (filter === "Client work") return p.badge === "CLIENT WORK";
  if (filter === "AI & Automation")
    return (
      p.name === "Automation bots" ||
      p.tags.some((t) => /Whisper|ML|Playwright|FastAPI/.test(t))
    );
  return true;
}

const NAV_IDS = ["projects", "skills", "experience", "contact"] as const;

export default function Portfolio() {
  const rootRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  // Terminal starts fully populated so it reads correctly with JS disabled / during SSR.
  const [count, setCount] = useState(terminalLines.length);
  const [filter, setFilter] = useState<Filter>("All");
  const [active, setActive] = useState<string | null>(null);

  // Typed terminal reveal.
  useEffect(() => {
    if (prefersReduced()) return;
    setCount(0);
    let n = 0;
    const timer = setInterval(() => {
      n += 1;
      setCount(n);
      if (n >= terminalLines.length) clearInterval(timer);
    }, 340);
    return () => clearInterval(timer);
  }, []);

  // Scroll progress bar + scroll-spy.
  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      if (progressRef.current) {
        progressRef.current.style.width =
          (max > 0 ? (window.scrollY / max) * 100 : 0) + "%";
      }
      let current: string | null = null;
      for (const id of NAV_IDS) {
        const sec = document.getElementById(id);
        if (sec && sec.getBoundingClientRect().top <= window.innerHeight * 0.35) {
          current = id;
        }
      }
      const atBottom =
        window.innerHeight + window.scrollY >= doc.scrollHeight - 80;
      if (atBottom) current = NAV_IDS[NAV_IDS.length - 1];
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Reveal-on-scroll (blur + rise). Skipped entirely under reduced motion.
  useEffect(() => {
    if (prefersReduced()) return;
    const root = rootRef.current;
    if (!root) return;
    const targets = Array.from(
      root.querySelectorAll<HTMLElement>("section > *, article"),
    ).filter((el) => !el.closest("nav") && el.tagName !== "IMG");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          const delay = (Number(el.dataset.revealIndex) || 0) * 70;
          el.style.transitionDelay = delay + "ms";
          el.style.opacity = "1";
          el.style.transform = "none";
          el.style.filter = "none";
          io.unobserve(el);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );

    targets.forEach((el, i) => {
      el.dataset.revealIndex = String(i % 5);
      el.style.opacity = "0";
      el.style.transform = "translateY(26px) scale(0.985)";
      el.style.filter = "blur(6px)";
      el.style.transition =
        "opacity 0.7s cubic-bezier(0.22,0.61,0.36,1), transform 0.7s cubic-bezier(0.22,0.61,0.36,1), filter 0.7s ease";
      el.style.willChange = "opacity, transform";
      io.observe(el);
    });

    return () => io.disconnect();
  }, []);

  const shown = projects.filter((p) => matchesFilter(p, filter));

  const navLinkStyle = (id: string): CSSProperties =>
    active === id
      ? { color: "#e7ecf5", borderBottom: "1px solid #4c8df6" }
      : {};

  return (
    <div ref={rootRef}>
      {/* scroll progress */}
      <div
        ref={progressRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: 2,
          width: "0%",
          background: "linear-gradient(90deg,#4c8df6,#8fb8fb)",
          zIndex: 60,
          transition: "width 0.1s linear",
          pointerEvents: "none",
        }}
      />

      <a
        href="#projects"
        style={{
          position: "absolute",
          left: -9999,
          top: 0,
          zIndex: 100,
        }}
        onFocus={(e) => {
          Object.assign(e.currentTarget.style, {
            left: "16px",
            top: "16px",
            background: "#4c8df6",
            color: "#fff",
            padding: "8px 14px",
            borderRadius: "8px",
            fontFamily: mono,
            fontSize: "13px",
          });
        }}
        onBlur={(e) => {
          e.currentTarget.style.left = "-9999px";
        }}
      >
        Skip to projects
      </a>

      <div style={{ minHeight: "100vh", background: "#07090f", padding: "0 clamp(18px, 5vw, 64px)" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          {/* NAV */}
          <nav
            aria-label="Primary"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "clamp(12px, 2vw, 26px)",
              alignItems: "center",
              padding: "20px 0",
              position: "sticky",
              top: 0,
              background: "rgba(11,10,15,0.9)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              zIndex: 20,
              borderBottom: "1px solid #161c28",
            }}
          >
            <a
              href="#top"
              style={{
                fontFamily: display,
                fontWeight: 700,
                fontSize: 15,
                letterSpacing: "-0.01em",
                color: "#e7ecf5",
                marginRight: "auto",
              }}
            >
              {site.name}
            </a>
            {NAV_IDS.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className="nav-link"
                style={{ fontFamily: mono, fontSize: 12, letterSpacing: "0.04em", ...navLinkStyle(id) }}
              >
                {id}
              </a>
            ))}
          </nav>

          {/* HERO */}
          <section
            id="top"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))",
              gap: "clamp(28px, 5vw, 56px)",
              alignItems: "center",
              padding: "clamp(44px, 8vw, 100px) 0 clamp(36px, 6vw, 68px)",
            }}
          >
            <div style={{ animation: "riseIn 0.5s ease both" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 22 }}>
                <picture>
                  <source srcSet={site.photoWebp} type="image/webp" />
                  <img
                    src={site.photo}
                    alt={site.photoAlt}
                    width={84}
                    height={84}
                    style={{
                      width: 84,
                      height: 84,
                      flex: "none",
                      borderRadius: "50%",
                      objectFit: "cover",
                      objectPosition: "center top",
                      border: "1px solid #232b3b",
                    }}
                  />
                </picture>
                <p
                  style={{
                    fontFamily: mono,
                    fontSize: 12,
                    color: "#4c8df6",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    margin: 0,
                    lineHeight: 1.6,
                  }}
                >
                  {site.locationLine1}
                  <br />
                  {site.locationLine2}
                </p>
              </div>
              <h1
                style={{
                  fontFamily: display,
                  fontWeight: 700,
                  fontSize: "clamp(38px, 6.6vw, 66px)",
                  lineHeight: 0.98,
                  letterSpacing: "-0.035em",
                  margin: "0 0 14px",
                }}
              >
                {site.name}
              </h1>
              <p
                style={{
                  fontFamily: display,
                  fontSize: "clamp(17px, 2.2vw, 21px)",
                  color: "#b3bdcd",
                  margin: "0 0 18px",
                  lineHeight: 1.3,
                }}
              >
                {site.title}
              </p>
              <p
                style={{
                  fontSize: "clamp(15px, 1.7vw, 17px)",
                  lineHeight: 1.6,
                  color: "#949eb0",
                  maxWidth: "46ch",
                  margin: "0 0 10px",
                  textWrap: "pretty",
                }}
              >
                {site.heroOneLiner}
              </p>
              <p
                style={{
                  fontFamily: mono,
                  fontSize: 12.5,
                  lineHeight: 1.6,
                  color: "#6c7688",
                  margin: "0 0 30px",
                }}
              >
                {site.relocation}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10, alignItems: "center" }}>
                <a href="#projects" className="btn-primary" style={ctaPrimary}>
                  View projects
                </a>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                  style={ctaGhost}
                >
                  GitHub
                </a>
                <a href={`mailto:${site.email}`} className="btn-ghost" style={ctaGhost}>
                  Email me
                </a>
              </div>
              <p style={{ margin: "18px 0 0" }}>
                <a
                  href={site.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="res-link"
                  style={{
                    fontFamily: mono,
                    fontSize: 12.5,
                    color: "#8b95a7",
                    borderBottom: "1px solid #232b3b",
                    paddingBottom: 2,
                  }}
                >
                  Download resume (PDF)
                </a>
              </p>
            </div>

            {/* Terminal */}
            <div
              style={{
                border: "1px solid #1e2534",
                borderRadius: 12,
                background: "#0d111a",
                overflow: "hidden",
                boxShadow: "0 24px 60px -30px rgba(76,141,246,0.45)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "11px 14px",
                  borderBottom: "1px solid #1a202c",
                  background: "#101724",
                }}
              >
                <span style={dot} />
                <span style={dot} />
                <span style={dot} />
                <span style={{ fontFamily: mono, fontSize: 11, color: "#6c7688", marginLeft: 6 }}>
                  {site.cliHandle}@status — deploy log
                </span>
              </div>
              <div
                style={{
                  padding: "16px 16px 20px",
                  fontFamily: mono,
                  fontSize: 12.5,
                  lineHeight: 1.85,
                  minHeight: 268,
                }}
              >
                {terminalLines.slice(0, count).map((line, i) => (
                  <div
                    key={i}
                    style={{ display: "flex", gap: 8, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}
                  >
                    <span style={{ color: line.tone, flex: "none" }}>{line.mark}</span>
                    <span style={{ color: "#cdd6e4", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {line.text}
                    </span>
                  </div>
                ))}
                <div style={{ display: "flex", gap: 8, alignItems: "center", color: "#4c8df6" }}>
                  <span>$</span>
                  <span
                    style={{
                      width: 8,
                      height: 15,
                      background: "#4c8df6",
                      display: "inline-block",
                      animation: "blink 1.05s step-end infinite",
                    }}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* PROOF STRIP */}
          <section
            aria-label="Track record"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "clamp(16px, 4vw, 52px)",
              padding: "clamp(28px, 5vw, 40px) 0 clamp(52px, 8vw, 88px)",
              borderTop: "1px solid #161c28",
              borderBottom: "1px solid #161c28",
              marginBottom: "clamp(52px, 8vw, 88px)",
            }}
          >
            {[
              ["3", "live apps in production"],
              ["50+", "automation bots delivered"],
              ["2023", "freelancing since"],
            ].map(([value, label]) => (
              <div key={label}>
                <p style={{ fontFamily: display, fontWeight: 700, fontSize: "clamp(26px, 3.4vw, 34px)", margin: 0, letterSpacing: "-0.02em" }}>
                  {value}
                </p>
                <p style={{ fontFamily: mono, fontSize: 11.5, color: "#798395", margin: "4px 0 0", letterSpacing: "0.05em" }}>
                  {label}
                </p>
              </div>
            ))}
          </section>

          {/* PROJECTS */}
          <section id="projects" style={{ paddingBottom: "clamp(52px, 8vw, 88px)" }}>
            <h2 style={h2Style}>Projects</h2>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 8, margin: "-6px 0 20px" }}>
              {filters.map((f) => {
                const on = f === filter;
                return (
                  <button
                    key={f}
                    type="button"
                    onClick={() => setFilter(f)}
                    aria-pressed={on}
                    className="filter-btn"
                    style={{
                      fontFamily: mono,
                      fontSize: 11.5,
                      letterSpacing: "0.04em",
                      padding: "9px 14px",
                      borderRadius: 999,
                      cursor: "pointer",
                      color: on ? "#07090f" : "#8b95a7",
                      background: on ? "#4c8df6" : "transparent",
                      border: `1px solid ${on ? "#6ba0f8" : "#1e2534"}`,
                    }}
                  >
                    {f}
                  </button>
                );
              })}
              <span style={{ fontFamily: mono, fontSize: 11, color: "#6c7688", marginLeft: "auto" }}>
                {shown.length} / {projects.length}
              </span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(288px, 1fr))", gap: 16 }}>
              {shown.map((p) => {
                const bs = p.badge ? badgeStyles[p.badge] : null;
                return (
                  <article
                    key={p.name}
                    className="card"
                    style={{
                      border: "1px solid #1b2130",
                      borderRadius: 12,
                      background: "#0d111a",
                      padding: 20,
                      display: "flex",
                      flexDirection: "column",
                      gap: 12,
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 10 }}>
                      <h3 style={{ fontFamily: display, fontWeight: 700, fontSize: 17.5, margin: 0, letterSpacing: "-0.015em" }}>
                        {p.name}
                      </h3>
                      {bs ? (
                        <span
                          style={{
                            fontFamily: mono,
                            fontSize: 9.5,
                            letterSpacing: "0.1em",
                            padding: "4px 7px",
                            borderRadius: 4,
                            whiteSpace: "nowrap",
                            flex: "none",
                            color: bs.fg,
                            background: bs.bg,
                            border: `1px solid ${bs.bd}`,
                          }}
                        >
                          {p.badge}
                        </span>
                      ) : null}
                    </div>
                    <p style={{ fontSize: 14, lineHeight: 1.6, color: "#939daf", margin: 0, textWrap: "pretty" }}>
                      {p.desc}
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: "auto" }}>
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          style={{ fontFamily: mono, fontSize: 10.5, color: "#878fa1", border: "1px solid #1e2534", borderRadius: 4, padding: "3px 7px" }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    {(p.live || p.repo) && (
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 14, paddingTop: 4 }}>
                        {p.live ? (
                          <a
                            href={p.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-live"
                            style={{ fontFamily: mono, fontSize: 11.5, color: "#8fb8fb", borderBottom: "1px solid #2c364a", paddingBottom: 2 }}
                          >
                            open live →
                          </a>
                        ) : null}
                        {p.repo ? (
                          <a
                            href={p.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-repo"
                            style={{ fontFamily: mono, fontSize: 11.5, color: "#8b95a7", borderBottom: "1px solid #232b3b", paddingBottom: 2 }}
                          >
                            repo
                          </a>
                        ) : null}
                      </div>
                    )}
                  </article>
                );
              })}
            </div>

            <div style={{ marginTop: 22, display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px 14px" }}>
              <span style={{ fontFamily: mono, fontSize: 11, color: "#6c7688", letterSpacing: "0.08em" }}>ALSO SHIPPED</span>
              {alsoShipped.map((s) =>
                s.href ? (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="also-link"
                    style={{ fontFamily: mono, fontSize: 11.5, color: "#8b95a7" }}
                  >
                    {s.label}
                  </a>
                ) : (
                  <span key={s.label} style={{ fontFamily: mono, fontSize: 11.5, color: "#6c7688" }}>
                    {s.label}
                  </span>
                ),
              )}
            </div>
          </section>

          {/* SKILLS */}
          <section id="skills" style={{ paddingBottom: "clamp(52px, 8vw, 88px)" }}>
            <h2 style={h2Style}>Skills</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(288px, 1fr))", gap: 16 }}>
              {skills.map((g) => (
                <div key={g.group} style={{ borderTop: "1px solid #1b2130", paddingTop: 14 }}>
                  <p style={{ fontFamily: mono, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "#4c8df6", margin: "0 0 12px" }}>
                    {g.group}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {g.items.map((s) => (
                      <span
                        key={s}
                        style={{ fontFamily: mono, fontSize: 11.5, color: "#b3bdcd", background: "#11161f", border: "1px solid #1b2130", borderRadius: 5, padding: "5px 9px" }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* EXPERIENCE */}
          <section id="experience" style={{ paddingBottom: "clamp(52px, 8vw, 88px)" }}>
            <h2 style={h2Style}>Experience</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {experience.map((job) => (
                <div
                  key={job.role}
                  style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "8px 32px", borderTop: "1px solid #1b2130", paddingTop: 18 }}
                >
                  <div>
                    <h3 style={{ fontFamily: display, fontWeight: 700, fontSize: 17, margin: "0 0 4px" }}>{job.role}</h3>
                    <p style={{ fontFamily: mono, fontSize: 11.5, color: "#798395", margin: 0 }}>{job.meta}</p>
                  </div>
                  <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "#939daf", margin: 0, textWrap: "pretty" }}>{job.summary}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ABOUT */}
          <section
            style={{
              paddingBottom: "clamp(52px, 8vw, 88px)",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(288px, 1fr))",
              gap: "20px 40px",
              borderTop: "1px solid #161c28",
              paddingTop: "clamp(28px, 5vw, 40px)",
            }}
          >
            <h2 style={{ ...h2Style, margin: 0 }}>About</h2>
            <div>
              <p style={{ fontSize: "clamp(15px, 1.7vw, 17px)", lineHeight: 1.7, color: "#abb5c6", margin: "0 0 14px", textWrap: "pretty" }}>
                {about}
              </p>
              <p style={{ fontFamily: mono, fontSize: 11.5, lineHeight: 1.7, color: "#6c7688", margin: 0 }}>{credentials}</p>
            </div>
          </section>

          {/* CONTACT */}
          <section
            id="contact"
            style={{ paddingBottom: "clamp(48px, 7vw, 72px)", borderTop: "1px solid #161c28", paddingTop: "clamp(28px, 5vw, 44px)" }}
          >
            <h2 style={{ ...h2Style, fontSize: "clamp(26px, 3.4vw, 36px)", margin: "0 0 12px" }}>Contact</h2>
            <p style={{ fontSize: "clamp(15px, 1.7vw, 17px)", lineHeight: 1.6, color: "#939daf", margin: "0 0 24px", maxWidth: "52ch" }}>
              {contactCopy}
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: 12 }}>
              <ContactCard
                href={`mailto:${site.email}`}
                primary
                icon={
                  <>
                    <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
                    <path d="M3 6.5l9 6.5 9-6.5" />
                  </>
                }
                label="EMAIL"
                value={site.email}
              />
              <ContactCard
                href={site.whatsapp}
                external
                icon={
                  <>
                    <path d="M12 3a9 9 0 0 0-7.7 13.7L3 21l4.4-1.3A9 9 0 1 0 12 3z" />
                    <path d="M9 8.6c0 3.2 2.6 5.8 5.8 5.8 0 0 .9-.1.9-1.1 0-.6-1.5-1.2-1.9-1-.3.2-.5.8-.9.7-1-.3-2.2-1.5-2.5-2.5-.1-.4.5-.6.7-.9.2-.4-.4-1.9-1-1.9-1 0-1.1.9-1.1.9z" />
                  </>
                }
                label="WHATSAPP"
                value="Chat on WhatsApp"
              />
              <ContactCard
                href={site.telegram}
                external
                icon={
                  <>
                    <path d="M21.5 3.8L2.9 10.9c-.6.2-.6 1 0 1.2l4.4 1.5 1.6 5c.2.6 1 .7 1.3.2l2.3-3.2 4.6 3.4c.5.4 1.2.1 1.3-.5l3.7-13.6c.2-.7-.5-1.3-1.1-1.1z" />
                    <path d="M7.3 13.6l10.9-7.4-6.4 8.9" />
                  </>
                }
                label="TELEGRAM"
                value={`@${site.telegramHandle}`}
              />
              <ContactCard
                href={site.github}
                external
                icon={
                  <>
                    <path d="M9 7l-5 5 5 5" />
                    <path d="M15 7l5 5-5 5" />
                  </>
                }
                label="GITHUB"
                value={site.githubHandle}
              />
            </div>
          </section>

          {/* FOOTER */}
          <footer
            style={{ borderTop: "1px solid #161c28", padding: "22px 0 34px", display: "flex", flexWrap: "wrap", gap: "8px 18px", justifyContent: "space-between" }}
          >
            <p style={{ fontFamily: mono, fontSize: 11.5, color: "#6c7688", margin: 0 }}>{site.fullName}</p>
            <p style={{ fontFamily: mono, fontSize: 11.5, color: "#6c7688", margin: 0 }}>2026</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

const ctaPrimary: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  padding: "13px 22px",
  borderRadius: 8,
  background: "#4c8df6",
  color: "#fff",
  fontWeight: 600,
  fontSize: 14.5,
  border: "1px solid #6ba0f8",
  minHeight: 44,
};

const ctaGhost: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  padding: "13px 22px",
  borderRadius: 8,
  background: "#11161f",
  color: "#e7ecf5",
  fontWeight: 600,
  fontSize: 14.5,
  border: "1px solid #1e2534",
  minHeight: 44,
};

const dot: CSSProperties = { width: 9, height: 9, borderRadius: "50%", background: "#2a3245" };

const h2Style: CSSProperties = {
  fontFamily: display,
  fontWeight: 700,
  fontSize: "clamp(24px, 3vw, 32px)",
  letterSpacing: "-0.025em",
  margin: "0 0 26px",
};

function ContactCard({
  href,
  icon,
  label,
  value,
  primary,
  external,
}: {
  href: string;
  icon: ReactNode;
  label: string;
  value: string;
  primary?: boolean;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`contact-card ${primary ? "contact-primary" : "contact-ghost"}`}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "16px 18px",
        borderRadius: 10,
        background: primary ? "#4c8df6" : "#11161f",
        color: primary ? "#fff" : "#e7ecf5",
        border: `1px solid ${primary ? "#6ba0f8" : "#1e2534"}`,
        minHeight: 44,
      }}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ flex: "none" }}
        aria-hidden="true"
      >
        {icon}
      </svg>
      <span style={{ display: "flex", flexDirection: "column", gap: 2, minWidth: 0 }}>
        <span style={{ fontFamily: mono, fontSize: 10, letterSpacing: "0.12em", color: primary ? undefined : "#6c7688", opacity: primary ? 0.8 : 1 }}>
          {label}
        </span>
        <span style={{ fontWeight: 600, fontSize: 13.5, overflow: "hidden", textOverflow: "ellipsis" }}>{value}</span>
      </span>
    </a>
  );
}
