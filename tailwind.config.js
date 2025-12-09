/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          50: '#ecf7ff',
          100: '#cce7ff',
          200: '#99ceff',
          300: '#66b5ff',
          400: '#339cff',
          500: '#0084ff',
          600: '#0066cc',
          700: '#004d99',
          800: '#003366',
          900: '#001a33',
        }
      }
    },
  },
  plugins: [],
}
