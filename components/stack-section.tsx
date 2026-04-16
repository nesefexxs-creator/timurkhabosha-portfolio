import type { PageTranslations } from "@/lib/translations"

type StackSectionProps = {
  stack: PageTranslations["stack"]
}

export function StackSection({ stack }: StackSectionProps) {
  return (
    <section id="stack" className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <div className="mb-12 flex items-end justify-between gap-6 border-b border-border pb-6">
          <div>
            <p className="font-mono text-xs text-primary">
              <span className="text-muted-foreground">03 /</span> {stack.sectionKicker}
            </p>
            <h2 className="mt-2 text-balance text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
              {stack.sectionTitle}
            </h2>
          </div>
          <p className="hidden max-w-xs text-sm text-muted-foreground md:block">
            {stack.sectionDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stack.groups.map((g) => (
            <div
              key={g.label}
              className="rounded-xl border border-border bg-card p-5"
            >
              <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                <span className="text-primary">#</span>
                {g.label}
              </div>
              <ul className="mt-4 space-y-2">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 font-mono text-sm text-foreground"
                  >
                    <span className="h-1 w-1 rounded-full bg-primary/70" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
