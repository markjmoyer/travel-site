var gulp = require('gulp'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');
    //browserSync = require('browser-sync').create();

    gulp.task('scripts', function() {
      return gulp.src(['./src/assets/js/**/*.js'])
      .pipe(concat('scripts.js'))
      .pipe(uglify())
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('./dist/assets/js'));
    });

    //gulp.task('default', ['scripts', 'watch']);
