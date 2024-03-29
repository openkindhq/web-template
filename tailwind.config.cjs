const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@openkind/components/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#111111",
      },
      fontFamily: {
        main: ["var(--font-dm_sans)", fontFamily.sans],
        heading: ["var(--font-rhd)", fontFamily.sans],
      },
    },
  },
  presets: [require("@openkind/components/tailwind.config")],
};
