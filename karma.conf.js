module.exports = function(config) {
  config.set({
    browsers: ['Chrome'],
    frameworks: ['jspm', 'mocha', 'chai'],
    jspm: {
      // ES6 files need to go through jspm for module loading.
      loadFiles: ['lib/tests/unit/*.js'],
      serveFiles: ['lib/scripts/*.js']
    },
    files: [
      'node_modules/closure-templates/soyutils.js',
    ],
    preprocessors: {
      // All src files should be included in the coverage report. These
      // files don't need to go through the `babel` preprocessor, as the
      // `coverage` preprocessor already does the necessary conversion.
      'lib/scripts/!(*.soy).js': ['coverage'],
      // Since tests, soy files and jspm packages are not going through
      // the `coverage` preprocessor we need to explicitly make them go
      // through `babel`.
      'lib/scripts/*.soy.js': ['babel'],
      'lib/tests/unit/*.js': ['babel'],
      'jspm_packages/?*/**/*.js': ['babel']
    },
    reporters: ['coverage', 'progress'],
    coverageReporter: {
      instrumenters: { isparta : require('isparta') },
      instrumenter: { '**/*.js': 'isparta' },
      reporters: [
        { type : 'text-summary' },
        { type : 'html' },
        { type: 'lcov', subdir: 'lcov' }
      ]
    }
  });
};
