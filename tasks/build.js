var gulp = require('gulp');
var concat = require('gulp-concat');
var plugins = require('gulp-load-plugins')();
var runSequence = require('run-sequence');
var uglify = require('gulp-uglify');

gulp.task('build-docs', function () {
  return gulp.src('dist/public/index.html')
    .pipe(plugins.highlight())
    .pipe(plugins.htmlPrettify({indent_char: ' ', indent_size: 2}))
    .pipe(gulp.dest('dist/public'));
});

gulp.task('build-scripts', ['aui:build:globals'], function() {
  return gulp.src(['node_modules/closure-templates/soyutils.js', 'dist/public/scripts/main.js'])
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/public/scripts'));
});

gulp.task('build', function(cb) {
  runSequence('build-scripts', 'copy', ['images', 'fonts', 'scripts', 'styles', 'templates'], cb);
});
