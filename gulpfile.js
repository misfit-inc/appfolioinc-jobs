'use strict';
 
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat')
 
gulp.task('sass', function () {
  return gulp.src('./assets/stylesheets/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(sourcemaps.write('./assets/css/maps'))
    .pipe(gulp.dest('./public/assets/css'));
});

gulp.task('sass:concat', function () {
	return gulp.src([
			'./public/assets/css/motion-ui.css',
			'./public/assets/css/owl.carousel.min.css',
			'./public/assets/css/owl.theme.default.css',
			'./public/assets/css/style.css',
		])
		.pipe(concat('style.css'))
		.pipe(gulp.dest('./public/assets/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./assets/stylesheets/**/*.scss', gulp.series('sass'));
});

gulp.task('concat', function () {
		return gulp.src([
			'./assets/js/owl.carousel.js',
			'./assets/js/isotope.pkgd.min.js',
			'./assets/js/motion-ui.js',
			'./assets/js/happiness-steps.js',
			'./assets/js/why-appfolio.js',
			'./assets/js/lottie.min.js',
			'./assets/js/jquery.waypoints.1.min.js',
			'./assets/js/jquery.waypoints.2.inview.min.js',
			'./assets/js/scripts.js',
		])
		.pipe(concat('main.js'))
		.pipe(gulp.dest('./public/assets/js'));
});

gulp.task('uglify', function () {
	return gulp.src(['./public/assets/js/main.js', ])
		.pipe(uglify())
		.pipe(gulp.dest('./public/assets/js'));
});

gulp.task('build-js', gulp.series('concat', 'uglify'));
gulp.task('build-css', gulp.series('sass', 'sass:concat'));
