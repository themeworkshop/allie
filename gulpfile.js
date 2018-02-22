const gulp = require('gulp');
const postcss = require('gulp-postcss');

const entry = './src/*.css';
const dist = './dist';

gulp.task('styles', () => {
  return gulp
    .src(entry)
    .pipe(postcss({ modules: true }))
    .pipe(gulp.dest(dist));
});

gulp.task('watch', () => {
  gulp.watch(entry, ['styles']);
});

// Dev
gulp.task('dev', ['styles', 'watch']);

// Build
gulp.task('default', ['styles']);
