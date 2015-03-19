var gulp = require('gulp');

gulp.task('release', ['release-styles', 'release-scripts']);

gulp.task('release-styles', ['build-all'], function() {
  gulp.src('dist/public/styles/main.css')
    .pipe(gulp.dest('build/styles'));
});

gulp.task('release-scripts', ['build-all'], function() {
  gulp.src('dist/public/scripts/*')
    .pipe(gulp.dest('build/scripts'));
});
