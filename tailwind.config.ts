import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/screens/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
    "./src/utils/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.{svg,png,jpg,ico}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#115E56",
        secondary: "#CCFBEF",
        white: "#FFFFFF",
        dark: "#212636",
        grey: "#8A94A6",
        muted: "#667085",
        success: "#15B79F",
        error: "#F04438",
        accent: "#134E48",
        warning: "#FFF3C6",
        foreground: "#212636", // Add this line for text-foreground
        offWhite: "#F9FAFB", // Define background color
        mutedGrey: "#DCDFE4"
      },
      spacing: {
        18: "4.5rem",
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        lg: "12px",
        xl: "16px",
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
      },
      screens: {
        '2xl': '2397px', // Add this custom breakpoint
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
  ],
} satisfies Config;
