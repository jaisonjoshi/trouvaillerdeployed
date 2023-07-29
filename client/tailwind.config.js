/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    fontSize: {
      '2xs':'0.70rem',
      xs:'0.75rem',
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    colors: {
      transparent: 'transparent',
      'evergreen': '#00b771',
      'evergreen-tag': '#d8ffd8',
      'evergreendark' : '#03965e',
      'whiteglow': '#FFFFFF',
      'blacky': {
        'dark': '#000000',
        'medium': '#1A1A1A',
        'light': '#303030',
        'bright': '#4E4E4E',
      },
      'graydust': {
        'extralight': '#F7F7F7',
        'light': '#F6F6F6',
        'normal': '#949494',
        'medium': '#666666',
        'dark': '#000000a6',
      },
      'status': {
        '100': '#2AF599',
        '150': '#BCFFE1',
        '200': '#126BF0',
        '250': '#EEF6FF',
        '300': '#FF0000',
        '350': '#FEF2F2',

      }
    },
    extend: {
      screens: {
        'xs': '464px',
      },

      backgroundImage: {
        'hero-image': 'url("./Pages/Assets/b_img1.png")',

        'green-slop': "url('/public/images/Greenbg.png')",
      }

    },
  },
  plugins: [require('tailwind-scrollbar-hide')
  ],

}
//#2AF599

/* 'evergreen': '#00b771',
 */