# Ratchanon Semsayan – Portfolio Website

A clean, modern portfolio website for **Ratchanon Semsayan**, IT Instructor at Siam Business Technological College (SBAC).

**Tech Stack:** React 19 · TypeScript · Vite 6 · Tailwind CSS v4 · Framer Motion · Lucide React

---

## Features

- Dark / Light mode (respects OS preference, persists in localStorage)
- Sticky navbar with active-section tracking
- Smooth scroll-reveal animations via Framer Motion
- Education Resources section with Quick Search and category tabs
- Certifications, Skills with animated progress bars, Experience timeline
- Fully responsive (mobile-first)
- Automated GitHub Pages deployment via GitHub Actions

---

## Project Structure

```
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions CI/CD
├── public/
│   ├── favicon.svg
│   └── profile.jpg             # ← Place your photo here
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Resources.tsx       # Education Resources (priority section)
│   │   ├── About.tsx           # About & Certifications
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   └── data.ts             # ← All text, links, content here
│   ├── hooks/
│   │   └── useTheme.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
└── tsconfig.app.json
```

---

## Local Development Setup

### Prerequisites
- Node.js ≥ 18 (recommended: 20 LTS)
- npm ≥ 9

### 1. Install dependencies

```bash
npm install
```

### 2. Start the dev server

```bash
npm run dev
```

Open http://localhost:5173 in your browser.

### 3. Build for production

```bash
npm run build
```

The output is in the `dist/` folder.

---

## Personalisation

All content is centralised in **`src/data/data.ts`**. Open it and update:

| Field | What to change |
|-------|---------------|
| `personalInfo` | Name, email, GitHub URL, LinkedIn, bio |
| `resourceCategories[].items[].href` | Real download links for your materials |
| `certifications[].credentialId` | Your actual credential IDs |
| `experiences` | Your real job history |
| `skillGroups[].skills[].level` | Adjust skill percentages |

### Adding your profile photo

1. Add a photo named `profile.jpg` to the `public/` folder.
2. The Hero section will automatically display it. If the image fails to load, it falls back to the initials **RS**.

---

## GitHub Pages Deployment

### Step 1 – Create a GitHub repository

1. Go to https://github.com/new
2. Create a **public** repository (e.g., `portfolio`)
3. Do **not** initialise with a README (your files are ready)

### Step 2 – Enable GitHub Pages

1. Go to your repo → **Settings** → **Pages**
2. Under **Source**, choose **GitHub Actions**

### Step 3 – Update the base path

Edit `.github/workflows/deploy.yml` and replace `your-repo-name` with your actual repo name:

```yaml
VITE_BASE_PATH: /portfolio/   # ← your repo name
```

### Step 4 – Push your code

```bash
# Inside the project folder
git init
git add .
git commit -m "Initial commit: portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### Step 5 – Wait for deployment

GitHub Actions will automatically build and deploy your site. After ~2 minutes, your portfolio will be live at:

```
https://YOUR_USERNAME.github.io/YOUR_REPO/
```

You can monitor the deployment progress under **Actions** → **Deploy to GitHub Pages**.

---

## Manual Deployment (without GitHub Actions)

```bash
npm run build
# Then upload the contents of dist/ to any static hosting
```

---

## Customisation Tips

### Change the accent colour

In `src/index.css`, update the `--color-primary-*` tokens inside the `@theme` block to any colour you prefer.

### Add a new resource category

In `src/data/data.ts`, add a new object to the `resourceCategories` array following the existing pattern. Add the corresponding Lucide icon name to the `categoryIconMap` in `Resources.tsx`.

### Add a new section

1. Create `src/components/YourSection.tsx`
2. Import and add it in `src/App.tsx`
3. Add a nav link in `src/data/data.ts` → `navLinks`

---

## License

MIT – feel free to adapt for your own portfolio.
