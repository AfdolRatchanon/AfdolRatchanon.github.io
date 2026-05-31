import { motion } from 'framer-motion'
import {
  GraduationCap, Code2, Network,
  Figma, Cloud, Github, BookOpen, BookText, Palette, Send, Server, Share2,
} from 'lucide-react'
import { skillGroups, type SkillLevel } from '../data/data'
import { skills } from '../i18n/content'
import { useLanguage } from '../i18n/LanguageContext'
import { LineReveal, DrawLine } from '../lib/motion'

const iconMap: Record<string, React.ElementType> = {
  GraduationCap, Code2, Network,
}

const toolsList: { name: string; icon: React.ElementType }[] = [
  { name: 'VS Code', icon: Code2 },
  { name: 'Figma', icon: Figma },
  { name: 'Tailwind CSS', icon: Palette },
  { name: 'Postman', icon: Send },
  { name: 'XAMPP', icon: Server },
  { name: 'Cisco Packet Tracer', icon: Network },
  { name: 'Draw.io', icon: Share2 },
  { name: 'Huawei Cloud Console', icon: Cloud },
  { name: 'GitHub Classroom', icon: Github },
  { name: 'Google Classroom', icon: BookOpen },
  { name: 'VitePress', icon: BookText },
]

// Monochrome + single-accent level marks (editorial discipline)
const levelDot: Record<SkillLevel, string> = {
  proficient: 'bg-primary-600 dark:bg-primary-400',
  functional: 'bg-ink-400 dark:bg-ink-500',
  learning: 'border border-ink-300 dark:border-ink-600',
}

const ease = [0.22, 1, 0.36, 1] as const
const reveal = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
}
const stagger = { show: { transition: { staggerChildren: 0.06 } } }

export default function Skills() {
  const { lang } = useLanguage()

  return (
    <section
      id="skills"
      className="border-t border-ink-200 bg-white py-16 text-ink-950 dark:border-ink-800 dark:bg-ink-900/40 dark:text-ink-50 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* ── Header ── */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          className="mb-12 max-w-2xl"
        >
          <motion.div
            variants={reveal}
            className="mb-6 flex items-center gap-4 text-ink-500 dark:text-ink-400"
          >
            <span className="section-index text-xs font-semibold text-primary-600 dark:text-primary-400">
              {skills.index}
            </span>
            <DrawLine className="h-px w-10 bg-ink-300 dark:bg-ink-700" />
            <span className="eyebrow">{skills.eyebrow[lang]}</span>
          </motion.div>
          <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            <LineReveal>{skills.title[lang]}</LineReveal>
          </h2>
          <motion.p variants={reveal} className="mt-5 text-ink-600 dark:text-ink-300">
            {skills.intro[lang]}
          </motion.p>
        </motion.div>

        {/* ── Legend ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-10 flex flex-wrap gap-x-6 gap-y-2"
        >
          {(Object.keys(levelDot) as SkillLevel[]).map(level => (
            <span
              key={level}
              className="inline-flex items-center gap-2 text-xs font-medium text-ink-500 dark:text-ink-400"
            >
              <span className={`h-2 w-2 rounded-full ${levelDot[level]}`} />
              {skills.levelLabels[level][lang]}
            </span>
          ))}
        </motion.div>

        {/* ── Skill groups ── */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
          className="grid gap-x-12 gap-y-10 md:grid-cols-2 xl:grid-cols-3"
        >
          {skillGroups.map(group => {
            const Icon = iconMap[group.icon] ?? GraduationCap
            const label = skills.groupLabels[group.category]?.[lang] ?? group.category
            return (
              <motion.div key={group.category} variants={reveal}>
                {/* Group head */}
                <div className="mb-5 flex items-center gap-3 border-b border-ink-200 pb-3 dark:border-ink-800">
                  <Icon size={18} className="text-primary-600 dark:text-primary-400" />
                  <h3 className="font-display text-lg font-semibold text-ink-950 dark:text-ink-50">
                    {label}
                  </h3>
                  <span className="section-index ml-auto text-xs text-ink-500 dark:text-ink-400">
                    {String(group.skills.length).padStart(2, '0')}
                  </span>
                </div>
                {/* Skills */}
                <ul className="flex flex-col gap-3">
                  {group.skills.map(skill => (
                    <li
                      key={skill.name}
                      className="flex items-center justify-between gap-3"
                    >
                      <span className="flex items-center gap-2.5 text-sm text-ink-700 dark:text-ink-200">
                        <span className={`h-2 w-2 shrink-0 rounded-full ${levelDot[skill.level]}`} />
                        {skill.name}
                      </span>
                      <span className="shrink-0 text-[11px] font-medium text-ink-500 dark:text-ink-400">
                        {skills.levelLabels[skill.level][lang]}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </motion.div>

        {/* ── Tools ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease }}
          className="mt-16 border-t border-ink-200 pt-10 dark:border-ink-800"
        >
          <p className="eyebrow mb-5 text-ink-500 dark:text-ink-400">
            {skills.toolsHeading[lang]}
          </p>
          <div className="flex flex-wrap gap-2">
            {toolsList.map(({ name, icon: ToolIcon }) => (
              <span
                key={name}
                className="inline-flex cursor-default items-center gap-1.5 rounded-full border border-ink-200 px-3 py-1 text-xs font-medium text-ink-600 transition-colors hover:border-primary-600 hover:text-primary-600 dark:border-ink-700 dark:text-ink-300 dark:hover:border-primary-400 dark:hover:text-primary-400"
              >
                <ToolIcon size={12} className="shrink-0" />
                {name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
