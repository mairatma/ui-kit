var gulp = require('gulp');

gulp.task('release', ['aui:build:globals', 'build'], function() {
  gulp.src('dist/public/styles/main.css')
    .pipe(gulp.dest('build/styles'));
});
