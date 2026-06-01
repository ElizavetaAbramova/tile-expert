/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        parchment: {
          50: "#faf8f1",
          100: "#f4f0de",
          200: "#e4d7bb",
          300: "#d7c6a3",
        },

        terracotta: {
          50: "#f4e5dd",
          100: "#e7c8b6",
          200: "#d49f82",
          300: "#b97c5d",
          400: "#a77152",
          500: "#925f43",
          600: "#7a4e36",
        },

        ceramic: {
          50: "#e7eef3",
          100: "#cfdce4",
          200: "#9eb8c7",
          300: "#6f8fa3",
          400: "#556166",
          500: "#3e4950",
          600: "#2c3438",
        },

        sage: {
          50: "#eef3f0",
          100: "#d8e3dc",
          200: "#b9ccc1",
          300: "#8ba696",
          400: "#668576",
          500: "#4e685c",
          600: "#3d5248",
        },

        ochre: {
          50: "#f8efd8",
          100: "#f0dfad",
          200: "#dcb56d",
          300: "#cba257",
          400: "#b98b3e",
          500: "#98702f",
        },

        ink: {
          50: "#5f5647",
          100: "#514736",
          200: "#3d3529",
          300: "#232016",
          400: "#13120b",
        },
      },

      fontFamily: {
        heading: ["Oswald", "Bebas Neue", "Arial Narrow", "sans-serif"],

        body: ["Inter", "Source Sans Pro", "system-ui", "sans-serif"],

        decorative: ["Cormorant Garamond", "Georgia", "serif"],
      },

      boxShadow: {
        panel: "0 2px 0 rgba(19,18,11,0.15)",
        tile: "0 4px 12px rgba(19,18,11,0.12)",
      },

      borderRadius: {
        tile: "6px",
        panel: "10px",
      },

      backgroundImage: {
        paper:
          "linear-gradient(rgba(244,240,222,0.95), rgba(244,240,222,0.95))",
      },
    },
  },

  plugins: [],
};
