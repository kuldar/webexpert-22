const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    fontFamily: {
      sora: ["Sora", ...defaultTheme.fontFamily.sans],
    },
    screens: {
      xs: "375px",
      ...defaultTheme.screens,
      lg: "960px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      // Grays
      "metal-700": "#111317",
      "metal-600": "#2B303A",
      "metal-500": "#3F4756",
      "metal-400": "#7A818E",
      "metal-300": "#A7B7D8",
      "metal-200": "#D3DAE8",
      "metal-100": "#E9EDF4",
      // Reds
      "red-600": "#911812",
      "red-500": "#e1261c",
    },
    boxShadow: {
      DEFAULT: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      button:
        "0px 4px 10px rgba(0, 0, 0, 0.15), inset 0px -4px 0px rgba(0, 0, 0, 0.25)",
      "button-active":
        "0px 0px 10px rgba(0, 0, 0, 0.25), inset 0px 4px 0px rgba(0, 0, 0, 0.25)",
    },
  },
};
