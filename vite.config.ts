import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages serves project sites from https://<user>.github.io/<REPOSITORY_NAME>/
// If you rename the repository, update `base` to match: "/<REPOSITORY_NAME>/"
export default defineConfig({
  base: '/personal-portfolio/',
  plugins: [react(), tailwindcss()],
})
