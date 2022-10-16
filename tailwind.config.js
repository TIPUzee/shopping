/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'imgPlaceholder': 'url("./img-placeholder-svg.svg")'
      }, 
      boxShadow: {
        'inset-black': 'inset 0 0 5px black'
      }, 
      borderRadius: {
        'inherit': 'inherit'
      }
    },
  },
  plugins: [],
}
