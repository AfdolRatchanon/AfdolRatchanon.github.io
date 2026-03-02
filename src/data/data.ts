// ─────────────────────────────────────────────
//  Centralized data store – update this file to
//  change any text, links, or content on the site.
// ─────────────────────────────────────────────

export const personalInfo = {
  nameEn: 'Ratchanon Semsayan',
  nameTh: 'รัชนนท์ เสมสายัณห์',
  title: 'IT Instructor',
  institution: 'Siam Business Technological College',
  institutionShort: 'SBAC',
  location: 'Bangkok, Thailand',
  email: 'afdolcom79@gmail.com',
  phone: '+66 84-635-0728',
  github: 'https://github.com/AfdolRatchanon',
  linkedin: 'https://www.linkedin.com/in/%E0%B8%A3%E0%B8%B1%E0%B8%8A%E0%B8%8A%E0%B8%B2%E0%B8%99%E0%B8%99%E0%B8%97%E0%B9%8C-%E0%B9%80%E0%B8%AA%E0%B8%A1%E0%B8%AA%E0%B8%B2%E0%B8%A2%E0%B8%B1%E0%B8%93%E0%B8%AB%E0%B9%8C-ba2716197/',
  profileImage: '/images/ชุด SBAC.jpg',
  bio: 'Passionate IT Instructor with hands-on expertise in Web Development, Cloud Services (Huawei HCIA), and Network Infrastructure. I believe in bridging theory and practice — equipping students with industry-ready skills for the modern digital world.',
  bioTh: 'ครูผู้สอนด้านไอทีที่มีความเชี่ยวชาญด้านการพัฒนาเว็บ บริการคลาวด์ (Huawei HCIA) และโครงสร้างพื้นฐานเครือข่าย มุ่งมั่นเชื่อมโยงทฤษฎีและการปฏิบัติ เพื่อเตรียมความพร้อมนักศึกษาสู่โลกดิจิทัล',
} as const

// Floating photo cards shown beside the main profile in the Hero section
export const heroFloatingCards = [
  {
    image: '/images/ชุดกองทหารเกีรยติยศ 3 เหล่าทัพ.jpg',
    labelEn: 'Honor Guard',
    labelTh: 'ชุดเกียรติยศ',
    sublabel: 'Royal Thai Navy',
    emoji: '⚓',
    // position: floats to the upper-left of the main photo
    side: 'left' as const,
  },
  {
    image: '/images/ชุดกะลาสีวันปลด.jpg',
    labelEn: 'Discharge Day',
    labelTh: 'วันปลดประจำการ',
    sublabel: '30 Jul 2024',
    emoji: '🎖️',
    // position: floats to the lower-right of the main photo
    side: 'right' as const,
  },
] as const

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Resources', href: '#resources' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
] as const

// ─── Education Resources ───────────────────────
export type ResourceItem = {
  title: string
  description: string
  type: 'PDF' | 'Slide' | 'Video' | 'Link' | 'Zip'
  href: string
  size?: string
  badge?: string
}

export type ResourceCategory = {
  id: string
  label: string
  icon: string          // Lucide icon name
  color: string         // Tailwind colour key (for styling map in component)
  description: string
  items: ResourceItem[]
}

export const resourceCategories: ResourceCategory[] = [
  {
    id: 'frontend',
    label: 'Web Dev – Frontend',
    icon: 'Monitor',
    color: 'blue',
    description: 'HTML, CSS, JavaScript and modern frontend frameworks',
    items: [
      {
        title: 'HTML5 & CSS3 Fundamentals',
        description: 'Semantic HTML, Flexbox, Grid, and responsive design basics',
        type: 'PDF',
        href: '#',
        size: '3.2 MB',
        badge: 'Week 1-4',
      },
      {
        title: 'JavaScript ES6+ Essentials',
        description: 'Arrow functions, destructuring, promises, async/await',
        type: 'PDF',
        href: '#',
        size: '4.1 MB',
        badge: 'Week 5-8',
      },
      {
        title: 'React.js Starter Guide',
        description: 'Components, hooks, state management, and routing',
        type: 'PDF',
        href: '#',
        size: '5.8 MB',
        badge: 'Week 9-12',
      },
      {
        title: 'Tailwind CSS Workshop',
        description: 'Utility-first CSS, responsive design, dark mode',
        type: 'Slide',
        href: '#',
        size: '2.4 MB',
      },
      {
        title: 'Frontend Lab Files',
        description: 'Starter templates and exercise files for all lab sessions',
        type: 'Zip',
        href: '#',
        size: '18 MB',
      },
    ],
  },
  {
    id: 'backend',
    label: 'Web Dev – Backend',
    icon: 'Server',
    color: 'violet',
    description: 'Server-side programming, APIs, and database management',
    items: [
      {
        title: 'Node.js & Express Fundamentals',
        description: 'REST API design, middleware, and authentication basics',
        type: 'PDF',
        href: '#',
        size: '4.7 MB',
        badge: 'Week 1-5',
      },
      {
        title: 'PHP & Laravel Introduction',
        description: 'MVC architecture, Eloquent ORM, Blade templating',
        type: 'PDF',
        href: '#',
        size: '5.3 MB',
        badge: 'Week 6-10',
      },
      {
        title: 'MySQL Database Design',
        description: 'ER diagrams, normalization, joins and transactions',
        type: 'PDF',
        href: '#',
        size: '3.9 MB',
      },
      {
        title: 'RESTful API Best Practices',
        description: 'API versioning, status codes, JWT authentication',
        type: 'Slide',
        href: '#',
        size: '2.1 MB',
      },
      {
        title: 'Backend Lab Files',
        description: 'Project scaffolds and database seed files',
        type: 'Zip',
        href: '#',
        size: '22 MB',
      },
    ],
  },
  {
    id: 'networking',
    label: 'Network Infrastructure',
    icon: 'Network',
    color: 'emerald',
    description: 'TCP/IP, routing, switching, and network security fundamentals',
    items: [
      {
        title: 'Network Fundamentals (OSI Model)',
        description: 'OSI & TCP/IP model, protocols, and addressing',
        type: 'PDF',
        href: '#',
        size: '2.8 MB',
        badge: 'Week 1-3',
      },
      {
        title: 'Cisco Routing & Switching',
        description: 'VLAN, STP, inter-VLAN routing, and OSPF basics',
        type: 'PDF',
        href: '#',
        size: '6.5 MB',
        badge: 'Week 4-8',
      },
      {
        title: 'Network Security Essentials',
        description: 'Firewalls, ACLs, VPN, and common attack vectors',
        type: 'Slide',
        href: '#',
        size: '3.3 MB',
      },
      {
        title: 'Packet Tracer Lab Activities',
        description: 'Hands-on simulation exercises with Cisco Packet Tracer',
        type: 'Zip',
        href: '#',
        size: '9.4 MB',
      },
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud Services',
    icon: 'Cloud',
    color: 'sky',
    description: 'Cloud computing concepts and Huawei Cloud (HCIA) preparation',
    items: [
      {
        title: 'Cloud Computing Concepts',
        description: 'IaaS, PaaS, SaaS, deployment models and key vendors',
        type: 'PDF',
        href: '#',
        size: '2.5 MB',
        badge: 'Week 1-2',
      },
      {
        title: 'Huawei Cloud Architecture',
        description: 'ECS, OBS, VPC, and core Huawei Cloud services overview',
        type: 'PDF',
        href: '#',
        size: '4.0 MB',
        badge: 'HCIA Prep',
      },
      {
        title: 'HCIA Cloud Service Exam Guide',
        description: 'Study guide aligned with official HCIA-Cloud Service syllabus',
        type: 'PDF',
        href: '#',
        size: '7.2 MB',
        badge: 'HCIA',
      },
      {
        title: 'Cloud Lab Walkthroughs',
        description: 'Step-by-step Huawei Cloud console exercises',
        type: 'Video',
        href: '#',
      },
    ],
  },
]

// ─── Certifications ────────────────────────────
export type Certification = {
  name: string
  issuer: string
  issued: string
  expires?: string
  credentialId?: string
  href: string
  icon: string        // Lucide icon name
  highlight?: boolean
  color: string
}

export const certifications: Certification[] = [
  {
    name: 'HCIA – Cloud Service',
    issuer: 'Huawei ICT Academy',
    issued: 'Mar, 16 2024',
    expires: 'Mar, 16 2028',
    href: '/images/certs/hcia-cloud.pdf',
    icon: 'Cloud',
    highlight: true,
    color: 'sky',
  },
]

// ─── Skills ───────────────────────────────────
// Skill levels — based on self-assessment quiz (honest, no fake %)
// proficient  = คล่องแคล่ว ใช้ได้ดีในงานจริง + สอนได้
// functional  = ทำงานอิสระได้ บางเรื่องยังค้น
// learning    = กำลังพัฒนา เคยใช้ แต่ยังไม่คล่อง
export type SkillLevel = 'proficient' | 'functional' | 'learning'

export type Skill = {
  name: string
  level: SkillLevel
}

export type SkillGroup = {
  category: string
  icon: string
  color: string
  skills: Skill[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Teaching & Pedagogy',
    icon: 'GraduationCap',
    color: 'indigo',
    skills: [
      { name: 'Lesson Planning', level: 'functional' },
      { name: 'Student Assessment', level: 'functional' },
      { name: 'LMS (Google Classroom)', level: 'functional' },
      { name: 'Lab Activity Design', level: 'functional' },
      { name: 'Technical Documentation', level: 'functional' },
    ],
  },
  {
    category: 'Web Development',
    icon: 'Code2',
    color: 'blue',
    skills: [
      { name: 'HTML / CSS', level: 'proficient' },
      { name: 'JavaScript (ES6+)', level: 'proficient' },
      { name: 'React.js', level: 'functional' },
      { name: 'PHP', level: 'functional' },
      { name: 'MySQL', level: 'functional' },
      { name: 'Git / GitHub', level: 'functional' },
      { name: 'Node.js', level: 'functional' },
    ],
  },
  {
    category: 'Networking & Cloud',
    icon: 'Network',
    color: 'emerald',
    skills: [
      { name: 'TCP/IP & OSI Model', level: 'proficient' },
      { name: 'VLAN / Switching', level: 'proficient' },
      { name: 'Huawei Cloud (HCIA)', level: 'functional' },
      { name: 'Packet Tracer', level: 'functional' },
      { name: 'Network Security', level: 'functional' },
      { name: 'Routing Protocols', level: 'functional' },
    ],
  },
]

// ─── Experience ────────────────────────────────
export type ExperienceItem = {
  role: string
  institution: string
  period: string
  periodTh?: string
  location: string
  description: string
  highlights: string[]
  current?: boolean
}

export const experiences: ExperienceItem[] = [
  {
    role: 'IT Instructor',
    institution: 'Siam Business Technological College (SBAC)',
    period: 'Aug 2024 – Present',
    periodTh: '26 ส.ค. 2567 – ปัจจุบัน',
    location: 'Bangkok, Thailand',
    description:
      'Full-time instructor responsible for planning, delivering, and evaluating courses in Web Development, Networking, and Cloud Computing for vocational and higher-education students.',
    highlights: [
      'Designed and delivered curriculum for Web Development (Frontend & Backend)',
      'Developed hands-on lab activities using Cisco Packet Tracer, GitHub Classroom, and Huawei Cloud sandbox',
      'Mentored students for national ICT skill competitions',
      'Integrated modern tools (VS Code, GitHub, Figma) into classroom workflows',
    ],
    current: true,
  },
  {
    role: 'Military Service – Conscript Soldier',
    institution: 'กอง รปภ.ฐท.กท. กรม รปภ.นย. · Royal Thai Navy',
    period: 'Aug 2023 – Jul 2024',
    periodTh: '1 ส.ค. 2566 – 30 ก.ค. 2567',
    location: 'Bangkok, Thailand',
    description:
      'Completed mandatory military service with the Security Regiment, Royal Thai Marine Corps, Naval Base Bangkok. Served as a conscript soldier (ทหารกองประจำการ) for one full year.',
    highlights: [
      'Fulfilled national military service obligation with discipline and responsibility',
      'Developed strong teamwork, time management, and leadership skills',
      'Maintained personal study in IT and web development throughout the service period',
    ],
    current: false,
  },
  {
    role: 'Student Teacher (ฝึกสอน)',
    institution: 'Siam Business Technological College (SBAC)',
    period: 'Academic Year 2022',
    periodTh: 'ปีการศึกษา 2565',
    location: 'Bangkok, Thailand',
    description:
      'Completed a one-year practicum teaching placement as part of the undergraduate programme, gaining hands-on classroom experience in IT and Computer Science subjects.',
    highlights: [
      'Planned and delivered lessons in computer fundamentals and web development basics',
      'Supported senior instructors in lab sessions and student assessments',
      'Gained practical experience in classroom management and curriculum delivery',
    ],
    current: false,
  },
]

// ─── About – Personal info blocks ─────────────
export const aboutBlurbs = [
  {
    icon: 'BookOpen',
    title: 'Education',
    body: "Bachelor's Degree in Computer Science / Information Technology\nSiam Business Technological College (SBAC)",
  },
  {
    icon: 'Wifi',
    title: 'Network Passion',
    body: 'Deeply interested in network infrastructure design, routing protocols, and building secure, resilient enterprise networks.',
  },
  {
    icon: 'Cloud',
    title: 'Cloud Journey',
    body: 'Certified HCIA Cloud Service professional (Huawei). Exploring hybrid cloud and containerization (Docker / Kubernetes) as the next frontier.',
  },
  {
    icon: 'Users',
    title: 'Teaching Philosophy',
    body: 'Learning by doing. Every concept should be paired with a real project — because employers hire skills, not memorised textbooks.',
  },
]

// ─── Footer contact links ──────────────────────
export const contactLinks = [
  { label: 'Email', icon: 'Mail', href: `mailto:${personalInfo.email}` },
  { label: 'GitHub', icon: 'Github', href: personalInfo.github },
  { label: 'LinkedIn', icon: 'Linkedin', href: personalInfo.linkedin },
]
