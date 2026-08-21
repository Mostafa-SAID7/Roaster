/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: { 50: '#fcfaf6', 100: '#f7f1e8', 200: '#efe1cf', 300: '#e7c99f', 400: '#e7b977', 500: '#cf9651', 600: '#b9783d', 700: '#915a2e', 800: '#6b4227', 900: '#4c2d1c' },
        dark: { 50: '#f4f6f5', 100: '#dce2e0', 200: '#c1cac7', 300: '#9da9a5', 400: '#7a8984', 500: '#5e6e69', 600: '#465651', 700: '#31413d', 800: '#202e2b', 900: '#13211f', 950: '#0b1514' },
        cream: '#f7f1e8',
      },
      fontFamily: { macondo: ['Macondo', 'cursive'], exo: ['"Exo 2"', 'sans-serif'] },
      animation: { fadeIn: 'fadeIn 0.6s ease-out', slideInUp: 'slideInUp 0.6s ease-out forwards', slideInDown: 'slideInDown 0.6s ease-out forwards', slideInLeft: 'slideInLeft 0.6s ease-out forwards', slideInRight: 'slideInRight 0.6s ease-out forwards', scaleIn: 'scaleIn 0.6s ease-out', bounce: 'bounce 2s infinite', pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite', float: 'float 3s ease-in-out infinite' },
      keyframes: { fadeIn: { from: { opacity: '0' }, to: { opacity: '1' } }, slideInUp: { from: { opacity: '0', transform: 'translateY(30px)' }, to: { opacity: '1', transform: 'translateY(0)' } }, slideInDown: { from: { opacity: '0', transform: 'translateY(-30px)' }, to: { opacity: '1', transform: 'translateY(0)' } }, slideInLeft: { from: { opacity: '0', transform: 'translateX(-30px)' }, to: { opacity: '1', transform: 'translateX(0)' } }, slideInRight: { from: { opacity: '0', transform: 'translateX(30px)' }, to: { opacity: '1', transform: 'translateX(0)' } }, scaleIn: { from: { opacity: '0', transform: 'scale(0.95)' }, to: { opacity: '1', transform: 'scale(1)' } }, bounce: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } }, pulse: { '0%, 100%': { opacity: '1' }, '50%': { opacity: '0.5' } }, float: { '0%, 100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-8px)' } } },
    },
  },
  plugins: [],
};
