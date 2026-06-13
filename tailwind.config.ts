import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        solar: {
          green:        '#15803D',
          'green-light':'#22C55E',
          navy:         '#060D18',
          'navy-2':     '#0A1628',
          'navy-3':     '#0F1F35',
          'navy-4':     '#162840',
          gold:         '#B8860B',
          'gold-light': '#D4A520',
          dark:         '#060D18',
          'dark-2':     '#0A1628',
          'dark-3':     '#0F1F35',
        },
      },
      animation: {
        marquee:          'marquee 35s linear infinite',
        'marquee-reverse':'marquee-reverse 35s linear infinite',
        float:            'float 6s ease-in-out infinite',
        'float-delayed':  'float 6s ease-in-out 2s infinite',
        'fade-up':        'fade-up 0.6s ease-out forwards',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%':   { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-16px)' },
        },
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient':
          'linear-gradient(135deg, #060D18 0%, #0A1628 60%, #0D2035 100%)',
        'card-gradient':
          'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)',
      },
    },
  },
  plugins: [],
}
export default config
