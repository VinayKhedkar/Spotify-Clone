export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['"Nunito"', 'sans-serif'],
      },
      screens: {
        'xs': '320px',
        '2xs': '375px',
        '3xs': '425px',
      },
      fontSize: {
        '10px': '10px', 
      },
    },
    variants: {
      extend: {
        fontSize: ['responsive'],
      },
    },
  },
  plugins: [],
}