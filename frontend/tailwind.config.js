/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tan: {
          50: '#f6f0e7',
          100: '#efe4d5',
          200: '#e8d8c3',
        },
      }
    },
  },
  plugins: [],
}

