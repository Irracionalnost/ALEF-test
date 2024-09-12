/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue, js, ts, jsx, tsx}'],
  theme: {
    extend: {
      colors: {
        'gray-header' : '#1111117A',
        'primary-blue': '#01A7FD'
      }
    },
  },
  plugins: [],
}

