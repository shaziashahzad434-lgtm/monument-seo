/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        black: '#080808',
        white: '#FFFFFF',
        orange: '#2F7D6D',
        off: '#F3F1EC',
        gray: {
          950: '#151515',
          900: '#1B1B1B',
          800: '#2A2A2A',
        },
        muted: '#9C9C94',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      maxWidth: {
        wrap: '1280px',
      },
    },
  },
  plugins: [],
};
