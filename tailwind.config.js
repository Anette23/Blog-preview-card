/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html, js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(47, 88%, 63%)",
        cardBg: "hsl(0, 0%, 100%)",
        text: "hsl(0, 0%, 50%)",
        heading: "hsl(0, 0%, 7%)",
      },
    },
  },
  plugins: [],
};
