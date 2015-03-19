var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var runSequence = require('run-sequence');

gulp.task('build-highlight', function () {
  return gulp.src('dist/public/index.html')
    .pipe(plugins.highlight())
    .pipe(gulp.dest('dist/public'));
});

gulp.task('build-all', function(cb) {
  runSequence('aui:soy', 'build', 'build-highlight', cb);
});
