/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'merchant-semibold': ['MerchantSemBdCond', 'serif'],
        'merchant-thin': ['MerchantThin', 'serif'],
        'merchant-expanded': ['MerchantExp', 'serif'],
        'merchant-thin-condensed': ['MerchantThinCond', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        'googleSans-regular': ['GoogleSansReg', 'sans-serif'],
        'googleSans-medium': ['GoogleSansMd', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
