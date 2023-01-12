/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // switchBtnShadow: {
      //   content: "",
      //   position: "absolute",
      //   width: "100%",
      //   height: "60px",

      //   // 'background': 'rgba(16, 50, 147, 0.28)' ,
      //   background: "red",
      //   filter: "blur(20px)",
      //   transform: "rotate(-90deg)",
      // },
    },
  },
  plugins: [],
};
