/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FF5A1F",
          light: "#FF954E",
          hover: "#1E40AF",
          active: "#1E3A8A",
          dark: "#111827",
        },
        secondary: {
          DEFAULT: "#111827",
          light: "#131b2d",
        },
        tertiary: {
          DEFAULT: "#cbd5e1",
        },
      },
    },
  },
  plugins: [
    require("flowbite/plugin")({
      charts: true,
    }),
  ],
};
