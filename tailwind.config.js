/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [

    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{html,js}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

    "./src/modulosPagina/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      margin:{
        '5px':'5px',
        '10%':'10%',
        '15%':'15%',
        '20%':'20%',
        '35%':'35%',
      }
    },
  },
  plugins: [require("daisyui")],
}
