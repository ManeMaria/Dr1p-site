import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '320px',
        // => @media (min-width: 320px) { ... }
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
        'md': '768px',
        // => @media (min-width: 768px) { ... }
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
        '2xl': '1536px',
        '3xl': '3840px',
      },
      colors: {
        white: '#ffffff',
        black: '#000000',
        green: '#00ff00',
      },
      textColor: {
        default: '#ffffff',
      },
      fontSize: {
        'xl': '1.5rem',
      },
    },
  },
  plugins: [],
}
export default config
