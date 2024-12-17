/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:  '#de2c4d',
        secondary: '#fb923c',
        tertiary: '#F86E01'
      }, 
      fontFamily: {
        poppins: ['Poppins','sans-serif'],
        averia: ['Averia Serif Libre', 'Serif'],
      },
      container: {
      center: true,
      padding:{
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      } 
      }
    },
  },
  plugins: [],
} 