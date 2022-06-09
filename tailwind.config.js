/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        warning: "#f37b1d",
        primary: "#0081ff",
        success: "#3eb93b",
        danger: "#ed1c24",
      },
    },
  },
  plugins: [],
}
