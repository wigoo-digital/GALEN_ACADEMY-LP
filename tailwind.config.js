/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
    "./node_modules/rizzui/dist/*.{js,ts,jsx,tsx}",
  ],
  prefix: "",
  theme: {
    animatedSettings: {
      animatedSpeed: 1000,
      heartBeatSpeed: 500,
      hingeSpeed: 2000,
      bounceInSpeed: 750,
      bounceOutSpeed: 750,
      animationDelaySpeed: 500,
      classes: ["bounce", "heartBeat"],
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        display: "Space Grotesk",
        title: "Roc Grotesk",
      },
      maxWidth: {
        "8xl": "1440px",
      },
      colors: {
        neutral: {
          50: "#D8D8DF",
          100: "#EEEEF0",
          200: "#D8D8DF",
          500: "#727485",
          700: "#4B4C59",
        },
        crimson: "#FF3264",
        primary_black: "#000B28",
        primary_blue: "#4242FF",
        primary_secondary: "#FEDAC2",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("tailwind-animatecss"),
    require("@tailwindcss/forms"),
  ],
};
