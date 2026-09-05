/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        zion: {
          // 50% White Palette
          white: '#FFFFFF',
          'soft-white': '#F7F9FC',
          'light-blue': '#EEF4FF',
          
          // 30% Blue Palette
          blue: '#102F68',
          'deep-blue': '#071B3A',
          'secondary-blue': '#1D4F91',
          
          // 20% Orange Palette
          orange: '#FF6B00',
          'light-orange': '#FF8A24',
          'orange-glow': 'rgba(255, 107, 0, 0.35)',

          // Neutral Typography Grays
          dark: '#071B3A',
          'dark-gray': '#475569',
          slate: '#64748B',
          gray: '#94A3B8',
          'border-light': '#E2E8F0',
          'border-blue': '#D6E4FF',
        }
      },
      fontFamily: {
        sans: [
          'Inter',
          'Plus Jakarta Sans',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif'
        ],
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(16, 47, 104, 0.08), 0 2px 6px -1px rgba(16, 47, 104, 0.04)',
        'card-hover': '0 20px 35px -5px rgba(16, 47, 104, 0.12), 0 10px 15px -5px rgba(255, 107, 0, 0.08)',
        'orange-glow': '0 4px 20px rgba(255, 107, 0, 0.35)',
        'orange-glow-lg': '0 8px 30px rgba(255, 107, 0, 0.45)',
        'blue-glow': '0 8px 25px rgba(16, 47, 104, 0.25)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'spin-slow': 'spin 25s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      }
    },
  },
  plugins: [],
}
