import forms from '@tailwindcss/forms'

/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        background: '#0f1117',
        surface: '#1a1d24',
        textPrimary: '#f4f4f5',
        textSecondary: '#a0a0a0',
        border: '#2d2d2d',
        accent: '#16a34a',
      },
    },
  },
  variants: {
    extend: {
      opacity: ['in-view'],
    },
  },
  plugins: [forms],
}
