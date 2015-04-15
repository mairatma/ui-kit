var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('release', function(cb) {
	runSequence('build', ['release-fonts', 'release-scripts'], cb);
});

gulp.task('release-fonts', function() {
	gulp.src([
		'dist/public/fonts/*.eot',
		'dist/public/fonts/*.svg',
		'dist/public/fonts/*.ttf',
		'dist/public/fonts/*.woff',
		'dist/public/fonts/*.css'
	]).pipe(gulp.dest('build/fonts'));
});

gulp.task('release-scripts', function() {
	gulp.src('dist/public/scripts/ui-kit.js')
		.pipe(gulp.dest('build/scripts'));
});
