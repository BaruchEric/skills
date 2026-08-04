import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Served from https://<user>.github.io/skills/ on GitHub Pages.
  base: "/skills/",
  plugins: [react()],
})
