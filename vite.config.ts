import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// ⚠️  For GitHub Pages: set VITE_BASE_PATH in your CI environment
//     (see .github/workflows/deploy.yml) or change the fallback below.
//     Example: '/portfolio/'
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.')
  return {
    plugins: [
      tailwindcss(),
      react(),
    ],
    base: env['VITE_BASE_PATH'] ?? '/',
  }
})
