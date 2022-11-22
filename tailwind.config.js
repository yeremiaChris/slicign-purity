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
        DEFAULT: "1.5rem",
        sm: "1.5rem",
        lg: "2rem",
      },
    },
    extend: {
      boxShadow: {
        smooth: "0px 3.5px 5.5px rgba(0, 0, 0, 0.02)",
      },
    },
  },
  plugins: [],
};
