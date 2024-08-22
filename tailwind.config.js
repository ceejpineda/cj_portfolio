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
    themes: [
      "light", 
      "dark", 
      "cupcake", 
      "business",
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

