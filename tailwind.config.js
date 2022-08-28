const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,tsx}', './index.html'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.gray,
      while: colors.white
    },
    extend: {
      backgroundImage: {
        'moyui-pattern': "url('//s2.loli.net/2022/08/28/e3mcuQk4NClWzEw.jpg')"
      }
    }
  },
  plugins: []
};
