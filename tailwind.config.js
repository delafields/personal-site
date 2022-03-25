module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'paper': "url(/natural-paper.png)",
        'paper-stripes': "url(/natural-paper.png), url(/background-stripes.svg)"
      },
      colors: {
        'myred': '#ff0000',
        'mycream': "#fef8ee"
      },
      fontFamily: {
        title: ['Anton', 'sans-serif']
      },
      borderWidth: {
        '20': '20px'
      }
    }
  },
  plugins: [],
}