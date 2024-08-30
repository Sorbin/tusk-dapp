/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      teal: 'var(--teal)',
      purple: 'var(--purple)',
      black: 'var(--black)',
      white: 'var(--white)'
    },
    extend: {},
  },
  plugins: [],
}