/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "fleks-blue-dark": "#00555B",
        "fleks-blue": "#5BA6AB",
        "fleks-blue-light": "#BBFBFF",
        "fleks-gray-light": "#DEECEE",
        "fleks-green": "#799D9F",
        "fleks-black": "#232323",
        "fleks-gray-dark": "#919191",
        "fleks-gray": "#CCCCCC",
        "fleks-yellow": "#FFF5C1",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
