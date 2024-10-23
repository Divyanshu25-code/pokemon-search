/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blackColor: "var(--black-color)",
        textColor: "var(--text-color)",
        cyanColor: "var(--cyan-color)",
        cardBody: "var(--card-body)",
        background: "var(--background)",
      },
    },
  },
  plugins: [],
};
