module.exports = {
  content: ["./index.html", "./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: {
          light: "#2c2d30",
          gray: "#1e1f22",
          dark: "#151619",
          orange: "#e36642",
        },
      },
    },
  },
  plugins: [],
};
