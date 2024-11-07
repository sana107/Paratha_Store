/** @type {import('tailwindcss').Config} */
export default {
  // content: ["*.html"],
  
  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ["Volkhov, serif"],
      },
      colors: {
        'bermuda_': '#fdc546',
      },
    },
  },
  plugins: [],
}

