import { proof } from "@/data/content";

export default function ProofStrip() {
  return (
    <section aria-label="Track record" className="container-x">
      <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
        {proof.map((item) => (
          <div key={item.label} className="bg-surface px-6 py-6 sm:py-7">
            <dt className="sr-only">{item.label}</dt>
            <dd>
              <span className="block font-display text-3xl font-bold text-accent-soft sm:text-4xl">
                {item.value}
              </span>
              <span className="mt-1 block font-mono text-xs uppercase tracking-[0.14em] text-muted">
                {item.label}
              </span>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
