/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    base: false,
    themes: [
      "light", 
      "dark", 
      "cupcake", 
      "business",
      "nord",
      "winter",
      {
        "pastel": {
          ...require("daisyui/src/theming/themes")["pastel"],
          'base-100': '#f0f4f8',
        }
      },
      {
        "black": {
          ...require("daisyui/src/theming/themes")["black"],
          primary: "#2f4550"
        }, 
      }
    ],
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui')
  ],
});

