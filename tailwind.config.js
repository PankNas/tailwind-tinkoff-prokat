/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        white: '#FFFFFF',
        yellow: '#FDCE25',
        black: {
          800: '#1C1C1C',
          900: '#000',
        },
      },
    },
  },
  plugins: [],
};
