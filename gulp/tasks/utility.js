var gulp = require('gulp');

gulp.task('html', function() {
  return gulp.src('./src/index.html')
  .pipe(gulp.dest('./dist'));
});

gulp.task('copy', function() {
    gulp.src('./src/assets/images/*')
    .pipe(gulp.dest('./dist/assets/images'));
    gulp.src('./src/assets/images/icons/*')
    .pipe(gulp.dest('./dist/assets/images/icons'));
});

gulp.task('default', ['html', 'copy', 'styles', 'scripts', 'cssInject', 'watch']);
