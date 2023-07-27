/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cornflower: "#9ae1f0",
        primary: { "50": "#eff6ff", "100": "#dbeafe", "200": "#bfdbfe", "300": "#93c5fd", "400": "#60a5fa", "500": "#3b82f6", "600": "#2563eb", "700": "#1d4ed8", "800": "#1e40af", "900": "#1e3a8a", "950": "#172554" },
      },
      aspectRatio: {
        '16/9' : '16 / 9',
        '16/8' : '16 / 8',
        '16/7' : '16 / 7',
        '16/6' : '16 / 6',
        '16/5' : '16 / 5',
      }
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
