module.exports = {
  content: ["./index.html", "./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        header: {
          light: "#353840",
          dark: "#2c2d30",
        },
        main: {
          light: "#1e1f22",
          dark: "#151619",
          orange: "#e36642",
        },
      },
    },
  },
  plugins: [],
};
