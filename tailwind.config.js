module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: { 50: '#fff8f2', 100: '#f9e9dd', 200: '#f1cfbd', 300: '#e4ad8e', 400: '#d08a67', 500: '#b86f4b', 600: '#9f5b3e', 700: '#8f4f37', 800: '#6d392b', 900: '#4a3025' },
        dark: { 50: '#f7f3ee', 100: '#e8ded2', 200: '#d1c0b0', 300: '#ad9888', 400: '#8b7567', 500: '#6e584c', 600: '#554039', 700: '#402d27', 800: '#33231f', 900: '#2b1d19', 950: '#211815' },
        cream: '#f8f4ed',
        paper: '#f8f4ed',
        ivory: '#fffdf8',
        sand: '#d8c5aa',
        mediterranean: '#356879',
      },
      fontFamily: { macondo: ['Macondo', 'cursive'], exo: ['"Exo 2"', 'sans-serif'] },
      animation: { fadeIn: 'fadeIn 0.6s ease-out', slideInUp: 'slideInUp 0.6s ease-out forwards', slideInDown: 'slideInDown 0.6s ease-out forwards', slideInLeft: 'slideInLeft 0.6s ease-out forwards', slideInRight: 'slideInRight 0.6s ease-out forwards', scaleIn: 'scaleIn 0.6s ease-out', bounce: 'bounce 2s infinite', pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite', float: 'float 3s ease-in-out infinite' },
      keyframes: { fadeIn: { from: { opacity: '0' }, to: { opacity: '1' } }, slideInUp: { from: { opacity: '0', transform: 'translateY(30px)' }, to: { opacity: '1', transform: 'translateY(0)' } }, slideInDown: { from: { opacity: '0', transform: 'translateY(-30px)' }, to: { opacity: '1', transform: 'translateY(0)' } }, slideInLeft: { from: { opacity: '0', transform: 'translateX(-30px)' }, to: { opacity: '1', transform: 'translateX(0)' } }, slideInRight: { from: { opacity: '0', transform: 'translateX(30px)' }, to: { opacity: '1', transform: 'translateX(0)' } }, scaleIn: { from: { opacity: '0', transform: 'scale(0.95)' }, to: { opacity: '1', transform: 'scale(1)' } }, bounce: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } }, pulse: { '0%, 100%': { opacity: '1' }, '50%': { opacity: '0.5' } }, float: { '0%, 100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-8px)' } } },
    },
  },
  plugins: [],
};
