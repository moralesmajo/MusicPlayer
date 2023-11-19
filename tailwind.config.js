/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      sm: '0.750rem',
      base: '1rem',
      xl: '1.333rem',
      '2xl': '1.777rem',
      '3xl': '2.369rem',
      '4xl': '3.158rem',
      '5xl': '4.210rem',
    },
    extend: {
      colors: {
        "white": "#DFFCE5",
        "greenish-black": "#000501",
        "light-black": "#202120",
        "light-green": "#12B587",
        "light-cyan": "#083B4A",
        "dark-cyan": "#062D38",
        "blue": "#20bde9"
      },
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [],
  },
}

