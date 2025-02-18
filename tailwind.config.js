/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

const config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000',
        secondary: '#CCC',
      },
      fontFamily: {
        sans: [...defaultTheme.fontFamily.sans],
        serif: [...defaultTheme.fontFamily.serif],
      },
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
      keyframes: {
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(-0px)' },
        },
        fadeInBottom: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0px)' },
        },
      },
      animation: {
        fadeInLeft: 'fadeInLeft .4s ease-in',
        fadeInBottom: 'fadeInBottom .4s ease-in',
      },
    },
  },
  plugins: [],
};

module.exports = config;
