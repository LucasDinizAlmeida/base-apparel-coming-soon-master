/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Josefin Sans', 'sans-serif']
    },
    extend: {
      colors: {
        'white': '#ffffff',
        'redCustom': {
          300: '#ce9797',
          600: '#f96262'
        },
        'grayCustom': {
          900: '#413a3a'
        },
        'linear': {
          100: '#ffffff',
          200: '#fff5f5',
          300: '#f8bfbf',
          400: '#ee8c8c'
        }
      }
    },
  },
  plugins: [],
}