"use client"

import { useEffect, useState } from "react"
import { SiteNav } from "@/components/site-nav"
import { HeroSection } from "@/components/hero-section"
import { ProjectsSection } from "@/components/projects-section"
import { AchievementSection } from "@/components/achievement-section"
import { StackSection } from "@/components/stack-section"
import { ContactSection } from "@/components/contact-section"
import { translations, type Language } from "@/lib/translations"

const LANG_STORAGE_KEY = "site-language"

function isLanguage(value: string): value is Language {
  return value in translations
}

export default function Page() {
  const [lang, setLang] = useState<Language>("en")

  useEffect(() => {
    const savedLang = window.localStorage.getItem(LANG_STORAGE_KEY)

    if (savedLang && isLanguage(savedLang)) {
      setLang(savedLang)
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem(LANG_STORAGE_KEY, lang)
  }, [lang])

  const t = translations[lang]

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteNav nav={t.nav} lang={lang} setLang={setLang} />
      <HeroSection hero={t.hero} />
      <ProjectsSection projects={t.projects} />
      <AchievementSection achievement={t.achievement} />
      <StackSection stack={t.stack} />
      <ContactSection contact={t.contact} />
    </main>
  )
}
