module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        black14: '#141414',
        'custom-blue-text': '#4AAFF7',
        'custom-blue-button': '#1697F5',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
        display: ['Open Sans', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
    },
  },

  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
  },
  plugins: [],
};
