/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-purple': '#635FC7',
        'main-purple-hover': '#A8A4FF',
        'main-black': '#000112',
        'very-dark-grey': '#20212C',
        'dark-grey': '#2B2C37',
        'grey': '#3E3F4E',
        'medium-grey': '#828FA3',
        'light-grey': '#E4EBFA',
        'very-light-grey': '#F4F7FD',
        'main-red': '#EA5555',
        'main-red-hover': '#FF9898',
      }
    },
  },
  plugins: [],
};
