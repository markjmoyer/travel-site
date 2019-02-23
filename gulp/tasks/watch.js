var gulp = require('gulp'),
    watch = require('gulp-watch');
    browserSync = require('browser-sync').create();

    gulp.task('watch', function() {
      browserSync.init({
        notify: false,
        server: {
          baseDir: "dist"
        }
      });

      watch('src/index.html', function() {
        browserSync.reload();
      });

      watch('./src/assets/css/**/*.css', function() {
        gulp.start('cssInject');
        browserSync.reload();
      });

      watch('./src/assets/js/**/*.js', function() {
        gulp.start('scripts');
      });

      gulp.watch('./src/index.html', ['html']);
      //gulp.watch('./src/assets/js/**/*.js', ['scripts']);
      //gulp.watch('./src/assets/css/**/*.css', ['styles']);
    });

    gulp.task('cssInject', ['styles'], function() {
      return gulp.src('src/assets/css/styles.css')
      .pipe(browserSync.stream());
    });

    //gulp.task('default', ['watch']);
