/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0a0a0f',
        'bg-secondary': '#111118',
        'accent-cyan': '#00f5ff',
        'accent-violet': '#7c3aed',
        'accent-rose': '#f43f5e',
        'text-primary': '#f0f0f5',
        'text-muted': '#6b7280',
        'glass-bg': 'rgba(255,255,255,0.04)',
        'glass-border': 'rgba(255,255,255,0.08)',
      },
      fontFamily: {
        'syne': ['Syne', 'sans-serif'],
        'dm-mono': ['DM Mono', 'monospace'],
        'dm-sans': ['DM Sans', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 20s ease infinite',
        'blink': 'blink 1s step-end infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(0, 245, 255, 0.5)',
            opacity: '1',
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(0, 245, 255, 0.8)',
            opacity: '0.8',
          },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
