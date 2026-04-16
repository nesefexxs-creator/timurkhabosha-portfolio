import { ArrowUpRight, Mail, Github, Linkedin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 bottom-0 h-[320px] w-[700px] -translate-x-1/2 translate-y-1/2 rounded-full bg-primary/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <div className="mb-10">
          <p className="font-mono text-xs text-primary">
            <span className="text-muted-foreground">04 /</span> contact
          </p>
          <h2 className="mt-2 text-balance text-3xl font-medium tracking-tight text-foreground sm:text-5xl">
            Have something worth building?
          </h2>
          <p className="mt-4 max-w-xl text-pretty text-muted-foreground">
            I take on a small number of projects at a time so I can go deep. If your idea needs a
            developer who ships — let&apos;s talk.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <a
            href="mailto:hello@timur.dev"
            className="group flex items-center justify-between rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background">
                <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
              </span>
              <div>
                <p className="font-mono text-[11px] text-muted-foreground">email</p>
                <p className="font-mono text-sm text-foreground">hello@timur.dev</p>
              </div>
            </div>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
          </a>

          <a
            href="#"
            className="group flex items-center justify-between rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background">
                <Github className="h-4 w-4 text-primary" aria-hidden="true" />
              </span>
              <div>
                <p className="font-mono text-[11px] text-muted-foreground">github</p>
                <p className="font-mono text-sm text-foreground">@timurkhabosha</p>
              </div>
            </div>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
          </a>

          <a
            href="#"
            className="group flex items-center justify-between rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background">
                <Linkedin className="h-4 w-4 text-primary" aria-hidden="true" />
              </span>
              <div>
                <p className="font-mono text-[11px] text-muted-foreground">linkedin</p>
                <p className="font-mono text-sm text-foreground">in/timurkhabosha</p>
              </div>
            </div>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
          </a>
        </div>

        <footer className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 font-mono text-[11px] text-muted-foreground sm:flex-row sm:items-center">
          <p>
            <span className="text-primary">$</span> echo &quot;built by Timur Khabosha · {new Date().getFullYear()}&quot;
          </p>
          <p>v2.0.1 · last deploy just now</p>
        </footer>
      </div>
    </section>
  )
}
