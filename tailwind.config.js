/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1.5rem',
          sm: '2rem',
          lg: '3rem',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        primary: {
          50: '#e0f2fe',
          100: '#bae6fd',
          200: '#7dd3fc',
          300: '#38bdf8',
          400: '#0ea5e9',
          500: '#0284c7',
          600: '#0369a1',
          700: '#075985',
          800: '#0c4a6e',
          900: '#0a3c5f',
        },
        accent: '#f97316',
      },
      boxShadow: {
        soft: '0 20px 50px -20px rgba(14, 165, 233, 0.35)',
        floating: '0 20px 60px -25px rgba(15, 23, 42, 0.45)',
      },
      backgroundImage: {
        'hero-gradient':
          'radial-gradient(circle at top left, rgba(14, 165, 233, 0.25), transparent 60%), radial-gradient(circle at bottom right, rgba(249, 115, 22, 0.25), transparent 65%)',
        'noise-light':
          'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)',
      },
    },
  },
  plugins: [],
};
