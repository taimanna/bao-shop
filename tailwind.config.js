module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.{html,js}',
    './public/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'varela': 'Varela Round',
        'lato': 'Lato',
      },
      colors: {
        '555': '#555555',
        '5b8': '#5b8dd6',
      },
    },
  },
  plugins: [],
}