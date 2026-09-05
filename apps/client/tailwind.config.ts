import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8a1538', // Deep Crimson/Maroon from the image
          dark: '#6b0f2a',
          light: '#a82046',
        },
        accent: {
          DEFAULT: '#ffcc00', // Yellow accent from the image
          hover: '#e6b800',
        },
        navy: '#1a2b4c',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
