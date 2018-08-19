const gulp = require('gulp');
const postcss = require('gulp-postcss');

const paths = {
  css: {
    entry: './src/*.css',
    watch: './src/**/*.css',
    dist: './dist',
  },
};

function styles() {
  return gulp
    .src(paths.css.entry)
    .pipe(postcss({ modules: true }))
    .pipe(gulp.dest(paths.css.dist));
}

function watch() {
  return gulp.watch(paths.css.watch, styles);
}

// Dev
gulp.task('dev', gulp.series(styles, watch));

// Build (Default)
gulp.task('default', gulp.series(styles));
