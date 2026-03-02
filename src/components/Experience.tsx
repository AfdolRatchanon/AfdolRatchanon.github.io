import { motion } from 'framer-motion'
import { Briefcase, MapPin, CheckCircle2, CalendarDays } from 'lucide-react'
import { experiences } from '../data/data'

// ── Variants ─────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const stagger = {
  show: { transition: { staggerChildren: 0.12 } },
}

// ── Timeline Item ─────────────────────────────
function TimelineItem({
  item,
  index,
  total,
}: {
  item: typeof experiences[number]
  index: number
  total: number
}) {
  const isLast = index === total - 1

  return (
    <motion.div
      variants={fadeUp}
      className="relative flex gap-6"
    >
      {/* Timeline spine */}
      <div className="flex flex-col items-center">
        {/* Dot */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 300, delay: index * 0.15 }}
          className={`relative flex items-center justify-center w-10 h-10 rounded-full border-2 shrink-0 z-10 ${
            item.current
              ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400'
              : 'border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-400 dark:text-slate-500'
          }`}
        >
          <Briefcase size={16} />
          {item.current && (
            <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 border-2 border-white dark:border-slate-900" />
          )}
        </motion.div>
        {/* Vertical line */}
        {!isLast && (
          <div className="flex-1 w-px bg-slate-200 dark:bg-slate-700 mt-2 mb-0" />
        )}
      </div>

      {/* Card */}
      <div className={`flex-1 pb-10 ${isLast ? 'pb-0' : ''}`}>
        <div className="bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 hover:shadow-lg dark:hover:shadow-slate-900/50 transition-all duration-200">

          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font-bold text-slate-900 dark:text-white text-lg leading-tight">
                  {item.role}
                </h3>
                {item.current && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-400 uppercase tracking-wide">
                    Current
                  </span>
                )}
              </div>
              <p className="text-primary-600 dark:text-primary-400 font-semibold mt-0.5">
                {item.institution}
              </p>
            </div>
            <div className="flex flex-col items-end gap-1 text-right">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 px-2.5 py-1 rounded-full">
                <CalendarDays size={11} />
                {item.period}
              </span>
              {item.periodTh && (
                <span className="text-[11px] text-slate-400 dark:text-slate-500">
                  {item.periodTh}
                </span>
              )}
              <span className="inline-flex items-center gap-1 text-xs text-slate-400 dark:text-slate-500">
                <MapPin size={11} />
                {item.location}
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            {item.description}
          </p>

          {/* Highlights */}
          <ul className="flex flex-col gap-2">
            {item.highlights.map(h => (
              <li key={h} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                <CheckCircle2
                  size={15}
                  className="shrink-0 mt-0.5 text-emerald-500 dark:text-emerald-400"
                />
                {h}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

// ── Main component ────────────────────────────
export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          className="mb-14"
        >
          <motion.p variants={fadeUp} className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-widest mb-2">
            Work History
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Teaching Experience
          </motion.h2>
          <motion.p variants={fadeUp} className="text-slate-500 dark:text-slate-400 max-w-2xl">
            My journey in technology education — from student teacher practicum to full-time IT Instructor
            at Siam Business Technological College.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
          className="max-w-3xl"
        >
          {experiences.map((item, i) => (
            <TimelineItem key={item.role + item.institution} item={item} index={i} total={experiences.length} />
          ))}
        </motion.div>

      </div>
    </section>
  )
}
