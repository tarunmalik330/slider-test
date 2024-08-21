/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#E67E22",
      },
      boxShadow: {
        custom: "0 4px 2px rgba(230, 126, 34, 1.1)",
      },
    },
  },
  plugins: [],
};
