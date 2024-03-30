const plugin = require('tailwindcss')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {

    }
  },
  darkMode: 'class',
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.text-title': {
          fontFamily: 'var(--font-title) !important',
          fontSize: '40px',
          fontWeight: '700'
        },
        '.text-medium': {},
        '.text-common': {},
        '.absolute-center': {}
      }

      addUtilities(newUtilities)
    })

  ]
}
