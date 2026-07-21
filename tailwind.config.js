/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
      colors: {
        bg: '#0b0b0f',
        'bg-card': 'rgba(255,255,255,0.04)',
        'bg-card-hover': 'rgba(255,255,255,0.07)',
        mint: '#48d1cc',
        'mint-light': '#69e7c1',
        'mint-glow': 'rgba(72,209,204,0.15)',
        'text-primary': '#f5f5f5',
        'text-muted': '#8b8b9e',
        'border-glass': 'rgba(255,255,255,0.08)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(72,209,204,0.12) 0%, transparent 70%)',
        'mint-gradient': 'linear-gradient(135deg, #48d1cc 0%, #69e7c1 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'pulse-slow': 'pulseSlow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
