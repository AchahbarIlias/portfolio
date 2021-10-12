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
      'jsyellow': '#F7E018',
      'javared': '#D12C52',
      'csharppurple': '#9A4993',
      'phppurple': "#787CB4",
      'cplusplusblue': '#659BD3'
     })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}


