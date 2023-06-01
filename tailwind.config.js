/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'white': {
        DEFAULT: '#fff',
        dark: '#e6e6e6'
      },
      'white-smoke': '#D9D9D9',
      'indigo': '#3F3B6C',
      'purple': '#624F82',
      'light-purple': '#9F73AB',
      'teal': '#A3C7D6',
      'gray-dark': '#AAA8A8',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      nunito: ['Nunito', 'sans-serif'],
      gochi: ['Gochi Hand', 'cursive']
    },
    extend: {},
  },
  plugins: [],
}