module.exports = {
  plugins: [require('prettier-plugin-tailwindcss')],
  'prettier/prettier': [
    'error',
    {
      singleQuote: true,
      parser: 'flow',
    },
  ],
}
