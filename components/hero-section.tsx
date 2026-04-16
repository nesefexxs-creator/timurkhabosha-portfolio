import { ArrowUpRight, MapPin } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      {/* grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />
      {/* glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-20 md:grid-cols-12 md:gap-12 md:px-6 md:py-28 lg:py-32">
        <div className="md:col-span-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 font-mono text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
            <span>currently shipping</span>
            <span className="text-foreground">SafeLoot v2</span>
          </div>

          <h1 className="text-balance font-sans text-4xl font-medium tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Timur Khabosha
          </h1>

          <p className="mt-4 font-mono text-sm text-muted-foreground sm:text-base">
            <span className="text-primary">{">"}</span> Full-stack Developer
            <span className="ml-2 inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-primary align-middle" />
          </p>

          <p className="mt-8 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            I design and build reliable web products end to end — from database schemas and APIs to
            interfaces people actually trust. Obsessed with performance, clean architecture, and
            shipping work that holds up under real traffic.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 font-mono text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              view projects
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 font-mono text-xs text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              get in touch
            </a>
          </div>
        </div>

        {/* Info card */}
        <aside className="md:col-span-4">
          <div className="rounded-lg border border-border bg-card/80 p-5 font-mono text-xs shadow-lg shadow-black/20">
            <div className="flex items-center gap-1.5 border-b border-border pb-3">
              <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" aria-hidden="true" />
              <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" aria-hidden="true" />
              <span className="h-2.5 w-2.5 rounded-full bg-primary/70" aria-hidden="true" />
              <span className="ml-2 text-[11px] text-muted-foreground">about.json</span>
            </div>

            <pre className="mt-4 whitespace-pre-wrap leading-relaxed text-muted-foreground">
              <span className="text-muted-foreground/60">{"{"}</span>
              {"\n  "}
              <span className="text-foreground">"role"</span>
              <span>: </span>
              <span className="text-primary">"Full-stack Developer"</span>
              <span>,</span>
              {"\n  "}
              <span className="text-foreground">"focus"</span>
              <span>: [</span>
              <span className="text-primary">"TypeScript"</span>
              <span>, </span>
              <span className="text-primary">"Next.js"</span>
              <span>, </span>
              <span className="text-primary">"APIs"</span>
              <span>],</span>
              {"\n  "}
              <span className="text-foreground">"shipping"</span>
              <span>: </span>
              <span className="text-primary">"SafeLoot"</span>
              <span>,</span>
              {"\n  "}
              <span className="text-foreground">"reviews"</span>
              <span>: </span>
              <span className="text-primary">1400</span>
              <span>,</span>
              {"\n  "}
              <span className="text-foreground">"status"</span>
              <span>: </span>
              <span className="text-primary">"available"</span>
              {"\n"}
              <span className="text-muted-foreground/60">{"}"}</span>
            </pre>

            <div className="mt-5 flex items-center gap-2 border-t border-border pt-3 text-[11px] text-muted-foreground">
              <MapPin className="h-3 w-3" aria-hidden="true" />
              <span>Remote · UTC+3</span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}
