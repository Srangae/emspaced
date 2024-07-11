/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Adjust the path according to your project structure
    './pages/**/*.{js,ts,jsx,tsx}', // If you use the pages directory
    './components/**/*.{js,ts,jsx,tsx}', // If you have a components directory
    './public/**/*.html', // Add this line to include HTML files in the public directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

