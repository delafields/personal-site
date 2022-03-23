module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'paper': "url(../assets/natural-paper.png)",
        'paper-stripes': "url(../assets/natural-paper.png), url(../assets/background-stripes.svg)"
      },
      colors: {
        'myred': '#ff0000',
        'mycream': "#fef8ee"
      },
      fontFamily: {
        title: ['Anton', 'sans-serif']
      }
    }
  },
  plugins: [],
}