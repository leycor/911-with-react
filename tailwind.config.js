module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {

    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1350px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

    fontFamily: {
      poppins: ['Poppins'],
    },

    extend: {
      height: {
        target: '30rem'
      },

      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        nav: '0 2px 3px 0 rgba(0, 0, 0, 0.56), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
      },

      colors: {
        'red-full': '#ED1B26'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
