var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('release', function(cb) {
  runSequence('build', ['release-styles', 'release-scripts'], cb);
});

gulp.task('release-styles', function() {
  gulp.src('dist/public/styles/ui-kit.css')
    .pipe(gulp.dest('build/styles'));
});

gulp.task('release-scripts', function() {
  gulp.src('dist/public/scripts/ui-kit.js')
    .pipe(gulp.dest('build/scripts'));
});
