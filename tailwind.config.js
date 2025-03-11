/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        logo: "url('/mdlogo.webp')", // Correct path
      },
      animation: {
        floating: "floatSideToSide 5s infinite alternate ease-in-out",
      },
      keyframes: {
        floatSideToSide: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(80vw)" },
        },
      },
    },
  },
  plugins: [],
};
