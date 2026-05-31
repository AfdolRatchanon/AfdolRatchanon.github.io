import Navbar      from './components/Navbar'
import Hero        from './components/Hero'
import Credibility from './components/Credibility'
import About       from './components/About'
import Projects    from './components/Projects'
import Resources   from './components/Resources'
import Skills      from './components/Skills'
import Experience  from './components/Experience'
import Footer      from './components/Footer'
import { useTheme } from './hooks/useTheme'
import { LanguageProvider } from './i18n/LanguageContext'

export default function App() {
  const { isDark, toggle } = useTheme()

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-ink-50 dark:bg-ink-950 text-ink-950 dark:text-ink-50 transition-colors duration-300">
        <Navbar isDark={isDark} onToggle={toggle} />
        <main>
          <Hero />
          <Credibility />
          <About />
          <Projects />
          {/* ── Sections below are still on the previous design —
              they will be redesigned in the next rounds. ── */}
          <Resources />
          <Skills />
          <Experience />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
