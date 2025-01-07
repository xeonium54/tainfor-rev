/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    fontFamily: {
      'primary': 'Geist',
      'secondary': '"Geist Mono"'
    },
    container:{
      center: true,
      padding: '8rem',
    },
    extend: {
      backgroundSize: {
        'bigger': '45%',
      },
    },
  },
  plugins: [],
}

