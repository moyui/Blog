const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,tsx}', './index.html'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.gray
    },
    extend: {
      backgroundImage: {
        'moyui-pattern': "url('//s2.loli.net/2022/08/26/taTxd7jpYgWPbuc.png')"
      }
    }
  },
  plugins: []
};
