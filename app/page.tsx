import { site } from "@/data/content";
import Hero from "@/components/Hero";
import ProofStrip from "@/components/ProofStrip";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { GitHubIcon } from "@/components/icons";

export default function Home() {
  return (
    <>
      <a
        href="#projects"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-white"
      >
        Skip to projects
      </a>

      <header className="sticky top-0 z-40 border-b border-line bg-base/80 backdrop-blur supports-[backdrop-filter]:bg-base/60">
        <div className="container-x flex h-14 items-center justify-between">
          <a
            href="#top"
            className="font-mono text-sm font-bold tracking-tight text-text"
            aria-label={`${site.name} — back to top`}
          >
            <span className="text-accent-bright">AB</span>
            <span className="ml-2 hidden text-muted sm:inline">{site.name}</span>
          </a>
          <nav aria-label="Primary" className="flex items-center gap-5">
            <a href="#projects" className="hidden font-mono text-xs text-muted hover:text-text sm:inline">
              Projects
            </a>
            <a href="#skills" className="hidden font-mono text-xs text-muted hover:text-text sm:inline">
              Skills
            </a>
            <a href="#contact" className="hidden font-mono text-xs text-muted hover:text-text sm:inline">
              Contact
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-muted hover:text-accent-soft"
            >
              <GitHubIcon width={15} height={15} />
              GitHub
            </a>
          </nav>
        </div>
      </header>

      <main id="main">
        <Hero />
        <ProofStrip />
        <Projects />
        <Skills />
        <Experience />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
