/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      'sans' : ['Inter', 'ui-sans-serif', 'system-ui'],
      'serif': ['Playfair Display'],
      'mono' : ['IBM Plex Mono']
    },
    fontSize: {
      xs: '0.65rem',
      sm: '0.75rem',
      md: '0.88rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
  },
  plugins: [],
}

