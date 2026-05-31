// ─────────────────────────────────────────────
//  Bilingual UI copy (EN / TH).
//  Components read content.<section>[lang].
//  Names, emails, links live in ../data/data.ts.
// ─────────────────────────────────────────────
import type { Lang } from './LanguageContext'

type Bi<T = string> = Record<Lang, T>

// ── Navbar ────────────────────────────────────
export const nav = {
  links: [
    { id: 'home', label: { en: 'Home', th: 'หน้าแรก' } },
    { id: 'about', label: { en: 'About', th: 'เกี่ยวกับ' } },
    { id: 'projects', label: { en: 'Work', th: 'ผลงาน' } },
    { id: 'resources', label: { en: 'Resources', th: 'สื่อการสอน' } },
    { id: 'skills', label: { en: 'Skills', th: 'ทักษะ' } },
    { id: 'experience', label: { en: 'Experience', th: 'ประสบการณ์' } },
    { id: 'contact', label: { en: 'Contact', th: 'ติดต่อ' } },
  ] as { id: string; label: Bi }[],
}

// ── Hero ──────────────────────────────────────
export const hero: {
  eyebrow: Bi
  headline: Bi<string[]> // each entry is a line
  accentWord: Bi
  lead: Bi
  primaryCta: Bi
  secondaryCta: Bi
  available: Bi
} = {
  eyebrow: {
    en: 'IT Instructor · SBAC · Bangkok',
    th: 'ครูผู้สอนไอที · SBAC · กรุงเทพฯ',
  },
  // Headline is split into lines; the accentWord is rendered in the accent colour.
  headline: {
    en: ['Bridging', 'theory & practice', 'in tech education.'],
    th: ['เชื่อมทฤษฎี', 'สู่การลงมือทำจริง', 'ในการสอนเทคโนโลยี'],
  },
  // Must match a full headline line exactly — that line is rendered in the accent colour.
  accentWord: { en: 'theory & practice', th: 'สู่การลงมือทำจริง' },
  lead: {
    en: 'I teach Web Development, Cloud (Huawei HCIA) and Network Infrastructure — turning textbook concepts into industry-ready skills students can actually ship.',
    th: 'ผมสอนการพัฒนาเว็บ คลาวด์ (Huawei HCIA) และโครงสร้างพื้นฐานเครือข่าย เปลี่ยนทฤษฎีในตำราให้เป็นทักษะที่นักศึกษาใช้ทำงานได้จริง',
  },
  primaryCta: { en: 'View my work', th: 'ดูผลงาน' },
  secondaryCta: { en: 'Get in touch', th: 'ติดต่อผม' },
  available: {
    en: 'Open to teaching & collaboration',
    th: 'เปิดรับงานสอนและความร่วมมือ',
  },
}

// ── About / Story ─────────────────────────────
export const about: {
  index: string
  eyebrow: Bi
  title: Bi
  paragraphs: Bi<string[]>
  pullQuote: Bi
  pullQuoteAttr: Bi
  facetsHeading: Bi
  facets: { title: Bi; body: Bi }[]
  journeyHeading: Bi
  credentialHeading: Bi
  viewCredential: Bi
  // `pos`    = CSS object-position (tune per photo: 'center 20%' → 0% top, 50% middle)
  // `aspect` = CSS aspect-ratio   (e.g. '16 / 10', '4 / 5' — taller shows more body)
  photos: { src: string; caption: Bi; year: string; pos: string; aspect: string }[]
} = {
  index: '02',
  eyebrow: { en: 'About', th: 'เกี่ยวกับ' },
  title: {
    en: 'Discipline from service, a passion for teaching.',
    th: 'วินัยจากการรับใช้ชาติ สู่ใจรักในการสอน',
  },
  paragraphs: {
    en: [
      'I am an IT Instructor at Siam Business Technological College (SBAC), where I teach Web Development, Cloud Services, and Network Infrastructure. My approach is simple — every concept is paired with a real project, because employers hire skills, not memorised textbooks.',
      'Before teaching full-time, I served a full year of national duty with the Security Regiment of the Royal Thai Marine Corps. The discipline, teamwork, and steadiness I built there still shape how I run a classroom today — and I kept studying web development the whole way through.',
    ],
    th: [
      'ผมเป็นครูผู้สอนไอทีที่วิทยาลัยเทคโนโลยีสยามบริหารธุรกิจ (SBAC) สอนการพัฒนาเว็บ บริการคลาวด์ และโครงสร้างพื้นฐานเครือข่าย แนวทางของผมเรียบง่าย — ทุกแนวคิดต้องมาคู่กับโปรเจกต์จริง เพราะนายจ้างจ้าง “ทักษะ” ไม่ใช่การท่องตำรา',
      'ก่อนมาสอนเต็มเวลา ผมรับใช้ชาติครบหนึ่งปีกับกองรักษาความปลอดภัย กรมรักษาความปลอดภัย นาวิกโยธิน ระเบียบวินัย การทำงานเป็นทีม และความหนักแน่นที่ได้มา ยังหล่อหลอมวิธีที่ผมดูแลห้องเรียนจนทุกวันนี้ — และผมก็ศึกษาการพัฒนาเว็บควบคู่ไปตลอดช่วงนั้น',
    ],
  },
  pullQuote: {
    en: 'Learning by doing. Theory means nothing until a student ships something real.',
    th: 'เรียนรู้จากการลงมือทำ — ทฤษฎีไร้ความหมาย จนกว่านักศึกษาจะสร้างของจริงได้',
  },
  pullQuoteAttr: { en: 'Teaching philosophy', th: 'ปรัชญาการสอน' },
  facetsHeading: { en: 'What drives me', th: 'สิ่งที่ขับเคลื่อนผม' },
  facets: [
    {
      title: { en: 'Education', th: 'การศึกษา' },
      body: {
        en: "Bachelor of Science in Technical Education (Computer Technology), First Class Honours — Faculty of Technical Education, King Mongkut's University of Technology North Bangkok (KMUTNB).",
        th: 'ครุศาสตร์อุตสาหกรรมบัณฑิต สาขาวิชาเทคโนโลยีคอมพิวเตอร์ (เกียรตินิยมอันดับหนึ่ง) คณะครุศาสตร์อุตสาหกรรม มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ (มจพ.)',
      },
    },
    {
      title: { en: 'Network Passion', th: 'หลงใหลเครือข่าย' },
      body: {
        en: 'Deeply interested in network infrastructure design, routing protocols, and building secure, resilient enterprise networks.',
        th: 'สนใจการออกแบบโครงสร้างเครือข่าย โปรโตคอลการจัดเส้นทาง และการสร้างเครือข่ายองค์กรที่ปลอดภัยและทนทาน',
      },
    },
    {
      title: { en: 'Cloud Journey', th: 'เส้นทางคลาวด์' },
      body: {
        en: 'HCIA Cloud Service certified (Huawei). Exploring hybrid cloud and containerization (Docker / Kubernetes) as the next frontier.',
        th: 'ได้รับใบรับรอง HCIA Cloud Service (Huawei) กำลังศึกษาไฮบริดคลาวด์และคอนเทนเนอร์ (Docker / Kubernetes) เป็นก้าวต่อไป',
      },
    },
    {
      title: { en: 'Teaching Philosophy', th: 'ปรัชญาการสอน' },
      body: {
        en: 'Learning by doing. Every concept should be paired with a real project — because employers hire skills, not memorised textbooks.',
        th: 'เรียนรู้จากการลงมือทำ ทุกแนวคิดควรมาคู่กับโปรเจกต์จริง เพราะนายจ้างจ้างทักษะ ไม่ใช่การท่องจำตำรา',
      },
    },
  ],
  journeyHeading: { en: 'The journey', th: 'เส้นทางที่ผ่านมา' },
  credentialHeading: { en: 'Certified', th: 'ใบรับรอง' },
  viewCredential: { en: 'View credential', th: 'ดูใบรับรอง' },
  photos: [
    {
      src: '/images/รับปริญญาตรีกับองคมนตรี.jpg',
      caption: { en: 'First Class Honours · KMUTNB', th: 'เกียรตินิยมอันดับหนึ่ง · มจพ.' },
      year: '2023',
      pos: 'center 20%',   // ← รูปรับปริญญา: ปรับ % ตามเฟรมได้
      aspect: '16 / 10',
    },
    {
      src: '/images/ชุดกองทหารเกีรยติยศ 3 เหล่าทัพ.jpg',
      caption: { en: 'Honor Guard · Royal Thai Navy', th: 'ชุดเกียรติยศ · กองทัพเรือ' },
      year: '2023',
      pos: 'top',          // ← รูปเกียรติยศ: โฟกัสบนสุด กันหัวหาย
      aspect: '16 / 10',
    },
    {
      src: '/images/ชุดกะลาสีวันปลด.jpg',
      caption: { en: 'Discharge Day', th: 'วันปลดประจำการ' },
      year: '2024',
      pos: 'center 20%',   // ← รูปวันปลด: กำลังดี
      aspect: '16 / 9',
    },
    {
      src: '/images/ชุด SBAC.jpg',
      caption: { en: 'IT Instructor · SBAC', th: 'ครูผู้สอนไอที · SBAC' },
      year: 'Now',
      pos: 'center 20%',   // ← รูปครู SBAC: กำลังดี
      aspect: '16 / 9',
    },
  ],
}

// ── Projects / Work (bento) ───────────────────
export const projects: {
  index: string
  eyebrow: Bi
  title: Bi
  intro: Bi
  placeholderNote: Bi
  items: {
    category: Bi
    title: Bi
    desc: Bi
    tags: string[]
    span: string // tailwind grid-span classes
  }[]
} = {
  index: '03',
  eyebrow: { en: 'Work', th: 'ผลงาน' },
  title: {
    en: 'Selected work & teaching projects.',
    th: 'ผลงานและโปรเจกต์การสอนที่คัดสรร',
  },
  intro: {
    en: 'A growing collection of curricula, labs, and tools I build for the classroom — and the web.',
    th: 'คอลเลกชันที่เติบโตขึ้นเรื่อย ๆ ทั้งหลักสูตร แล็บ และเครื่องมือที่ผมสร้างเพื่อห้องเรียน — และเว็บ',
  },
  placeholderNote: {
    en: 'Sample placeholders — real case studies coming soon',
    th: 'ตัวอย่างชั่วคราว — กรณีศึกษาจริงเร็ว ๆ นี้',
  },
  items: [
    {
      category: { en: 'Curriculum', th: 'หลักสูตร' },
      title: {
        en: 'SBAC Web Development Track',
        th: 'หลักสูตรพัฒนาเว็บ SBAC',
      },
      desc: {
        en: 'A full Frontend-to-Backend curriculum — from semantic HTML and React to REST APIs and MySQL — built around shippable, real-world projects.',
        th: 'หลักสูตรครบตั้งแต่ Frontend ถึง Backend — จาก HTML และ React สู่ REST API และ MySQL — ออกแบบรอบโปรเจกต์ที่ใช้งานได้จริง',
      },
      tags: ['React', 'Node.js', 'MySQL', 'Tailwind'],
      span: 'md:col-span-2 md:row-span-2',
    },
    {
      category: { en: 'Networking', th: 'เครือข่าย' },
      title: { en: 'Packet Tracer Lab Pack', th: 'ชุดแล็บ Packet Tracer' },
      desc: {
        en: 'Hands-on VLAN, STP, and OSPF simulations for the networking course.',
        th: 'แล็บจำลอง VLAN, STP และ OSPF สำหรับวิชาเครือข่าย',
      },
      tags: ['Cisco', 'VLAN', 'OSPF'],
      span: 'md:col-span-1',
    },
    {
      category: { en: 'Cloud', th: 'คลาวด์' },
      title: { en: 'Huawei Cloud Sandbox Guide', th: 'คู่มือ Huawei Cloud Sandbox' },
      desc: {
        en: 'Step-by-step ECS, OBS, and VPC walkthroughs for HCIA exam prep.',
        th: 'คู่มือทีละขั้น ECS, OBS และ VPC สำหรับเตรียมสอบ HCIA',
      },
      tags: ['ECS', 'OBS', 'VPC'],
      span: 'md:col-span-1',
    },
    {
      category: { en: 'Frontend', th: 'ฟรอนต์เอนด์' },
      title: { en: 'Student Portfolio Starter', th: 'เทมเพลตพอร์ตนักศึกษา' },
      desc: {
        en: 'A clean React + Tailwind template students fork to publish their first site.',
        th: 'เทมเพลต React + Tailwind สะอาด ๆ ให้นักศึกษา fork ไปทำเว็บแรกของตัวเอง',
      },
      tags: ['React', 'Vite', 'GitHub Pages'],
      span: 'md:col-span-1',
    },
    {
      category: { en: 'DevOps', th: 'เดฟออปส์' },
      title: { en: 'GitHub Classroom Workflow', th: 'เวิร์กโฟลว์ GitHub Classroom' },
      desc: {
        en: 'Automated assignment hand-out and feedback flow for coding classes.',
        th: 'ระบบแจกและให้ฟีดแบ็กงานอัตโนมัติสำหรับวิชาเขียนโค้ด',
      },
      tags: ['Git', 'CI', 'Automation'],
      span: 'md:col-span-2',
    },
  ],
}

// ── Resources ─────────────────────────────────
export const resources: {
  index: string
  eyebrow: Bi
  title: Bi
  intro: Bi
  searchPlaceholder: Bi
  download: Bi
  itemsLabel: Bi
  noResults: Bi
  clearSearch: Bi
  categoryLabels: Record<string, Bi>
} = {
  index: '04',
  eyebrow: { en: 'Teaching Materials', th: 'สื่อการสอน' },
  title: {
    en: 'A library for my students.',
    th: 'คลังความรู้สำหรับนักศึกษาของผม',
  },
  intro: {
    en: 'Course slides, PDF handouts, lab files, and reference guides — organised by track. Search or pick a category to jump in.',
    th: 'สไลด์ประกอบการสอน เอกสาร PDF ไฟล์แล็บ และคู่มืออ้างอิง — จัดเป็นหมวดตามสายวิชา ค้นหาหรือเลือกหมวดเพื่อเริ่มได้เลย',
  },
  searchPlaceholder: { en: 'Search materials…', th: 'ค้นหาสื่อการสอน…' },
  download: { en: 'Download', th: 'ดาวน์โหลด' },
  itemsLabel: { en: 'items', th: 'รายการ' },
  noResults: { en: 'No materials found for', th: 'ไม่พบสื่อสำหรับ' },
  clearSearch: { en: 'Clear search', th: 'ล้างการค้นหา' },
  categoryLabels: {
    frontend: { en: 'Web Dev — Frontend', th: 'เว็บ — ฟรอนต์เอนด์' },
    backend: { en: 'Web Dev — Backend', th: 'เว็บ — แบ็กเอนด์' },
    networking: { en: 'Network Infrastructure', th: 'โครงสร้างเครือข่าย' },
    cloud: { en: 'Cloud Services', th: 'บริการคลาวด์' },
  },
}

// ── Skills ────────────────────────────────────
export const skills: {
  index: string
  eyebrow: Bi
  title: Bi
  intro: Bi
  toolsHeading: Bi
  levelLabels: Record<'proficient' | 'functional' | 'learning', Bi>
  groupLabels: Record<string, Bi>
} = {
  index: '05',
  eyebrow: { en: 'Competencies', th: 'ความสามารถ' },
  title: { en: 'Skills & expertise.', th: 'ทักษะและความเชี่ยวชาญ' },
  intro: {
    en: 'Levels reflect real classroom and project ability — assessed honestly, not invented percentages.',
    th: 'ระดับทักษะสะท้อนความสามารถใช้งานจริงในห้องเรียนและโปรเจกต์ — ประเมินอย่างซื่อสัตย์ ไม่ใช่ตัวเลขสมมติ',
  },
  toolsHeading: { en: 'Tools & Environment', th: 'เครื่องมือที่ใช้' },
  levelLabels: {
    proficient: { en: 'Proficient', th: 'คล่องแคล่ว' },
    functional: { en: 'Functional', th: 'ใช้งานได้' },
    learning: { en: 'Learning', th: 'กำลังพัฒนา' },
  },
  groupLabels: {
    'Teaching & Pedagogy': { en: 'Teaching & Pedagogy', th: 'การสอนและศาสตร์การสอน' },
    'Web Development': { en: 'Web Development', th: 'การพัฒนาเว็บ' },
    'Networking & Cloud': { en: 'Networking & Cloud', th: 'เครือข่ายและคลาวด์' },
  },
}

// ── Experience ────────────────────────────────
export const experience: {
  index: string
  eyebrow: Bi
  title: Bi
  intro: Bi
  currentLabel: Bi
  items: {
    role: Bi
    institution: Bi
    period: Bi
    location: Bi
    description: Bi
    highlights: Bi<string[]>
    current?: boolean
  }[]
} = {
  index: '06',
  eyebrow: { en: 'Experience', th: 'ประสบการณ์' },
  title: { en: 'A path built on doing.', th: 'เส้นทางที่สร้างจากการลงมือทำ' },
  intro: {
    en: 'From student-teacher practicum, through national service, to a full-time IT Instructor.',
    th: 'จากการฝึกสอน ผ่านการรับใช้ชาติ สู่ครูผู้สอนไอทีเต็มเวลา',
  },
  currentLabel: { en: 'Current', th: 'ปัจจุบัน' },
  items: [
    {
      role: { en: 'IT Instructor', th: 'ครูผู้สอนไอที' },
      institution: {
        en: 'Siam Business Technological College (SBAC)',
        th: 'วิทยาลัยเทคโนโลยีสยามบริหารธุรกิจ (SBAC)',
      },
      period: { en: 'Aug 2024 – Present', th: '26 ส.ค. 2567 – ปัจจุบัน' },
      location: { en: 'Bangkok, Thailand', th: 'กรุงเทพฯ ประเทศไทย' },
      description: {
        en: 'Full-time instructor planning, delivering, and evaluating courses in Web Development, Networking, and Cloud Computing for vocational and higher-education students.',
        th: 'ครูเต็มเวลา วางแผน สอน และประเมินผลรายวิชาการพัฒนาเว็บ เครือข่าย และคลาวด์คอมพิวติง สำหรับนักศึกษาอาชีวะและอุดมศึกษา',
      },
      highlights: {
        en: [
          'Designed and delivered curriculum for Web Development (Frontend & Backend)',
          'Built hands-on labs with Cisco Packet Tracer, GitHub Classroom, and Huawei Cloud sandbox',
          'Mentored students for national ICT skill competitions',
          'Integrated modern tools (VS Code, GitHub, Figma) into classroom workflows',
        ],
        th: [
          'ออกแบบและสอนหลักสูตรการพัฒนาเว็บ (Frontend และ Backend)',
          'สร้างแล็บลงมือทำด้วย Cisco Packet Tracer, GitHub Classroom และ Huawei Cloud sandbox',
          'ติวนักศึกษาเพื่อแข่งขันทักษะ ICT ระดับชาติ',
          'นำเครื่องมือสมัยใหม่ (VS Code, GitHub, Figma) มาใช้ในห้องเรียน',
        ],
      },
      current: true,
    },
    {
      role: { en: 'Military Service — Conscript', th: 'รับใช้ชาติ — ทหารกองประจำการ' },
      institution: {
        en: 'Security Regiment, Royal Thai Marine Corps · Royal Thai Navy',
        th: 'กอง รปภ.ฐท.กท. กรม รปภ.นย. · กองทัพเรือ',
      },
      period: { en: 'Aug 2023 – Jul 2024', th: '1 ส.ค. 2566 – 30 ก.ค. 2567' },
      location: { en: 'Bangkok, Thailand', th: 'กรุงเทพฯ ประเทศไทย' },
      description: {
        en: 'Completed a full year of mandatory national service with the Security Regiment, Royal Thai Marine Corps, Naval Base Bangkok.',
        th: 'รับใช้ชาติครบหนึ่งปีกับกองรักษาความปลอดภัย กรมรักษาความปลอดภัย นาวิกโยธิน ฐานทัพเรือกรุงเทพ',
      },
      highlights: {
        en: [
          'Fulfilled national service with discipline and responsibility',
          'Built strong teamwork, time management, and leadership skills',
          'Continued self-study in IT and web development throughout',
        ],
        th: [
          'ปฏิบัติหน้าที่รับใช้ชาติด้วยวินัยและความรับผิดชอบ',
          'พัฒนาทักษะการทำงานเป็นทีม การบริหารเวลา และภาวะผู้นำ',
          'ศึกษาไอทีและการพัฒนาเว็บด้วยตนเองอย่างต่อเนื่องตลอดช่วงประจำการ',
        ],
      },
    },
    {
      role: { en: 'Student Teacher (Practicum)', th: 'นักศึกษาฝึกสอน' },
      institution: {
        en: 'Chetuphon Commercial College (CCC)',
        th: 'วิทยาลัยพณิชยการเชตุพน (CCC)',
      },
      period: { en: 'Academic Year 2022', th: 'ปีการศึกษา 2565' },
      location: { en: 'Bangkok, Thailand', th: 'กรุงเทพฯ ประเทศไทย' },
      description: {
        en: 'A one-year teaching practicum as part of the undergraduate programme, gaining classroom experience in IT and Computer Science subjects.',
        th: 'ฝึกสอนหนึ่งปีตามหลักสูตรปริญญาตรี ได้รับประสบการณ์ในห้องเรียนวิชาไอทีและวิทยาการคอมพิวเตอร์',
      },
      highlights: {
        en: [
          'Planned and delivered lessons in computer fundamentals and web basics',
          'Supported senior instructors in labs and student assessments',
          'Gained practical experience in classroom management',
        ],
        th: [
          'วางแผนและสอนวิชาคอมพิวเตอร์พื้นฐานและการทำเว็บเบื้องต้น',
          'ช่วยครูพี่เลี้ยงในแล็บและการประเมินผลนักศึกษา',
          'ได้รับประสบการณ์จริงในการบริหารจัดการห้องเรียน',
        ],
      },
    },
  ],
}

// ── Footer / Contact ──────────────────────────
export const footer: {
  eyebrow: Bi
  ctaTitle: Bi<string[]>
  ctaLead: Bi
  emailLabel: Bi
  navHeading: Bi
  connectHeading: Bi
  backToTop: Bi
  builtWith: Bi
  roleLine: Bi
} = {
  eyebrow: { en: 'Contact', th: 'ติดต่อ' },
  ctaTitle: {
    en: ['Let’s build something', 'worth shipping.'],
    th: ['มาสร้างสิ่งที่', 'ใช้งานได้จริงด้วยกัน'],
  },
  ctaLead: {
    en: 'Open to teaching roles, collaborations, and guest talks. The fastest way to reach me is email.',
    th: 'เปิดรับงานสอน ความร่วมมือ และการบรรยายรับเชิญ ช่องทางที่เร็วที่สุดคืออีเมล',
  },
  emailLabel: { en: 'Email me', th: 'อีเมลหาผม' },
  navHeading: { en: 'Navigate', th: 'เมนู' },
  connectHeading: { en: 'Connect', th: 'ช่องทางติดต่อ' },
  backToTop: { en: 'Back to top', th: 'กลับขึ้นบน' },
  builtWith: {
    en: 'Built with React, Tailwind CSS & Framer Motion',
    th: 'สร้างด้วย React, Tailwind CSS และ Framer Motion',
  },
  roleLine: { en: 'IT Instructor · SBAC · Bangkok', th: 'ครูผู้สอนไอที · SBAC · กรุงเทพฯ' },
}

// ── Credibility strip ─────────────────────────
export const credibility: {
  caption: Bi
  stats: { value: Bi; label: Bi }[]
} = {
  caption: {
    en: 'Trusted foundations',
    th: 'รากฐานที่น่าเชื่อถือ',
  },
  stats: [
    {
      value: { en: '1st Class', th: 'เกียรตินิยม 1' },
      label: { en: 'First Class Honours — B.S.Tech.Ed., KMUTNB', th: 'เกียรตินิยมอันดับหนึ่ง — ค.อ.บ. มจพ.' },
    },
    {
      value: { en: 'HCIA', th: 'HCIA' },
      label: { en: 'Huawei Cloud Service certified', th: 'ใบรับรอง Huawei Cloud Service' },
    },
    {
      value: { en: 'Since 2024', th: 'ตั้งแต่ 2567' },
      label: { en: 'Full-time IT Instructor at SBAC', th: 'ครูผู้สอนไอทีเต็มเวลาที่ SBAC' },
    },
    {
      value: { en: '4', th: '4' },
      label: { en: 'Domains taught — Frontend, Backend, Network, Cloud', th: 'สายวิชาที่สอน — Frontend, Backend, Network, Cloud' },
    },
  ],
}
