var gulp = require('gulp');

gulp.task('release', ['build'], function() {
  gulp.src('dist/public/styles/main.css')
    .pipe(gulp.dest('build/styles'));
});
