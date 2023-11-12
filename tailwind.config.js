/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      // TODO clean up colors
      backgroundColor: {
        primary: "ffffff", // White
        // primaryHover: "#2651b8", // Darker Blue for hover effect
        secondary: "#f2f2f2", // Light Gray
      },
      textColor: {
        primary: "#ED1C24", // Cinnamon
        // primary: "#c83e4d", // Cinnamon
        secondary: "#FBBF24", // Amber
        darkGrey: "#333333", // Dark Grey
        "neutral-500": "#6B7280", // Gray 500
        "neutral-700": "#4B5563", // Gray 700
        "neutral-900": "#1F2937", // Gray 900
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-shadow": {
          "text-shadow": "10px 10px 20px rgba(0, 0, 0, 1)",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
