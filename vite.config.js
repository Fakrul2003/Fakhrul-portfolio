import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: './', // সাদা স্ক্রিন সমস্যা সমাধানের জন্য এটি জরুরি
})