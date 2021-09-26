module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderWidth: {
        DEFAULT: '0.5px'
      },
      colors: {
        'ink-lightest': '#7A7E80',
        'ink-lighter': '#464A4D',
        'ink-light': '#292C2E',
        ink: '#101113',
        background: '#020202',
        'sky-lightest': '#F7F9FA',
        'sky-lighter': '#F2F4F5',
        'sky-light': '#E3E5E6',
        sky: '#CDCFD0',
        'sky-dark': '#B4B6B8'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
