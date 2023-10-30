/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        lightGrayishViolet: 'hsl(270, 3%, 87%)',
        darkGrayishViolet: 'hsl(279, 6%, 55%)',
        veryDarkViolet: 'hsl(278, 68%, 11%)',
        red: 'hsl(0, 100%, 66%)'
      },
      fontFamily: {
        spaceGrotesk: ['Space Grotesk']
      }
    }
  },
  plugins: []
}
