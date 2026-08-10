import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bgDark: '#050816',
        bgCard: 'rgba(15, 23, 42, 0.65)',
        bgGlass: 'rgba(255, 255, 255, 0.03)',
        borderGlass: 'rgba(255, 255, 255, 0.08)',
        borderHighlight: 'rgba(124, 58, 237, 0.4)',
        primary: {
          DEFAULT: '#7C3AED',
          light: '#9333EA',
          glow: 'rgba(124, 58, 237, 0.35)',
        },
        secondary: {
          DEFAULT: '#06B6D4',
          light: '#0891B2',
          glow: 'rgba(6, 182, 212, 0.35)',
        },
        accent: {
          DEFAULT: '#22D3EE',
          light: '#38BDF8',
          glow: 'rgba(34, 211, 238, 0.35)',
        },
        highlight: '#FFFFFF',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'glow-primary': '0 0 35px -5px rgba(124, 58, 237, 0.5)',
        'glow-cyan': '0 0 35px -5px rgba(6, 182, 212, 0.5)',
        'glow-glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'neon': '0 0 15px rgba(34, 211, 238, 0.6), 0 0 30px rgba(124, 58, 237, 0.4)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(2deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        gradientMove: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'gradient-move': 'gradientMove 8s ease infinite',
        shimmer: 'shimmer 2.5s infinite',
        'spin-slow': 'spinSlow 20s linear infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'cyber-grid': 'radial-gradient(circle, rgba(124,58,237,0.15) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};

export default config;
