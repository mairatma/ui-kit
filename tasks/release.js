var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('release', function(cb) {
	runSequence('build', ['release-fonts', 'release-styles', 'release-scripts'], cb);
});

gulp.task('release-fonts', function() {
	gulp.src([
		'dist/public/fonts/*.eot',
		'dist/public/fonts/*.svg',
		'dist/public/fonts/*.ttf',
		'dist/public/fonts/*.woff'
	]).pipe(gulp.dest('build/fonts'));
});

gulp.task('release-styles', function() {
	gulp.src('dist/public/styles/ui-kit.css')
		.pipe(gulp.dest('build/styles'));
});

gulp.task('release-scripts', function() {
	gulp.src('dist/public/scripts/ui-kit.js')
		.pipe(gulp.dest('build/scripts'));
});
