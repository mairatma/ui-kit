var isparta = require('isparta');
var renameAlias = require('metaljs/tasks/lib/renameAlias');

var babelOptions = {
	resolveModuleSource: renameAlias.renameAliasSync,
	sourceMap: 'both'
};

module.exports = function (config) {
	config.set({
		frameworks: ['mocha', 'chai', 'sinon', 'source-map-support', 'commonjs'],

		files: [
			'src/public/vendor/soyutils/soyutils.js',
			'lib/scripts/*.js',
			'src/public/vendor/!(soyutils)/**/*.js',
			'lib/tests/unit/*.js'
		],

		preprocessors: {
			'lib/scripts/*.js': ['coverage', 'commonjs'],
			'src/public/vendor/!(soyutils)/**/*.js': ['babel', 'commonjs'],
			'lib/tests/unit/*.js': ['babel', 'commonjs'],
		},

		browsers: ['Chrome'],

		reporters: ['coverage', 'progress'],

		babelPreprocessor: {options: babelOptions},

		coverageReporter: {
			instrumenters: {isparta : isparta},
			instrumenter: {'**/*.js': 'isparta'},
			instrumenterOptions: {isparta: {babel: babelOptions}},
			reporters: [
				{type: 'html'},
				{type: 'lcov', subdir: 'lcov'},
				{type: 'text-summary'}
			]
		}
	});
};
