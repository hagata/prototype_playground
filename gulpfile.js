const gulp = require('gulp');

const browserSync = require('browser-sync').create();
const nunjucks = require('gulp-nunjucks-render');
const pump = require('pump');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');

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
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("_build/styles"))
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

// basic scripts tasks.
gulp.task('scripts', function(cb) {
  pump([
    gulp.src('source/scripts/*.js'),
    uglify(),
    gulp.dest('_build/scripts')
  ],
    cb
  );
});


gulp.task('watch', function() {
  gulp.watch('./source/styles/**/*.scss', ['sass']);
  gulp.watch('./source/pages/**/*.tpl', ['templates']);
  gulp.watch('./source/scripts/**/*.js', ['scripts']);
});

gulp.task('default', [
  'sass',
  'templates',
  'scripts',
  'serve',
  'watch'
]);
