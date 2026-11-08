/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Hero section signature lilac palette
        lilac: {
          50: '#FAF8FF',
          100: '#F3F0FF',
          200: '#EAE6FC',
          300: '#DCD8F4', // Hero main sky color
          400: '#C8C1EE',
          500: '#B0A6E5',
          700: '#6E5CB8',
          800: '#4D3B92',
          900: '#2A1F5C',
        },
        // Jellyfish rose / blush pink palette
        blush: {
          50: '#FAF5F9',
          100: '#FCE7F3', // Jellyfish soft pastel
          200: '#FBCFE8',
          300: '#F472B6', // Jellyfish vibrant rose
          400: '#EC4899',
          500: '#DB2777',
          700: '#865365', // Deep romantic rose
          800: '#643949',
          900: '#43212E',
        },
        // Re-mapped ivory to soft glowing lilac-ivory
        ivory: {
          50: '#FAF8FF',
          100: '#F3F0FF', // Soft lilac white
          200: '#EAE6FC', // Lavender mist
          300: '#DCD8F4', // Hero sky
        },
        lemon: {
          DEFAULT: '#F7E99A', // Lemon Gold
          light: '#FCF5CC',
          dark: '#E2CE66',
        },
        sage: {
          DEFAULT: '#D9E8D3',
          light: '#EAF3E6',
          dark: '#B0CCA7',
          deep: '#4E6A4B',
        },
        gold: {
          DEFAULT: '#D8B879', // Champagne Gold
          light: '#F7E99A',
          metallic: '#C8A252',
          deep: '#9A7426',
        },
        // Hero deep ink black palette
        charcoal: {
          DEFAULT: '#0B0B10', // Hero ink black
          soft: '#2C293E',    // Deep violet ink
          muted: '#5C5776',   // Soft lavender slate
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        display: ['"Playfair Display"', 'serif'],
        script: ['"Alex Brush"', 'cursive'],
        sans: ['"DM Sans"', 'sans-serif'],
        cinzel: ['"Cinzel Decorative"', 'serif'],
        mono: ['"Space Mono"', 'monospace'],
        anton: ['"Anton"', 'sans-serif'],
      },
      backgroundImage: {
        'gold-shimmer': 'linear-gradient(135deg, #D8B879 0%, #FFF4D0 50%, #C8A252 100%)',
        'blush-glow': 'radial-gradient(circle at 50% 50%, rgba(244, 114, 182, 0.4) 0%, rgba(220, 216, 244, 0) 70%)',
        'lilac-hero-gradient': 'linear-gradient(180deg, #dcd8f4 0%, #eae6fc 50%, #f3f0ff 100%)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-reverse': 'float-reverse 9s ease-in-out infinite',
        'petal-fall': 'petal 12s linear infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'spin-slow': 'spin 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(2deg)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(10px) rotate(-2deg)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.85', filter: 'brightness(1)' },
          '50%': { opacity: '1', filter: 'brightness(1.15)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        }
      }
    },
  },
  plugins: [],
}
