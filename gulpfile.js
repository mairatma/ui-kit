var gulp = require('gulp');
var del = require('del');
var ignore = require('gulp-ignore');
var compass = require('gulp-compass');
var soynode = require('gulp-soynode');
var iconfont = require('gulp-iconfont');
var iconfontCss = require('gulp-iconfont-css');
var runSequence = require('run-sequence');

// Metal.js templates ----------------------------------------------------------

require('metaljs')({
	bundleFileName: 'ui-kit.js',
	buildDest: 'build/scripts',
	globalName: 'ui',
	buildSrc: 'lib/scripts/*.js',
	soyDest: 'lib/scripts',
	soyGeneratedDest: 'build/templates',
	soySrc: 'lib/scripts/*.soy'
});

// Lib -------------------------------------------------------------------------

gulp.task('build:lib', function(done) {
	del('build', function() {
		runSequence('soy', 'build:globals:js', ['styles:lib', 'fonts12:lib', 'fonts16:lib'], done);
	});
});

gulp.task('fonts12:lib', function() {
	return gulp.src('lib/fonts/icon-12/*.svg')
		.pipe(iconfontCss({
			fontName: 'icon-12',
			fontPath: '../fonts/',
			path: 'lib/fonts/.template-12',
			targetPath: '../fonts/icon-12.css'
		}))
		.pipe(iconfont({
			fontName: 'icon-12',
			normalize: true,
			log: function() {}
		}))
		.pipe(gulp.dest('build/fonts/'));
});

gulp.task('fonts16:lib', function() {
	return gulp.src('lib/fonts/icon-16/*.svg')
		.pipe(iconfontCss({
			fontName: 'icon-16',
			fontPath: '../fonts/',
			path: 'lib/fonts/.template-16',
			targetPath: '../fonts/icon-16.css'
		}))
		.pipe(iconfont({
			fontName: 'icon-16',
			normalize: true,
			log: function() {}
		}))
		.pipe(gulp.dest('build/fonts/'));
});

// Site ------------------------------------------------------------------------

gulp.task('build:site', function(done) {
	del('dist', function() {
		runSequence('copy:site', ['soy:site', 'styles:site'], done);
	});
});

gulp.task('styles:site', function() {
  return gulp.src('src/public/styles/*.scss')
    .pipe(compass({
      css: 'dist/public/styles',
      sass: 'src/public/styles',
      image: 'dist/public/images'
    }))
    .pipe(gulp.dest('dist/public/styles'));
});

gulp.task('styles:lib', function() {
  return gulp.src('lib/styles/*.scss')
    .pipe(compass({
      css: 'lib/styles',
      sass: 'lib/styles'
    }))
    .pipe(gulp.dest('build/styles'));
});

gulp.task('copy:site', function(done) {
	var siteFiles = [
		'src/public/images/**',
		'src/public/scripts/**',
		'src/public/vendor/**'
	];

	var builtFiles = [
		'build/fonts/*',
		'build/scripts/ui-kit.js'
	];

	var libFiles = [
		'lib/fonts/**/*'
	];

  gulp.src(siteFiles, { base: 'src' })
  	.pipe(gulp.dest('dist')).on('end', function() {
  		gulp.src(builtFiles, { base: 'build' })
  			.pipe(gulp.dest('dist/public')).on('end', function() {
  				gulp.src(libFiles, { base: 'lib' })
  					.pipe(gulp.dest('dist/public')).on('end', function() {
  						done();
  					});
  			});
  	});
});

gulp.task('soy:site', function() {
  return gulp.src(['src/**/*.soy', 'build/templates/*.soy'])
    .pipe(soynode({
    	renderSoyWeb: true
    }))
    .pipe(ignore.exclude('!**/*.html'))
    .pipe(gulp.dest('dist'));
});
