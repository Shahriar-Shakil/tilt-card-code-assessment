/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00D1FF",
        purple: "#9E52FF",
        green: "#18CB63",
      },
    },
  },
  plugins: [],
};
