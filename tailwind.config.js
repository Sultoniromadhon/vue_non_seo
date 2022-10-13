module.exports = {
  purge: [
    './src/**/*.vue'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
          colors: {
            'sulton': {
                '50': '#f5fbfc',
                '100': '#ebf7fa',
                '200': '#cdebf2',
                '300': '#afdfea',
                '400': '#74c8db',
                '500': '#38b0cb',
                '600': '#329eb7',
                '700': '#2a8498',
                '800': '#226a7a',
                '900': '#1b5663'
                
                }
            }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
