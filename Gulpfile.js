'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('cssnano', function() {
    return gulp.src('./css/styles.css')
        .pipe(cssnano())
        .pipe(gulp.dest('./out'));
});
 
gulp.task('default', function () {
  gulp.watch('./sass/**/*.scss', gulp.series('sass'));
});