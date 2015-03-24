var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

gulp.task('docs-highlight', function () {
  return gulp.src('dist/public/index.html')
    .pipe(plugins.highlight())
    .pipe(gulp.dest('dist/public'));
});

gulp.task('docs-prettify', function() {
  return gulp.src('dist/public/index.html')
    .pipe(plugins.htmlPrettify({indent_char: ' ', indent_size: 2}))
    .pipe(gulp.dest('dist/public'));
});
