'use strict';
 
var gulp = require('gulp'),
		sass = require('gulp-sass')
 
gulp.task('sass', function () {
  return gulp.src('./assets/stylesheets/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./public/assets/css'));
});
 
gulp.task('sass:watch', function () {
	gulp.watch('./assets/stylesheets/*.scss', ['sass']);
});