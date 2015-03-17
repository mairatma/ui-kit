var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

gulp.task('fonts', function() {
  return gulp.src('src/public/fonts/*.svg')
    .pipe(plugins.iconfontCss({
      fontName: 'icon-16',
      path: 'src/public/fonts/.template',
      targetPath: '../fonts/icon-16.css'
    }))
    .pipe(plugins.iconfont({
      fontName: 'icon-16',
      normalize: true,
      log: function() {}
    }))
    .pipe(gulp.dest('dist/public/fonts'));
});
