/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-multi":
          "linear-gradient(to right, #BA68C8, #FFD54F, #4FC3F7, #A5D6A7)",
      },
      boxShadow: {
        "3xl-sky": "0 0 20px 5px rgba(135, 206, 235, 0.5)",
        "4xl-sky": "0 0 100px 60px rgba(135, 206, 235, 0.8)",
      },
      backdropBlur: {
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("tailwindcss-filters"),
  ],
};
