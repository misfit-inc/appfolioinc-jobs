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
 
gulp.task('sass:watch', function () {
  gulp.watch('./assets/stylesheets/**/*.scss', gulp.series('sass'));
});

gulp.task('uglify', function () {
		gulp.src([
			'./public/assets/js/owl.carousel.js',
			'./public/assets/js/isotope.pkgd.min.js',
			'./public/assets/js/motion-ui.js',
			'./public/assets/js/happiness-steps.js',
			'./public/assets/js/why-appfolio.js',
			'./public/assets/js/lottie.min.js',
			'./public/assets/js/jquery.waypoints.1.min.js',
			'./public/assets/js/jquery.waypoints.2.inview.min.js',
			'./public/assets/js/scripts.js',
		])
		.pipe(concat('main.js'))
		.pipe(gulp.dest('./assets/js'));

		return gulp.src(['./assets/js/main.js',])
						.pipe(uglify())
						.pipe(gulp.dest('./assets/js'));
});