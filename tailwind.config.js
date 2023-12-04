/** @type {import('tailwindcss').Config} */

const background = '#daece9';
const text1 = '#6483b2';
const text2 = '#3f2634';
const text2hover = '#553a49'

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "background-colour": background,
        "main-colour": text1,
        "second-colour": text2,
        "second-colour-100": text2hover,
        "second-colour-200": text2
      },
      textColor: {
        header: text1
      },
      fontWeight: {
        'bold': 600
      }
    }
  },
  plugins: [],
}

