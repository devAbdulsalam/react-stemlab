/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

export default {
  content: ["./src/**/*.{astro,html,js,ts,jsx,tsx,css}", "./public/**/*.html"],
  theme: {
    screens: {
      xs: "150px",
      sm: "320px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    spacing: {
      // Pixel values from 0px to 1000px
      ...Object.fromEntries(
        Array.from({ length: 1001 }, (_, i) => [`${i}px`, `${i}px`])
      ),
      // Percentage values from 0% to 100%
      ...Object.fromEntries(
        Array.from({ length: 101 }, (_, i) => [`${i}%`, `${i}%`])
      ),
      // Viewport width values from 10vw to 200vw in increments of 10
      ...Object.fromEntries(
        Array.from({ length: 20 }, (_, i) => [
          `${(i + 1) * 10}vw`,
          `${(i + 1) * 10}vw`,
        ])
      ),
      0: "0px",
      1: "4px",
      2: "8px",
      3: "12px",
      4: "16px",
      5: "20px",
      6: "24px",
      7: "28px",
      8: "32px",
      9: "36px",
      10: "40px",
      11: "44px",
      12: "48px",
      13: "52px",
      14: "56px",
      15: "60px",
      16: "64px",
      17: "68px",
      18: "72px",
      19: "76px",
      20: "80px",
      21: "84px",
      22: "88px",
      23: "92px",
      24: "96px",
      25: "100px",
      110: "110px",
      120: "120px",
      130: "130px",
      140: "140px",
      150: "150px",
      160: "160px",
      170: "170px",
      180: "180px",
      190: "190px",
      200: "200px",
      260: "260px",
    },
    extend: {
      backgroundImage: {
        texture: "url('/texture.png')",
        logo: "url('/logo.png')",
      },
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        roboto: ["Roboto", "Poppins", "Fira Sans", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        primary: "#063785",
        "primary-light": "#031F4B",
        secondary: "#BF5926",
        "secondary-light": "#FEF9C3",
      },
      zIndex: {
        "-1": "-1",
        0: "0",
        1: "1",
        2: "2",
        1000: "1000",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".flex-center": {
          display: "flex",
          "justify-content": "center",
          "align-items": "center",
        },
        ".flex-between": {
          display: "flex",
          "justify-content": "space-between",
          "align-items": "center",
        },
        ".flex-start": {
          display: "flex",
          "justify-content": "flex-start",
          "align-items": "center",
        },
        ".flex-end": {
          display: "flex",
          "justify-content": "flex-end",
          "align-items": "center",
        },
        ".flex-around": {
          display: "flex",
          "justify-content": "space-around",
          "align-items": "center",
        },
        ".flex-evenly": {
          display: "flex",
          "justify-content": "space-evenly",
          "align-items": "center",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    }),
  ],
};
