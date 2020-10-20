module.exports = {
  purge: ['./pages/**/*.jsx', './components/**/*.jsx'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      mono: ['Fira Code', 'consolas', 'monospace'],
    },
    colors: {
      transparent: 'transparent',
      white: '#ffffff',
      black: '#000000',

      'red-crayola': '#ED254E',
      'oxford-blue': '#011936',
      'black-corai': '#465362',
      'alice-blue': '#EBF4FF',
      'blue-jeans': '#05a7c7',
      'pacific-blue': '#22AED1',
      'electric-indigo': '#682AF7',
      magnolia: '#FFFAFF',

      gray: '#4a5568',
      'darker-gray': '#2d3748',
      'darkest-gray': '#1a202c',
    },
    fontSize: {
      xl: '3rem',
      lg: '2rem',
      md: '1.3rem',
      normal: '16px',
    },
    fontWeight: {
      thin: 100,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    boxShadow: {
      default: '0 5px 10px rgba(224, 220, 220, 0.25)',
    },
    extend: {
      lineHeight: {
        relaxed: 1.75,
      },
    },
  },
  variants: {},
  plugins: [],
  corePlugins: {},
}
