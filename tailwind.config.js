/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var'],
      },
    },
  },
  plugins: [],
};
