/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      keyframes: {
        colorin: {
          "0%": {
            filter: "grayscale(100%)",
          },
          "100%": {
            filter: "grayscale(0%)",
          },
        },
        colorout: {
          "0%": {
            filter: "grayscale(0%)",
          },
          "100%": {
            filter: "grayscale(100%)",
          },
        },
      },
      animation: {
        colorin: "colorin 500ms ease-out",
        colorout: "colorout 500ms ease-out",
      },
    },
  },
  plugins: [],
};
