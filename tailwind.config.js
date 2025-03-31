/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      opacity: ['in-view'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
