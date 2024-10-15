/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "rgba(-0, 0, 49, 1)",
      },
      textColor: {
        primary: "rgba(-0, 0, 49, 1)",
        dreams: "rgba(71,76,72, 0.2)",
      },
    },
  },
  plugins: [],
};
