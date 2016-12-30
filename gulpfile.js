var gulp = require('gulp'),
	connect = require('gulp-connect'),
	webpack = require('webpack-stream'),
	named = require('vinyl-named'),
	clean = require('gulp-clean'),
	webpackConfig = require('./webpack.config.js'),

	port = process.env.port || 5000 ;

	gulp.task('connect',function(){
		connect.server({
			root:'./',
			port:port,
			livereload:true,
		})
	});

	gulp.task('connect-pro',function(){
		connect.server({
			root:'./dist',
			port:port,
			livereload:true,
		})
	});

	gulp.task('js',function(){
		gulp.src('./dist/**/*.js')
		.pipe(connect.reload())
	});

	gulp.task('html',function(){
		gulp.src('./app/**/*.html')
		.pipe(connect.reload())
	});

	gulp.task('css',function(){
		gulp.src('./app/**/*.css')
		.pipe(connect.reload())
	});

	gulp.task('clean',function(){
		return gulp.src('dist/**/*')
		.pipe(clean({force:true}));
	});


	gulp.task('watch',function(){
		gulp.watch('./dist/**/*.js',['js']);
		gulp.watch('./app/**/*.html',['html']);
		gulp.watch('./app/**/*.css',['css']);
		gulp.watch('./app/**/*.js',['webpack']);
	});

	gulp.task('webpack',['clean'],function(){
		return gulp.src('./app/js/*.js')
		.pipe(named())
		.pipe(webpack(webpackConfig))
		.pipe(gulp.dest('./dist'));
	});

	gulp.task('default',['webpack']);

	gulp.task('server',['webpack','connect-pro','watch']);