/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [

    "./src/**/*.{html,js}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

    "./src/modulosPagina/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {},
  },

  plugins: [require("daisyui")],
}

