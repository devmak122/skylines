/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        scrollLeft: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-2000%)" },
        },
      },
      animation: {
        scrollLeft: "scrollLeft 300s linear infinite",
      },
      backgroundImage: {
        "footer-bg": "url(./assets/images/footer_bg.svg)",
      },
      screens: {
        laptop: { min: "1068px", max: "1920px" },
        tablet: { min: "768px", max: "1066px" },
        mobile: { min: "300px", max: "962px" },

      },
      fontFamily: {
        poppins: ["Poppins"],
        Montserrat: ["Montserrat"],
        lora: ["Lora"],
        roboto: ["Roboto"],
      },
      fontSize: {
        h1: ["60px", "1.2em"],
        h2: ["48px", "1.2em"],
        h3: ["40px", "1.2em"],
        h4: ["36px", "1.2em"],
        h5: ["24px", "1.2em"],
        h6: ["20px", "1.2em"],
        body: ["18px", "1.2em"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: "#39B54A",
        secondary: "#FFBB6B",
        tertiary: "#FDF3DA",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
