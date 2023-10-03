/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    mytheme: {
      primary: "#183B56",

      secondary: "#1565D8",

      accent: "#1dcdbc",
    },
    fontFamily: {
      open: ["Open Sans", "sans-serif"],
      robotoTitle: ["Roboto", "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
};
