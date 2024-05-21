/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      center:true,
      padding:'2rem'
    },
    extend: {
      colors:{
        'brand':{
          1:'#227E98',
          2:'#7ED5E2',
          3:'#D6F3F7',
          4:'#EFFBFC'
        },
        'body':'#312D2D',
        'light':'#F6F1F1',
      }
    },
  },
  plugins: [],
}

