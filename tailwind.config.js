/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",  // Adjust according to the files you want to scan
    "./public/index.html",  // Add if you're using an HTML file
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
