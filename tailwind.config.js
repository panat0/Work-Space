/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange1: '#FF6B35',
        orange2: '#F7931E',
        orange3: '#FFB347',
        orange4: '#FF7847',
        grey1: '#666666',
        grey2: '#797979',
        creem: '#FFE0D6',
        white1: '#FFF7F4',
        white2: '#FFF5EA',
        partail: '#FFE0D6',

      },
    },
  },
  plugins: [],
};
