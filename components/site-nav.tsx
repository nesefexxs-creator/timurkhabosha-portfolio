import Link from "next/link"
import { Terminal } from "lucide-react"
import type { Language, PageTranslations } from "@/lib/translations"

type SiteNavProps = {
  nav: PageTranslations["nav"]
  lang: Language
  setLang: (lang: Language) => void
}

const languageOptions: Language[] = ["en", "ru", "ua"]

export function SiteNav({ nav, lang, setLang }: SiteNavProps) {
  const [brandLeft, brandRight] = nav.brand.split(".")

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-mono text-sm">
          <span className="flex h-7 w-7 items-center justify-center rounded-md border border-border bg-card">
            <Terminal className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
          </span>
          <span className="text-foreground">
            {brandLeft}
            <span className="text-primary">.</span>
            {brandRight}
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 font-mono text-xs md:flex">
          <a href="#work" className="text-muted-foreground transition-colors hover:text-foreground">
            <span className="text-primary">01.</span> {nav.links.work}
          </a>
          <a href="#stack" className="text-muted-foreground transition-colors hover:text-foreground">
            <span className="text-primary">02.</span> {nav.links.stack}
          </a>
          <a href="#contact" className="text-muted-foreground transition-colors hover:text-foreground">
            <span className="text-primary">03.</span> {nav.links.contact}
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <div className="flex items-center rounded-md border border-border bg-card p-0.5 font-mono text-[10px]">
            {languageOptions.map((option) => {
              const isActive = lang === option

              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => setLang(option)}
                  className={`rounded px-2 py-1 transition-colors ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  aria-pressed={isActive}
                  aria-label={`${nav.languageLabel}: ${option.toUpperCase()}`}
                >
                  {option.toUpperCase()}
                </button>
              )
            })}
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="hidden sm:inline">{nav.availability}</span>
          </div>
        </div>
      </div>
    </header>
  )
}
