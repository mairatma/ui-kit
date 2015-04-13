var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var runSequence = require('run-sequence');

gulp.task('gh-pages', function () {
	return gulp.src('dist/public/**/*')
		.pipe(plugins.ghPages());
});

gulp.task('deploy', ['clean'], function(cb) {
	runSequence('build', 'build-docs', 'gh-pages', cb);
});
