/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      aspectRatio: {
        "156/144": "auto 156 / 144",
      },
      transition:{
        "custom": "transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
      }
    },
    plugins: [],
  },
};
