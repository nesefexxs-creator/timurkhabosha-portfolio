import { SiteNav } from "@/components/site-nav"
import { HeroSection } from "@/components/hero-section"
import { ProjectsSection } from "@/components/projects-section"
import { AchievementSection } from "@/components/achievement-section"
import { StackSection } from "@/components/stack-section"
import { ContactSection } from "@/components/contact-section"

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <HeroSection />
      <ProjectsSection />
      <AchievementSection />
      <StackSection />
      <ContactSection />
    </main>
  )
}
