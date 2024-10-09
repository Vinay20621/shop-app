/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBeige: '#F7F1EA',
        customGreen: '#29A841',
        customBrown : '#976C3A',
        customGray : '#F5F5F5'
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}

