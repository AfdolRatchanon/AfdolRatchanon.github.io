import { motion } from 'framer-motion'
import {
  Cloud, Network, BookOpen, Users, Wifi,
  CheckCircle2, ExternalLink, Calendar, Hash,
} from 'lucide-react'
import { personalInfo, aboutBlurbs, certifications } from '../data/data'

// ── Icon map ──────────────────────────────────
const iconMap: Record<string, React.ElementType> = {
  Cloud, Network, BookOpen, Users,
}

const certColorMap: Record<string, { outer: string; inner: string; badge: string }> = {
  sky:    { outer: 'from-sky-400 to-cyan-500',     inner: 'bg-sky-50 dark:bg-sky-900/30',    badge: 'bg-sky-100 dark:bg-sky-900/60 text-sky-700 dark:text-sky-300' },
  blue:   { outer: 'from-blue-400 to-indigo-500',  inner: 'bg-blue-50 dark:bg-blue-900/30',  badge: 'bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300' },
  violet: { outer: 'from-violet-400 to-purple-500',inner: 'bg-violet-50 dark:bg-violet-900/30',badge: 'bg-violet-100 dark:bg-violet-900/60 text-violet-700 dark:text-violet-300' },
}

// Maps icon names from data.ts to Lucide components
const blurbIconMap: Record<string, React.ElementType> = {
  BookOpen, Wifi, Cloud, Users,
}

// ── Variants ─────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const stagger = {
  show: { transition: { staggerChildren: 0.1 } },
}

// ── Certification Card ────────────────────────
function CertCard({ cert }: { cert: typeof certifications[number] }) {
  const colors = certColorMap[cert.color] ?? certColorMap['blue']
  const CertIcon = iconMap[cert.icon] ?? Cloud

  return (
    <motion.div
      variants={fadeUp}
      className={`relative flex flex-col gap-3 p-5 rounded-2xl border ${
        cert.highlight
          ? 'border-sky-300 dark:border-sky-700 bg-gradient-to-br from-sky-50 to-cyan-50 dark:from-sky-900/20 dark:to-cyan-900/20'
          : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/60'
      } hover:shadow-lg dark:hover:shadow-slate-900/50 transition-all duration-200`}
    >
      {cert.highlight && (
        <span className="absolute top-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded-full bg-sky-500 text-white uppercase tracking-wide">
          Featured
        </span>
      )}

      <div className="flex items-center gap-3">
        <div className={`flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br ${colors.outer}`}>
          <CertIcon size={20} className="text-white" />
        </div>
        <div>
          <h4 className="font-bold text-slate-800 dark:text-white text-sm">{cert.name}</h4>
          <p className="text-xs text-slate-500 dark:text-slate-400">{cert.issuer}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 text-[11px]">
        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full font-semibold ${colors.badge}`}>
          <Calendar size={10} /> Issued {cert.issued}
        </span>
        {cert.expires && (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full font-semibold bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
            Valid until {cert.expires}
          </span>
        )}
        {cert.credentialId && (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full font-semibold bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400">
            <Hash size={10} /> {cert.credentialId}
          </span>
        )}
      </div>

      {cert.href !== '#' && (
        <a
          href={cert.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs text-primary-600 dark:text-primary-400 hover:underline font-medium mt-1"
        >
          View credential <ExternalLink size={11} />
        </a>
      )}
    </motion.div>
  )
}

// ── Dynamic teaching-experience helper ────────
function useSbacMonths() {
  const start = new Date('2024-08-26')
  const now   = new Date()
  const mo    = (now.getFullYear() - start.getFullYear()) * 12 + now.getMonth() - start.getMonth()
  return mo < 12 ? `${mo} เดือน` : mo < 24 ? '1+ ปี' : `${Math.floor(mo / 12)}+ ปี`
}

// ── Main component ────────────────────────────
export default function About() {
  const sbacExp = useSbacMonths()
  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-950">
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
            Who I Am
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            About &amp; Certifications
          </motion.h2>
          <motion.p variants={fadeUp} className="text-slate-500 dark:text-slate-400 max-w-2xl">
            A glimpse into my background, interests, and professional credentials.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left – personal blurbs */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
          >
            {/* Short bio */}
            <motion.div variants={fadeUp} className="mb-8 p-6 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-linear-to-br from-primary-400 to-indigo-500 flex items-center justify-center text-white font-bold text-lg">
                  R
                </div>
                <div>
                  <p className="font-bold text-slate-800 dark:text-white">{personalInfo.nameEn}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{personalInfo.title} · {personalInfo.institutionShort}</p>
                </div>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{personalInfo.bio}</p>
              <p className="text-sm text-slate-400 dark:text-slate-500 leading-relaxed mt-3 border-t border-slate-100 dark:border-slate-700 pt-3">
                {personalInfo.bioTh}
              </p>
            </motion.div>

            {/* Blurb grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {aboutBlurbs.map(blurb => {
                const BlurbIcon = blurbIconMap[blurb.icon] ?? BookOpen
                return (
                  <motion.div
                    key={blurb.title}
                    variants={fadeUp}
                    className="flex flex-col gap-2 p-4 rounded-xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 hover:border-primary-300 dark:hover:border-primary-700 transition-colors"
                  >
                    <BlurbIcon size={18} className="text-primary-500" />
                    <h4 className="font-semibold text-slate-800 dark:text-white text-sm">{blurb.title}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed whitespace-pre-line">
                      {blurb.body}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Right – certifications */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-2 mb-6">
              <CheckCircle2 size={18} className="text-emerald-500" />
              <h3 className="font-bold text-slate-800 dark:text-white">Professional Certifications</h3>
            </motion.div>

            <div className="flex flex-col gap-4">
              {certifications.map(cert => (
                <CertCard key={cert.name} cert={cert} />
              ))}
            </div>

            {/* Quick stats */}
            <motion.div
              variants={fadeUp}
              className="mt-6 grid grid-cols-3 gap-3"
            >
              {[
                { label: 'ประสบการณ์สอน', value: sbacExp },
                { label: 'ฝึกสอน', value: '1 ปี' },
                { label: 'Certifications', value: `${certifications.length}` },
              ].map(stat => (
                <div
                  key={stat.label}
                  className="text-center p-4 rounded-xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700"
                >
                  <p className="text-2xl font-bold text-primary-600 dark:text-primary-400">{stat.value}</p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
