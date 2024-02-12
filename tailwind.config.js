/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-gold': '#FB8500',
        'gold': '#FFB703',
        'dark-blue': '#023047',
        'light-blue': '#219EBC',
        'soft-blue': '#8ECAE6'
      }
    },
    fontFamily: {
      'bebas-neue': ['Bebas Neue', 'sans-serif'], // Adicione sua fonte aqui
      'archivo-black': ['Archivo Black', 'sans-serif'],
      'lilita-one': ['Lilita One', 'sans-serif'],
      'outfit': ['Outfit', 'sans-serif'],
      'varela-round': ['Varela Round', 'sans-serif']
    },
  },
  plugins: [],
}