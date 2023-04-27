/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['.**/*.{html, css, js}'],
  // avoid purge css
  purge: false,
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      },
      spacing: {
        '5px': '5px',
      },
      backgroundImage: {
        'background-pattern': "url('images/backgroundPattern.png')",
        'header-texture': "url('images/header.png')",
        'pattern-bg': "url('images/pattern.jpeg')",
        'past-first': "url('images/past.jpg')",
        'past-second': "url('images/past2.jpg')",
      },
    },
  },
  plugins: [],
};
