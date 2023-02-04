/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,vue,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: '#1D4ED8',
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        oswald: ["Oswald", "sans-serif"]
      },
    },
  },
  plugins: [],
};
