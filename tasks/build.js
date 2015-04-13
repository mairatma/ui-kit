var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var runSequence = require('run-sequence');

gulp.task('build-docs', function () {
	return gulp.src('dist/public/index.html')
		.pipe(plugins.highlight())
		.pipe(plugins.htmlPrettify({indent_char: ' ', indent_size: 2}))
		.pipe(gulp.dest('dist/public'));
});

gulp.task('build-scripts', ['metal:build:globals'], function() {
	return gulp.src([
			'node_modules/closure-templates/soyutils.js',
			'dist/public/scripts/main.js'
		])
		.pipe(plugins.concat('ui-kit.js'))
		.pipe(plugins.uglify())
		.pipe(gulp.dest('dist/public/scripts'));
});

gulp.task('build-styles', function() {
	return gulp.src([
			'dist/public/vendor/skeleton/css/normalize.css',
			'dist/public/vendor/skeleton/css/skeleton.css',
			'dist/public/styles/main.css',
			'dist/public/fonts/icon-12.css',
			'dist/public/fonts/icon-16.css'
		])
		.pipe(plugins.concat('ui-kit.css'))
		.pipe(plugins.minifyCss())
		.pipe(gulp.dest('dist/public/styles/'));
});

gulp.task('build', function(cb) {
	runSequence('build-scripts', 'copy', ['images', 'fonts', 'scripts', 'styles', 'templates'], 'build-styles', cb);
});
