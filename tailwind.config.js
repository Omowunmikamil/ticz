/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grey98: "#FAFAFA",
        white: "#FFFFFF",
        gradient1: "#0E464F",
        gradient2: "#07373F",
        Hbg: "rgba(5, 37, 44, 0.40)",
      },
    },
  },
  plugins: [],
};
