/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        custom: {
          DEFAULT: "#0F2A4A",
          green: "#24AE8D",
          purple: "#521D7B",
        },
      },
    },
  },
  plugins: [],
};
