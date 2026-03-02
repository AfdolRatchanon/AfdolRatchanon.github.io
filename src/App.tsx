import Navbar    from './components/Navbar'
import Hero       from './components/Hero'
import Resources  from './components/Resources'
import About      from './components/About'
import Skills     from './components/Skills'
import Experience from './components/Experience'
import Footer     from './components/Footer'
import { useTheme } from './hooks/useTheme'

export default function App() {
  const { isDark, toggle } = useTheme()

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300">
      <Navbar isDark={isDark} onToggle={toggle} />
      <main>
        <Hero />
        <Resources />
        <About />
        <Skills />
        <Experience />
      </main>
      <Footer />
    </div>
  )
}
