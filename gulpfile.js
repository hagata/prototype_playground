const gulp = require('gulp');

const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');


// Static server
gulp.task('serve', function () {
  browserSync.init({
    server: {
      baseDir: "./_build"
    }
  });
});

// Sass to CSS compilation
gulp.task('sass', function() {
  return gulp.src("source/styles/**/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("_build/css"))
    .pipe(browserSync.stream());
});

// Templates compilation
gulp.task('watch', function() {
  gulp.watch('./source/styles/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'serve', 'watch']);
