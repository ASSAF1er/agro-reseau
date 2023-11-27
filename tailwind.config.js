

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        reveal:{
         ' 0%':{
          transform:' translateY(100%)',
          },
          '100%':{transform: 'translateY(0)'}
        }
      },
      animation:{
        reveal: 'reveal ease 2s '
      }
    },
  },
  plugins: [],
}

