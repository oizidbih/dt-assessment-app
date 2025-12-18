/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'al-adaam': '#8A1538', // Primary Maroon
        'dune': '#A29475',     // Soft Beige
        'skyline': '#0d4261',  // Navy Blue
        'palm': '#129b82',     // Teal Green
        'sea': '#4194b3',      // Steel Blue
        'sunrise': '#fdf39d',  // Soft Yellow
        'deep-navy': '#040F25', // Sidebar Color
      }
    },
  },
  plugins: [],
}
