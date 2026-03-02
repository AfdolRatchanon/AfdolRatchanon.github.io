import { motion } from 'framer-motion'
import {
  GraduationCap, Code2, Network,
  Figma, Cloud, Github, BookOpen, BookText, Palette, Send, Server, Share2,
} from 'lucide-react'
import { skillGroups, type SkillLevel } from '../data/data'

const iconMap: Record<string, React.ElementType> = {
  GraduationCap, Code2, Network,
}

const toolsList: { name: string; icon: React.ElementType }[] = [
  { name: 'VS Code',              icon: Code2         },
  { name: 'Figma',                icon: Figma         },
  { name: 'Tailwind CSS',         icon: Palette       },
  { name: 'Postman',              icon: Send          },
  { name: 'XAMPP',                icon: Server        },
  { name: 'Cisco Packet Tracer',  icon: Network       },
  { name: 'Draw.io',              icon: Share2        },
  { name: 'Huawei Cloud Console', icon: Cloud         },
  { name: 'GitHub Classroom',     icon: Github        },
  { name: 'Google Classroom',     icon: BookOpen      },
  { name: 'VitePress',            icon: BookText      },
]

const levelConfig: Record<SkillLevel, { label: string; labelTh: string; chip: string; dot: string }> = {
  proficient: {
    label:   'Proficient',
    labelTh: 'คล่องแคล่ว',
    chip:    'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300',
    dot:     'bg-emerald-500',
  },
  functional: {
    label:   'Functional',
    labelTh: 'ใช้งานได้',
    chip:    'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300',
    dot:     'bg-blue-500',
  },
  learning: {
    label:   'Learning',
    labelTh: 'กำลังพัฒนา',
    chip:    'bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300',
    dot:     'bg-amber-400',
  },
}

const headerColor: Record<string, string> = {
  indigo:  'from-indigo-500 to-violet-600',
  blue:    'from-blue-500 to-cyan-600',
  emerald: 'from-emerald-500 to-teal-600',
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.45 } },
}
const stagger = { show: { transition: { staggerChildren: 0.08 } } }

function SkillChip({ name, level }: { name: string; level: SkillLevel }) {
  const cfg = levelConfig[level]
  return (
    <motion.div
      variants={fadeUp}
      className="flex items-center justify-between gap-3 px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600/50 hover:border-slate-300 dark:hover:border-slate-500 transition-colors"
    >
      <div className="flex items-center gap-2 min-w-0">
        <span className={`shrink-0 w-2 h-2 rounded-full ${cfg.dot}`} />
        <span className="text-sm font-medium text-slate-700 dark:text-slate-200 truncate">
          {name}
        </span>
      </div>
      <span className={`shrink-0 text-[10px] font-bold px-2 py-0.5 rounded-full ${cfg.chip}`}>
        {cfg.label}
      </span>
    </motion.div>
  )
}

function SkillGroupCard({ group }: { group: typeof skillGroups[number] }) {
  const Icon     = iconMap[group.icon] ?? GraduationCap
  const gradient = headerColor[group.color] ?? headerColor['indigo']
  return (
    <motion.div
      variants={fadeUp}
      className="flex flex-col bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden hover:shadow-lg dark:hover:shadow-slate-900/50 transition-all duration-200"
    >
      <div className={`px-5 py-4 bg-linear-to-r ${gradient} flex items-center gap-3`}>
        <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center text-white">
          <Icon size={18} />
        </div>
        <div>
          <h3 className="font-bold text-white text-sm">{group.category}</h3>
          <p className="text-white/70 text-[11px]">{group.skills.length} skills</p>
        </div>
      </div>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={stagger}
        className="p-4 flex flex-col gap-2"
      >
        {group.skills.map(skill => (
          <SkillChip key={skill.name} name={skill.name} level={skill.level} />
        ))}
      </motion.div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          className="mb-12"
        >
          <motion.p variants={fadeUp} className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-widest mb-2">
            Competencies
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Skills &amp; Expertise
          </motion.h2>
          <motion.p variants={fadeUp} className="text-slate-500 dark:text-slate-400 max-w-2xl">
            ระดับทักษะประเมินจากความสามารถใช้งานจริงในห้องเรียนและโปรเจกต์จริง — ไม่ใช่ตัวเลขสมมติ
          </motion.p>
        </motion.div>

        {/* Level legend */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap gap-3 mb-8"
        >
          {(Object.entries(levelConfig) as [SkillLevel, typeof levelConfig[SkillLevel]][]).map(([, cfg]) => (
            <span
              key={cfg.label}
              className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full ${cfg.chip}`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
              {cfg.label} — {cfg.labelTh}
            </span>
          ))}
        </motion.div>

        {/* Skill group cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          {skillGroups.map(group => (
            <SkillGroupCard key={group.category} group={group} />
          ))}
        </motion.div>

        {/* Tools tag cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-12 p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700"
        >
          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-4">
            Tools &amp; Environment
          </p>
          <div className="flex flex-wrap gap-2">
            {toolsList.map(({ name, icon: ToolIcon }) => (
              <span
                key={name}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-primary-400 dark:hover:border-primary-600 hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-default"
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
