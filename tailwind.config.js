/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Adjust the path according to your project structure
    './pages/**/*.{js,ts,jsx,tsx}', // If you use the pages directory
    './components/**/*.{js,ts,jsx,tsx}', // If you have a components directory
    './public/**/*.html', // Add this line to include HTML files in the public directory
  ],
  theme: {
    extend: {
      colors:{
        primary: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        secondary: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#00472D',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        banner:{
          50: '#3BD4AE'
        }
      }
    },
  },
  plugins: [],
}

