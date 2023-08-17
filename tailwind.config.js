const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'paper': "url(/bgImages/natural-paper.png)",
        'stripes': "url(/bgImages/background-stripes.svg)",
        'paper-stripes': "url(/bgImages/natural-paper.png), url(/bgImages/background-stripes.svg)",
        'noise': "url(/bgImages/noise.png)",
        'blob1': "url(/bgImages/haikei-blob1.svg)",
        'blob2': "url(/bgImages/haikei-blob2.svg)",
        'blob-png': "url(/bgImages/blob-png.png)"
      },
      colors: {
        'myred': '#ff0000',
        'mycream': "#fef8ee",
        'mycreambutdarkerlol': "#F2E0C0"
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
      width: {
        'wscreenborder': 'calc(100vw - 40px)'
      },
      height: {
        'hscreenborder': 'calc(100vh - 40px)'
      }
    }
  },
  plugins: [require('flowbite/plugin')],
}