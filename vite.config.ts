import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: Change this to your repository name if deploying to a project page
  // e.g. base: '/my-repo-name/'
  // If deploying to a custom domain or user page (username.github.io), leave as '/'
  base: '/comp4good/',
})
