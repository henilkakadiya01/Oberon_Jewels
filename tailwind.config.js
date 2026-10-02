/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FBF8F2',
          100: '#F4ECE0',
          200: '#EADBC8',
          300: '#DEC6A6',
          400: '#D1AF84',
          500: '#C5A880', // Signature Oberon Gold
          600: '#A8875E',
          700: '#8C6C45',
          800: '#694F30',
          900: '#46341F',
        },
        ivory: {
          DEFAULT: '#FAF8F5',
          light: '#FFFDFB',
          dark: '#F3EFE9',
          border: '#E8E2D8'
        },
        charcoal: {
          DEFAULT: '#141414',
          light: '#262626',
          muted: '#525252',
          soft: '#737373',
        },
        champagne: '#EEDFC9',
        rosegold: '#DFB0A0',
        silver: '#D5D9DC',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'slide-up': 'slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-left': 'slideLeft 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        }
      }
    },
  },
  plugins: [],
}
