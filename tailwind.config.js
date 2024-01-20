/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'body':  ['"Montserrat"', 'sans-serif']
    },
    extend: {
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1' }],
        sm: ['0.875rem', { lineHeight: '1.25' }],
        base: ['1rem', { lineHeight: '1.75' }],
        lg: ['1.125rem'],
        xl: ['1.25rem'],
        '2xl': ['1.5rem', { lineHeight: '1.5' }],
        '3xl': ['1.875rem', { lineHeight: '1.7' }],
        '4xl': ['2.25rem', { lineHeight: '1.9' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
        'h1': ['1.875rem', { lineHeight: '1.3'}],
        'h2': ['1.5rem', { lineHeight: '1.3' }],
        'h3': ['1.25rem', { lineHeight: '1.3' }],
        'h4': ['1.375rem', { lineHeight: '1.3' }],
        'h5': ['1.375rem', { lineHeight: '1.45' }],
        'h6': ['1.125rem', { lineHeight: '1.27' }],
        'h1-md': ['2.5rem'],
        'h2-md': ['1.875rem'],
        'h3-md': ['1.625rem'],
        'h4-md': ['1.75rem'],
        'h5-md': ['1.5rem'],
        'h6-md': ['1.25rem'],
        'btn': ['.875em', { lineHeight: '1.2' }]
      }
    },
  },
  plugins: [],
}
