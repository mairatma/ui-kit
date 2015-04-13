require('metaljs')({
	bundleFileName: 'main.js',
	globalName: 'ui',
	taskPrefix: 'metal:',
	buildDest: 'dist/public/scripts/',
	buildSrc: 'lib/scripts/*.js',
	cssSrc: 'lib/scripts/*.css',
	lintSrc: ['lib/scripts/*.js', 'lib/tests/*.js'],
	soyDest: 'lib/scripts/',
	soySrc: 'lib/scripts/*.soy',
	testSrc: 'lib/tests/*.js',
	watchSrc: 'lib/scripts/*'
});
