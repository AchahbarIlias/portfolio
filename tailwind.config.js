module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
     ...theme('colors'),
     'backgrounddark': '#0e1212',
     'backgroundpurple': '#682ae9',
    }),
    textColor: theme => ({
      ...theme('colors'),
      'textpurple': '#682ae9',
      'textgreyish': '#dbdbdb',
    }),
    borderColor: theme => ({
      ...theme('colors'),
      'borderpurple': '#682ae9',
     })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}


