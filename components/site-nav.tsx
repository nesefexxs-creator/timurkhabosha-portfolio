import Link from "next/link"
import { Terminal } from "lucide-react"

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-mono text-sm">
          <span className="flex h-7 w-7 items-center justify-center rounded-md border border-border bg-card">
            <Terminal className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
          </span>
          <span className="text-foreground">
            timur<span className="text-primary">.</span>dev
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 font-mono text-xs md:flex">
          <a href="#work" className="text-muted-foreground transition-colors hover:text-foreground">
            <span className="text-primary">01.</span> work
          </a>
          <a href="#achievement" className="text-muted-foreground transition-colors hover:text-foreground">
            <span className="text-primary">02.</span> proof
          </a>
          <a href="#stack" className="text-muted-foreground transition-colors hover:text-foreground">
            <span className="text-primary">03.</span> stack
          </a>
          <a href="#contact" className="text-muted-foreground transition-colors hover:text-foreground">
            <span className="text-primary">04.</span> contact
          </a>
        </nav>

        <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          <span className="hidden sm:inline">available for work</span>
        </div>
      </div>
    </header>
  )
}
