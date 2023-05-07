/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#3B82F6", // Medium blue
        secondary: "#14B8A6", // Teal
        accent: "#FB923C", // Orange
        background: "#E0F2FE", // Light blue
      },
      textColor: {
        // primary: "#3B82F6", // Medium blue
        primary: "#30d03f", // Primary blue
        secondary: "#14B8A6", // Teal
        // accent: "#FB923C", // Orange
        accent: "#d03f30",
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
