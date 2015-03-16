require('alloyui-tasks')({
  bundleFileName: 'main.js',
  corePathFromSoy: '../../../jspm_packages/github/alloyui/core@master',
  pkg: require('../package.json'),
  taskPrefix: 'aui:',
  buildDest: 'dist/scripts',
  buildSrc: 'src/public/scripts/**/*.js',
  cssSrc: 'src/public/scripts/**/*.css',
  lintSrc: ['src/public/scripts/**/*.js', 'src/public/scripts/test/**/*.js'],
  soyDest: 'src/public/scripts/',
  soySrc: 'src/public/scripts/**/*.soy',
  testSrc: 'src/public/scripts/test/**/*.js',
  watchSrc: 'src/public/scripts/**/*'
});
