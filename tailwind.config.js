/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1.6rem',
    },
    extend: {
      fontFamily: {
        'main': ['Montserrat', 'sans-serif']
      },
      colors: {
        blueMain: 'var(--color-blue-main)',
      }
    },
  },
  plugins: [],
};
