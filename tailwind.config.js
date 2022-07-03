/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#814df9",

          "secondary": "#ecc9ff",

          "accent": "#b9a0e5",

          "neutral": "#221523",

          "base-100": "#F4F2F8",

          "info": "#55B4E7",

          "success": "#6FE7C3",

          "warning": "#E29C03",

          "error": "#F1556A",

        },
      },
    ],
  },
}
