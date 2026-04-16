import { Star, TrendingUp, Users, Award } from "lucide-react"

const metrics = [
  { label: "verified reviews", value: "1,400+", icon: Star },
  { label: "avg. rating", value: "4.97 / 5", icon: Award },
  { label: "repeat clients", value: "38%", icon: Users },
  { label: "on-time delivery", value: "99.2%", icon: TrendingUp },
]

export function AchievementSection() {
  return (
    <section
      id="achievement"
      className="relative overflow-hidden border-b border-border/60 bg-card/30"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--foreground) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <div className="mb-12 flex items-end justify-between gap-6 border-b border-border pb-6">
          <div>
            <p className="font-mono text-xs text-primary">
              <span className="text-muted-foreground">02 /</span> proof of work
            </p>
            <h2 className="mt-2 text-balance text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
              Trusted by the marketplace
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Hero stat */}
          <div className="relative overflow-hidden rounded-xl border border-border bg-background p-8 sm:p-10 lg:col-span-7">
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
                <Star className="h-3 w-3 fill-primary" aria-hidden="true" />
                marketplace achievement
              </div>

              <div className="mt-8 flex items-baseline gap-3">
                <span className="font-sans text-7xl font-medium tracking-tight text-foreground tabular-nums sm:text-8xl md:text-9xl">
                  1400
                </span>
                <span className="font-sans text-4xl font-medium text-primary sm:text-5xl">+</span>
              </div>

              <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
                Over <span className="font-mono text-foreground">1,400 verified reviews</span>{" "}
                earned across a major freelance marketplace — built one delivered project at a time,
                with a near-perfect rating and clients who keep coming back.
              </p>

              {/* star row */}
              <div className="mt-6 flex items-center gap-2">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-primary text-primary"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <span className="font-mono text-sm text-muted-foreground">
                  4.97 average · 1,400+ reviews
                </span>
              </div>
            </div>
          </div>

          {/* Metrics grid */}
          <div className="grid grid-cols-2 gap-4 lg:col-span-5">
            {metrics.map((m) => {
              const Icon = m.icon
              return (
                <div
                  key={m.label}
                  className="flex flex-col justify-between rounded-xl border border-border bg-background p-5 transition-colors hover:border-primary/40"
                >
                  <div className="flex items-center justify-between">
                    <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
                    <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      live
                    </span>
                  </div>
                  <div className="mt-8">
                    <p className="font-sans text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
                      {m.value}
                    </p>
                    <p className="mt-1 font-mono text-[11px] text-muted-foreground">{m.label}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* review strip */}
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            {
              quote:
                "Shipped faster than I expected and the code was genuinely clean. Rare combo.",
              author: "Marketplace client",
              rating: 5,
            },
            {
              quote:
                "Handled a tricky Stripe integration like it was nothing. Will hire again.",
              author: "Marketplace client",
              rating: 5,
            },
            {
              quote:
                "Fixed issues three other devs couldn't. Communicative and fast.",
              author: "Marketplace client",
              rating: 5,
            },
          ].map((r, i) => (
            <figure
              key={i}
              className="rounded-xl border border-border bg-background p-5"
            >
              <div className="flex items-center gap-0.5">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star key={j} className="h-3.5 w-3.5 fill-primary text-primary" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="mt-3 text-sm leading-relaxed text-foreground">
                &ldquo;{r.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-3 font-mono text-[11px] text-muted-foreground">
                — {r.author}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
