/** @type {import('tailwindcss').Config} */
export const content = [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
];
export const theme = {
  extend: {
    colors: {
      primary: "#447143", // اللون الرئيسي
      secondary: "#33b5ff", // اللون الثانوي
      customGray: "#f0f0f0", // لون رمادي مخصص
      customDark: "#333333", // لون داكن مخصص
    },
  },
};
export const plugins = [];
