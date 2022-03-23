module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'paper': "url(../public/natural-paper.png)",
        'paper-stripes': "url(../public/natural-paper.png), url(../public/background-stripes.svg)"
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