module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/trip-fullpage/'
    : '/',
  outputDir: 'docs',
  lintOnSave: false,
}