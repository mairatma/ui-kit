var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

gulp.task('fonts-12', function() {
	return gulp.src('src/public/fonts/icon-12/*.svg')
		.pipe(plugins.iconfontCss({
			fontName: 'icon-12',
			fontPath: '../fonts/',
			path: 'src/public/fonts/.template-12',
			targetPath: '../fonts/icon-12.css'
		}))
		.pipe(plugins.iconfont({
			fontName: 'icon-12',
			normalize: true,
			log: function() {}
		}))
		.pipe(gulp.dest('dist/public/fonts/'));
});

gulp.task('fonts-16', function() {
	return gulp.src('src/public/fonts/icon-16/*.svg')
		.pipe(plugins.iconfontCss({
			fontName: 'icon-16',
			fontPath: '../fonts/',
			path: 'src/public/fonts/.template-16',
			targetPath: '../fonts/icon-16.css'
		}))
		.pipe(plugins.iconfont({
			fontName: 'icon-16',
			normalize: true,
			log: function() {}
		}))
		.pipe(gulp.dest('dist/public/fonts/'));
});

gulp.task('fonts', ['fonts-12', 'fonts-16']);
