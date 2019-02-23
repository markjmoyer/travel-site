var gulp = require('gulp'),postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  cssvars = require('postcss-simple-vars'),
  nested = require('postcss-nested'),
  mixins = require('postcss-mixins'),
  cssImport = require('postcss-import'),
  minifycss = require('gulp-minify-css'),
  rename = require('gulp-rename');

gulp.task('styles', function() {
  return gulp.src('./src/assets/css/styles.css')
  .pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
  .on('error', function(errorInfo) {
    console.log(errorInfo.toString());
    this.emit('end');
  })
  .pipe(minifycss())
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('./dist/assets/css'));
});

//gulp.task('default', ['styles']);
