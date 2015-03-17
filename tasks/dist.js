var gulp = require('gulp');

gulp.task('dist', ['build'], function() {
  gulp.src('dist/public/styles/main.css')
    .pipe(gulp.dest('dist/styles'));
});
