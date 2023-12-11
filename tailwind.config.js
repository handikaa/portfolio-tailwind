/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#0766AD",
        seccondary: "#475569",
        hover: "#29ADB2",
        dark: "#020617",
        thridc: "#C5E898",
        four: "#F3F3F3",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
