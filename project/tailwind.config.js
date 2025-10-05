/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'blanc-1': '#f5f5f7',
        'blanc-2': '#ffffff',
        'grey': '#75757a',
      },
      fontFamily: {
        'inter': ['Inter', 'Helvetica', 'sans-serif'],
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'float-fast': 'float 3s ease-in-out infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient-shift': 'gradient-shift 8s ease-in-out infinite',
        'text-shimmer': 'text-shimmer 3s ease-in-out infinite',
        'float-particle': 'float-particle 6s ease-in-out infinite',
        'float-code': 'float-code 8s ease-in-out infinite',
        'matrix-rain': 'matrix-rain 10s linear infinite',
        'fade-in-up': 'fade-in-up 1s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.5' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'text-shimmer': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
        'float-particle': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)', opacity: '0.3' },
          '50%': { transform: 'translateY(-30px) rotate(180deg)', opacity: '1' },
        },
        'float-code': {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)', opacity: '0.2' },
          '33%': { transform: 'translateY(-20px) translateX(10px)', opacity: '0.6' },
          '66%': { transform: 'translateY(-10px) translateX(-10px)', opacity: '0.4' },
        },
        'matrix-rain': {
          '0%': { transform: 'translateY(-100vh)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(100vh)', opacity: '0' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      }
    },
    backgroundSize: {
      '300%': '300%',
    },
  },
  plugins: [],
};