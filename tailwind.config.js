/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'intro-dark-blue' : 'hsl(217, 28%, 15%)',
        'main-dark-blue' : 'hsl(218, 28%, 13%)',
        'footer-dark-blue' : 'hsl(216, 53%, 9%)',
        'testimonials-dark-blue' : 'hsl(219, 30%, 18%)',
        'blue-cta': 'hsl(198, 60%, 50%)',
        'cyan-cta': 'hsl(176, 68%, 64%)'
      }
    },
    fontFamily: {
      'noto-sans': 'Noto Sans, sans-serif',
      'raleway': 'Raleway, sans-serif',
    }
  },
  plugins: [],
}