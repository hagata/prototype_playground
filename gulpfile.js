const gulp = require('gulp');

const browserSync = require('browser-sync').create();
const clean = require('gulp-clean');
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

gulp.task('copy', ['clean'], function() {
  return gulp.src(['source/assets/**/*'], {
    base: 'source'
  }).pipe(gulp.dest('_build'));
});

gulp.task('clean', function() {
  return gulp.src('_build/assets', {read: false})
      .pipe(clean());
});

gulp.task('watch', function() {
  gulp.watch('source/styles/**/*.scss', ['sass']);
  gulp.watch([
    'source/pages/**/*.tpl',
    'source/templates/**/*.tpl'], ['templates']);
  gulp.watch([
    '_build/**/*.{html,js}'])
    .on('change', browserSync.reload);
  gulp.watch('source/scripts/**/*.js', ['scripts'])
  gulp.watch('source/assets/**', ['copy']);
});

gulp.task('default', [
  'sass',
  'templates',
  'scripts',
  'copy',
  'serve',
  'watch'
]);
