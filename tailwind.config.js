/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sp: {
          // 60% Theme Colors extracted directly from the Shapoorji Pallonji Logo:
          navy: {
            DEFAULT: '#003882', // The primary "S" and wordmark navy blue
            dark: '#002558',    // Deepest corporate navy
            deep: '#001D45',
            800: '#002E6B',
            700: '#003882',
            600: '#0047A3',
            500: '#005ACF',
          },
          blue: {
            DEFAULT: '#0077C8', // The vibrant "P" cerulean blue
            light: '#0090F0',
            sky: '#38A7F4',
            50: '#F0F6FC',
            100: '#E1EEF9',
            200: '#C4DEF3',
            300: '#97C6EC',
            400: '#5BA9E2',
            500: '#0077C8',
            600: '#0062A8',
          },
          ice: {
            DEFAULT: '#F2F6FA', // Light cool background for contrast against pure white
            soft: '#F8FAFC',
            border: '#D3E0EE',
            card: '#FFFFFF',
          }
        },
        estate: {
          950: '#001D45',
          900: '#002558',
          800: '#003882',
          700: '#0047A3',
          gold: {
            DEFAULT: '#0077C8', // Redirect legacy accents to the logo's cerulean blue
            light: '#38A7F4',
            dark: '#005ACF',
            50: '#F0F6FC',
            100: '#E1EEF9',
            200: '#C4DEF3',
            300: '#97C6EC',
            400: '#5BA9E2',
            500: '#0077C8',
          },
          sand: {
            DEFAULT: '#F8FAFC',
            light: '#FFFFFF',
            dark: '#EDF2F7',
            muted: '#D0DCEB',
          }
        }
      },
      fontFamily: {
        sans: [
          'Plus Jakarta Sans',
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'sans-serif'
        ],
        display: [
          'Plus Jakarta Sans',
          'Manrope',
          'sans-serif'
        ]
      },
      boxShadow: {
        'estate': '0 4px 20px -2px rgba(0, 56, 130, 0.08), 0 2px 6px -1px rgba(0, 56, 130, 0.04)',
        'estate-hover': '0 20px 35px -5px rgba(0, 56, 130, 0.16), 0 10px 15px -5px rgba(0, 119, 200, 0.12)',
        'blue-glow': '0 4px 25px rgba(0, 119, 200, 0.35)',
        'estate-card': '0 10px 30px -5px rgba(0, 37, 88, 0.06)',
      }
    },
  },
  plugins: [],
}
