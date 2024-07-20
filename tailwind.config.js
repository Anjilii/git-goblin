/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#39B6DE', // Updated primary color
        'primary-content': '#ffffff', // Text color on primary background
        second: '#1B6279', //button 
      },
    },
  },
  plugins: [require("daisyui")],
}
