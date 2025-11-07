// tailwind.config.js
import tailwindcss from '@tailwindcss/vite'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // এই লাইনটি যোগ করুন
  ],
  theme: {
    extend: {},
  },
  plugins: [
    tailwindcss()
  ],
   base: '/Fakhrul-portfolio/'
}