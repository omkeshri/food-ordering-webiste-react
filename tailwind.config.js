/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      aspectRatio: {
        '156/144': 'auto 156 / 144',
    },
  },
  plugins: [],
}

}