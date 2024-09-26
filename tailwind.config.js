/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        yellow: '#FDCE25',
        black: {
          800: '#1C1C1C',
          900: '#000',
        }
      },
    },
  },
  plugins: [],
}

