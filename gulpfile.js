'use strict';
 
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps')
 
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