const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'paper': "url(/bgImages/natural-paper.png)",
        'paper-stripes': "url(/bgImages/natural-paper.png), url(/bgImages/background-stripes.svg)",
        'noise': "url(/bgImages/noise.png)"
      },
      colors: {
        'myred': '#ff0000',
        'mycream': "#fef8ee"
      },
      fontFamily: {
        serif: ['Lexend', ...defaultTheme.fontFamily.serif]
      },
      borderWidth: {
        '20': '20px'
      },
      cursor: {
        'drill': 'url(/cursors/Drill.cur), pointer',
        'imac': 'url(/cursors/IMAC.cur), pointer',
        'music': 'url(/cursors/music.cur), pointer'
      },
      screens: {
        'xs': '475px',
        ...defaultTheme.screens,
      },
    }
  },
  plugins: [],
}