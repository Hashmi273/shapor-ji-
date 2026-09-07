/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        agarbatti: {
          // Rich Maroon / Deep Crimson
          950: '#2A060B',
          900: '#3D0A10',
          850: '#4A0E17',
          800: '#6B1426',
          700: '#8B1E34',
          600: '#A82B44',
          500: '#C73855',
          
          // Royal Gold & Sandalwood Brass
          gold: {
            DEFAULT: '#C59B27',
            light: '#DFB743',
            dark: '#9E7A1C',
            50: '#FDFBF5',
            100: '#FAF3DC',
            200: '#F5E6B8',
            300: '#EECD87',
            400: '#E4B556',
            500: '#C59B27',
            600: '#9E7A1C',
            700: '#755913',
          },
          
          // Earthy Brown & Incense Charcoal
          earth: {
            DEFAULT: '#2E1A11',
            dark: '#1C0F0A',
            charcoal: '#221510',
            muted: '#5A3E31',
            light: '#8C6753',
          },
          
          // Sandalwood & Cream Surfaces
          cream: {
            DEFAULT: '#FCF9F2',
            soft: '#FFFDF9',
            card: '#FAF5EB',
            border: '#EFE5D5',
            borderDark: '#DFCFB7',
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
          'Roboto',
          'sans-serif'
        ],
        serif: [
          'Playfair Display',
          'Georgia',
          'serif'
        ],
        display: [
          'Playfair Display',
          'Plus Jakarta Sans',
          'serif'
        ]
      },
      boxShadow: {
        'incense': '0 4px 20px -2px rgba(74, 14, 23, 0.08), 0 2px 6px -1px rgba(74, 14, 23, 0.04)',
        'incense-hover': '0 20px 35px -5px rgba(74, 14, 23, 0.14), 0 10px 15px -5px rgba(197, 155, 39, 0.12)',
        'gold-glow': '0 4px 25px rgba(197, 155, 39, 0.3)',
        'maroon-glow': '0 8px 30px rgba(74, 14, 23, 0.35)',
      },
      animation: {
        'float-smoke': 'floatSmoke 8s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out forwards',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        floatSmoke: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)', opacity: '0.4' },
          '50%': { transform: 'translateY(-12px) rotate(2deg)', opacity: '0.7' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        }
      }
    },
  },
  plugins: [],
}
