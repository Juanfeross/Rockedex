/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    screens: {
      'tablet': '656px',
      'sm-desktop': '1024px',
      'desktop': '1130px'
    },
    extend: {},
  },
  plugins: [],
}
