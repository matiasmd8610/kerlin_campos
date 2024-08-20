/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: { //breakpoints
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    container: {
      center: true,
      padding: '1rem'
    },
    extend: {
      fontFamily: {
        'main': ['Montserrat', 'sans-serif']
      },
      colors: {
        blueMain: 'var(--color-blue-main)',
        greenMain: 'var(--color-green-main)',
        whatsapp: 'var(--color-whatsapp)'
      }
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': { //container max-width at given breakpoint
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1024px',
          },
          '@screen xl': {
            maxWidth: '1200px',
          },
          '@screen 2xl': {
            maxWidth: '1440px',
          }
        }
      })
    }
  ],
};
