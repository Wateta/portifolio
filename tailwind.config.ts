import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#050505',
          800: '#121212',
          700: '#1e1e1e',
        },
        primary: {
          DEFAULT: '#10b981', 
          dark: '#059669',
        },
        accent: {
          DEFAULT: '#8b5cf6', 
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      }
    },
  },
  plugins: [],
} satisfies Config;