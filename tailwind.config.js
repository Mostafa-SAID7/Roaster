/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#faf8f6',
          100: '#f5f1ed',
          200: '#ebe3db',
          300: '#e0d5c9',
          400: '#d4a373',
          500: '#c89456',
          600: '#b8843d',
          700: '#9d6f32',
          800: '#7a5428',
          900: '#5a3d1f',
        },
        dark: {
          50: '#f5f5f5',
          100: '#e8e8e8',
          200: '#d1d1d1',
          300: '#b9b9b9',
          400: '#a1a1a1',
          500: '#898989',
          600: '#717171',
          700: '#595959',
          800: '#414141',
          900: '#1a1614',
        },
        cream: '#E9EDC9',
      },
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          'from': { opacity: '0', transform: 'translateY(10px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
