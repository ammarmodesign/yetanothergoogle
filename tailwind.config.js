/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#34d399",
          secondary: "#fda4af",
          accent: "#0284c7",
          neutral: "#1c1917",
          "base-100": "#111",
          info: "#2563eb",
          success: "#047857",
          warning: "#facc15",
          error: "#be123c",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
