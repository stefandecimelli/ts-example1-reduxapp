/** @type {import('tailwindcss').Config} */

const background = '#daece9';
const text1 = '#6483b2';
const text2 = '#3f2634';

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "background-colour": background,
        "main-colour": text1,
        "second-colour": text2
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

