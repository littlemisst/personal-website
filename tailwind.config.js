/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      'extra-bold': '800',
      black: '900',
    },
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