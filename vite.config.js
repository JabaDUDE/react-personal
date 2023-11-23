import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ESLint } from 'eslint'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/react-personal/',
  plugins: [react(), ESLint()],
})
