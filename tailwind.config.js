/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        midas: {
          DEFAULT: "#D4AF37",
          dark: "#B8860B",
          light: "#FFE082",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out",
        "fade-in-delay": "fadeIn 0.8s ease-out 0.3s both",
        "fade-in-delay-2": "fadeIn 0.8s ease-out 0.6s both",
        "slide-up": "slideUp 0.6s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
