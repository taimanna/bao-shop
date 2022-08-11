module.exports = {
  mode: 'jit',
  purge: [
    './public/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  content: ['./src/**/*.{html,js}'],
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