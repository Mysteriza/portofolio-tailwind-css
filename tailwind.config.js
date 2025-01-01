/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"], // Aktifkan PurgeCSS
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "16px", // Padding default
        sm: "20px", // Padding untuk layar kecil
        lg: "24px", // Padding untuk layar besar
      },
    },
    extend: {
      colors: {
        primary: "#60A5FA",
        secondary: "#3B82F6",
        bgcolor: "#e4e1da", // Perbaiki kode warna
        dark: "#1E3A8A",
      },
      screens: {
        "2xl": "1320px", // Tambahkan breakpoint kustom
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"], // Gunakan Inter sebagai font utama
      },
      spacing: {
        128: "32rem", // Contoh: Tambahkan spacing kustom
      },
      borderRadius: {
        xl: "12px", // Contoh: Tambahkan border radius kustom
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"), // Contoh: Tambahkan plugin forms
  ],
};
