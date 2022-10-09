/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container : {
      center: true, 
      padding: '16px',
    },
    extend: {
      colors : {
        primary : 'black',
        secondary : '#0f172a'
      },
    },
  },
  plugins: [],
}
