module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
     ...theme('colors'),
     'backgrounddark': '#0e1212',
     'backgroundpurple': '#A78BFA',
    }),
    textColor: theme => ({
      ...theme('colors'),
      'textpurple': '#A78BFA',
      'textgreyish': '#dbdbdb',
    }),
    borderColor: theme => ({
      ...theme('colors'),
      'borderpurple': '#A78BFA',
      'jsyellow': '#F7E018',
      'javared': '#D12C52',
      'csharppurple': '#9A4993',
      'phppurple': "#787CB4",
      'cplusplusblue': '#659BD3',
      'elixirpurple': '#340A49',
      'cssblue': '#264DE4'
     })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}


