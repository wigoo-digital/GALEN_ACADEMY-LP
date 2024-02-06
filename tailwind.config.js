/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`
  ],
  theme: {
    animatedSettings: {
      animatedSpeed: 1000,
      heartBeatSpeed: 500,
      hingeSpeed: 2000,
      bounceInSpeed: 750,
      bounceOutSpeed: 750,
      animationDelaySpeed: 500,
      classes: ["bounce", "heartBeat"]
    },
    extend: {
      fontFamily: {
        display: "Space Grotesk",
        title: "Roc Grotesk"
      },
      maxWidth: {
        "8xl": "1440px"
      },
      colors: {
        neutral: {
          50: "#D8D8DF",
          100: "#EEEEF0",
          200: "#D8D8DF",
          500: "#727485",
          700: "#4B4C59"
        },
        crimson: "#FF3264",
        primary_black: "#000B28",
        primary_blue: "#4242FF",
        primary_secondary: "#FEDAC2"
      }
    }
  },
  plugins: [require("tailwind-animatecss")]
};
