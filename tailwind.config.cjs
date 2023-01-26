/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports =withMT ({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
});
