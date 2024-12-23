/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#60A5FA",
        secondary: "#3B82F6",
        bgcolor: "e4e1da",
        dark: "#1E3A8A",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
