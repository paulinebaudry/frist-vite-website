import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
  import react from '@vitejs/plugin-react'

  export default defineConfig({
    base: 'https://paulinebaudry.com/d3-course-website/',
    plugins: [react()],
  })

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
