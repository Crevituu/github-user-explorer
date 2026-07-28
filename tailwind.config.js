/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#f2f6ff',
          100: '#e0e9ff',
          200: '#c2d3ff',
          300: '#9bb3ff',
          400: '#6f8bff',
          500: '#4a63f0',
          600: '#3548c9',
          700: '#2a389e',
          800: '#232f7d',
          900: '#1d2765',
        },
      },
    },
  },
  plugins: [],
};
