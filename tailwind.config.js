/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        lg: "2rem",
      },
    },
    extend: {
      boxShadow: {
        smooth: "0px 3.5px 5.5px rgba(0, 0, 0, 0.02)",
        soft: "0px 7px 23px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};
