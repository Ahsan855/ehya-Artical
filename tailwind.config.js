/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#183B56",

          secondary: "#1565D8",

          accent: "#0D2436",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
        },

        extend: {
          fontFamily: {
            subTitle: ["Open Sans", "sans-serif"],
            Title: ["Roboto", "sans-serif"],
          },
        },
      },
    ],
  },

  plugins: [require("daisyui")],
};
