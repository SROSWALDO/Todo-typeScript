/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        backbody: 'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);'
      }
    },
  },
  plugins: [],
}