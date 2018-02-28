const gulp = require('gulp');
const postcss = require('gulp-postcss');

const paths = {
  css: {
    entry: './src/*.css',
    watch: './src/**/*.css',
    dist: './dist'
  }
};

gulp.task('styles', () => {
  return gulp
    .src(paths.css.entry)
    .pipe(postcss({ modules: true }))
    .pipe(gulp.dest(paths.css.dist));
});

gulp.task('watch', () => {
  gulp.watch(paths.css.watch, ['styles']);
});

// Dev
gulp.task('dev', ['styles', 'watch']);

// Build
gulp.task('default', ['styles']);
