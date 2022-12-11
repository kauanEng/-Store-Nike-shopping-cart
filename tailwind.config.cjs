/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xl': { 'max': '1200' },
      'lg': { 'max': '991px' },
      'md': { 'max': '767' },
      'sm': { 'max': '550' },
      'xsm': { 'max': '375px' }

    }
  },
  plugins: [],
}
