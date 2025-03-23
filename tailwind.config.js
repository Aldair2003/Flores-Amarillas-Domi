/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fffbeb',
          100: '#fff3c4',
          200: '#ffe99d',
          300: '#ffdb65',
          400: '#ffcd38',
          500: '#ffba08',
          600: '#e69f06',
          700: '#cc8a05',
          800: '#a36c04',
          900: '#7a4f03',
        },
        love: {
          light: '#ffd6e6',
          DEFAULT: '#ffb3d1',
          dark: '#ff8fb9',
        },
        flower: {
          yellow: {
            light: '#fff8e1',
            DEFAULT: '#ffecb3',
            dark: '#ffd54f',
          },
          pink: {
            light: '#fce4ec',
            DEFAULT: '#f8bbd0',
            dark: '#f48fb1',
          }
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fade-in 1.5s ease-out forwards',
        'slide-up': 'slide-up 0.5s ease-out',
        'flower-spin': 'flower-spin 20s linear infinite',
        'petal-fall': 'petal-fall 10s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'flower-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'petal-fall': {
          '0%': { 
            transform: 'translateY(-10vh) rotate(0deg)',
            opacity: '0'
          },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { 
            transform: 'translateY(100vh) rotate(720deg)',
            opacity: '0'
          },
        },
      },
    },
  },
  plugins: [],
} 