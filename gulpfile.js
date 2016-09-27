const gulp = require('gulp');

const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const nunjucks = require('gulp-nunjucks-render');

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
gulp.task('templates', function() {
  // Gets .tpl  files in pages
  return gulp.src('source/pages/*.tpl')
    // Renders templates from source/templates with nunjucks.
    .pipe(nunjucks({
      path: ['source/templates']
    }))
    .pipe(gulp.dest('_build'))
});

gulp.task('watch', function() {
  gulp.watch('./source/styles/**/*.scss', ['sass']);
  gulp.watch('./source/pages/**/*.tpl', ['templates']);
});

gulp.task('default', ['sass', 'templates', 'serve', 'watch']);
