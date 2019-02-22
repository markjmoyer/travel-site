var gulp = require('gulp'),
    watch = require('gulp-watch'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'),
    nested = require('postcss-nested');
    cssImport = require('postcss-import');
    minifycss = require('gulp-minify-css');
    rename = require('gulp-rename');
    concat = require('gulp-concat');
    uglify = require('gulp-uglify');

gulp.task('html', function() {
  return gulp.src('./src/index.html')
  .pipe(gulp.dest('./dist'));
});

gulp.task('styles', function() {
  return gulp.src('./src/assets/css/styles.css')
  .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
  .pipe(minifycss())
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('./dist/assets/css'));
});

gulp.task('scripts', function() {
  return gulp.src(['./src/assets/js/**/*.js'])
  .pipe(concat('scripts.js'))
  .pipe(uglify())
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('./dist/assets/js'));
});

gulp.task('copy', function() {
    gulp.src('./src/assets/images/*')
    .pipe(gulp.dest('./dist/assets/images'));
    gulp.src('./src/assets/images/icons/*')
    .pipe(gulp.dest('./dist/assets/images/icons'));
    // gulp.src('./src/index.html')
    // .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function() {
  gulp.watch('./src/index.html', ['html']);
  gulp.watch('./src/assets/js/**/*.js', ['scripts']);
  gulp.watch('./src/assets/css/**/*.css', ['styles']);
});

gulp.task('default', ['html', 'scripts', 'styles', 'copy', 'watch']);
