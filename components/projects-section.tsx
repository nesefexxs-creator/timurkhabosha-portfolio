import { ArrowUpRight, Github, ShieldCheck, Zap, Database } from "lucide-react"

const safelootStack = [
  { label: "Next.js", icon: Zap },
  { label: "Prisma", icon: Database },
  { label: "Tailwind CSS", icon: ShieldCheck },
]

export function ProjectsSection() {
  return (
    <section id="work" className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <div className="mb-12 flex items-end justify-between gap-6 border-b border-border pb-6">
          <div>
            <p className="font-mono text-xs text-primary">
              <span className="text-muted-foreground">01 /</span> selected work
            </p>
            <h2 className="mt-2 text-balance text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
              Projects I&apos;ve built
            </h2>
          </div>
          <p className="hidden max-w-xs text-sm text-muted-foreground md:block">
            Production systems — not demos. Each one solves a real problem for real users.
          </p>
        </div>

        {/* SafeLoot featured card */}
        <article className="group relative overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/40">
          {/* accent line */}
          <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-primary/60 via-primary/10 to-transparent" />

          <div className="grid grid-cols-1 gap-0 lg:grid-cols-12">
            {/* Left column */}
            <div className="p-6 sm:p-8 lg:col-span-7 lg:p-10">
              <div className="flex items-center gap-3 font-mono text-xs text-muted-foreground">
                <span className="rounded border border-border bg-background px-2 py-0.5">
                  featured
                </span>
                <span>project_01</span>
                <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
                <span className="text-primary">active development</span>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-primary/30 bg-primary/10">
                  <ShieldCheck className="h-5 w-5 text-primary" aria-hidden="true" />
                </span>
                <h3 className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
                  SafeLoot
                </h3>
              </div>

              <p className="mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
                SafeLoot is an ambitious MVP of a digital goods marketplace, currently in active
                development. The core product focus is trust: escrow-protected transactions and a
                dynamic rating model that adapts as users complete deals.
              </p>

              <ul className="mt-6 space-y-2.5 font-mono text-sm">
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                  <span>
                    Escrow-first deal lifecycle: <span className="text-foreground">created</span>
                    {" "}→ <span className="text-foreground">funded</span> →{" "}
                    <span className="text-foreground">delivered</span> →{" "}
                    <span className="text-foreground">released/refunded</span>
                  </span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                  <span>
                    Dynamic reputation system recalculates buyer and seller ratings after each
                    completed or disputed deal
                  </span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                  <span>
                    MVP scope is intentionally focused on transaction safety and trust mechanics
                    before public scale
                  </span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                  <span>
                    Current stage: <span className="text-foreground">private build</span> with
                    ongoing iteration on edge cases and automated tests
                  </span>
                </li>
              </ul>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#"
                  className="group/btn inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 font-mono text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  follow build progress
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2 font-mono text-xs text-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  <Github className="h-3.5 w-3.5" aria-hidden="true" />
                  source
                </a>
              </div>
            </div>

            {/* Right column — terminal / code preview */}
            <div className="relative border-t border-border bg-background/40 p-6 sm:p-8 lg:col-span-5 lg:border-l lg:border-t-0 lg:p-8">
              <div className="mb-4 flex items-center justify-between font-mono text-[11px] text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-destructive/70" />
                  <span className="h-2 w-2 rounded-full bg-muted-foreground/40" />
                  <span className="h-2 w-2 rounded-full bg-primary/70" />
                </div>
                <span>~/safeloot/escrow.ts</span>
              </div>

              <pre className="overflow-x-auto rounded-md border border-border bg-card p-4 font-mono text-[12px] leading-relaxed">
                <code className="text-muted-foreground">{`type EscrowStatus = "created" | "funded" | "delivered" | "released" | "refunded"

export async function releaseEscrow(dealId: string, buyerId: string) {
  return prisma.$transaction(async (tx) => {
    const deal = await tx.deal.findUniqueOrThrow({ where: { id: dealId } })

    if (deal.status !== "delivered") throw new Error("Deal is not delivered yet")
    if (deal.buyerId !== buyerId) throw new Error("Only buyer can release funds")

    await tx.escrow.update({
      where: { dealId },
      data: { status: "released", releasedAt: new Date() },
    })

    return tx.wallet.update({
      where: { userId: deal.sellerId },
      data: { balance: { increment: deal.amount } },
    })
  })
}`}</code>
              </pre>

              <div className="mt-6 grid grid-cols-2 gap-2">
                {safelootStack.map((item) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2 font-mono text-[11px] text-muted-foreground"
                    >
                      <Icon className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                      {item.label}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </article>

        {/* More projects — compact row */}
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-dashed border-border bg-card/40 p-6">
            <p className="font-mono text-xs text-muted-foreground">project_02</p>
            <h4 className="mt-2 text-lg font-medium text-foreground">More coming soon</h4>
            <p className="mt-2 text-sm text-muted-foreground">
              Currently heads-down on SafeLoot v2. New case studies land here next.
            </p>
          </div>
          <div className="rounded-xl border border-dashed border-border bg-card/40 p-6">
            <p className="font-mono text-xs text-muted-foreground">project_03</p>
            <h4 className="mt-2 text-lg font-medium text-foreground">Client work</h4>
            <p className="mt-2 text-sm text-muted-foreground">
              Select freelance engagements — full-stack builds, performance audits, rescue missions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
