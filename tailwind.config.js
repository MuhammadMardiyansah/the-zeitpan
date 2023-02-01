/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily:{
        Patua : ['Patua One, cursive'],
        Source : ['Source Sans Pro, sans-serif'],
        plex : ['IBM Plex Mono, sans-serif'],
        Inter : ['Inter, sans-serif'],
      },

      colors: {
        'regal-blue': '#0e144a',
        'regal-gray': '#6F6F6F',
        'regal-red': '#FE5E44',
        'regal-black': '#0C0E2B',
      },
      
    },
  },
  plugins: [],
}
