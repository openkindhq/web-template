/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}","./node_modules/@openkind/components/**/*.js"],
  presets:[
    require("@openkind/components/tailwind.config")
  ]
};