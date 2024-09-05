/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./css/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('node_moludes/sweetalert2/dist/sweetalert2.min.js'),
    require('node_moludes/sweetalert2/dist/sweetalert2.min.css'),
  ],
}

