/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          main: '#08090A',      // Obsidian Black
          sec: '#0F1115',       // Deep Charcoal Navy
          elevated: '#15181E',  // Sleek Card Surface
        },
        gold: {
          light: '#F5E6BE',
          DEFAULT: '#D4AF37',   // Classic Metallic Gold
          warm: '#C5A059',
          amber: '#E5A93C',
          dark: '#8C6D23',
        },
        text: {
          primary: '#F8F7F4',   // Crisp Bone White
          secondary: '#A3A8B3', // Muted Slate
          muted: '#686E7B',     // Subdued Meta
        },
        border: {
          subtle: '#232730',
          gold: 'rgba(212, 175, 55, 0.3)',
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        body: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
        serif: ['Instrument Serif', 'Georgia', 'serif'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        wide: '0.08em',
        widest: '0.18em',
      }
    },
  },
  plugins: [],
}
