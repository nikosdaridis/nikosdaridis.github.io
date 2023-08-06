/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(var(--color-primary) / <alpha-value>)",
        secondary: "hsl(var(--color-secondary) / <alpha-value>)",
        highlight: "hsl(var(--color-highlight) / <alpha-value>)",
        text: "hsl(var(--color-text) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
