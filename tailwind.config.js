/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#3D72FB", // Blue
        primaryHover: "#0444E8", // Darker Blue for hover effect
        secondary: "#FBBF24", // Amber
        tertiary: "#ECF1FF", // Light blue
      },
      textColor: {
        primary: "#3D72FB", // Blue
        secondary: "#FBBF24", // Amber
        accent: "#F87171", // Red
        tertiary: "#ECF1FF", // Light blue
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
