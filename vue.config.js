module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/tripFullpage/'
    : '/',
  outputDir: 'docs',
  lintOnSave: false,
}