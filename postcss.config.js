const tailwind = require('tailwindcss');
const postcssImport = require('postcss-import');
const nested = require('postcss-nested');
const cssnano = require('cssnano');

const plugins =
  process.env.NODE_ENV === 'production'
    ? [postcssImport, nested, tailwind, cssnano]
    : [postcssImport, nested, tailwind];

module.exports = { plugins };