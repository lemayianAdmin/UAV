/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{vue,js,ts,jsx,tsx}" // Include Vue files in the purge
  ],
  theme: {
    extend: {
      fontFamily: {
        rajdhani: ['Rajdhani'],
      }
    },
  },
  plugins: [],
}

