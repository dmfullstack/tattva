const gulp = require('gulp');
const gulpIf = require('gulp-if');
const path = require('path');
const eslint = require('gulp-eslint');
const htmlhint = require('gulp-htmlhint');

gulp.task('lint', ['eslint','htmlhint']);
gulp.task('lint-fix', ['eslint-fix']);

function isFixed(file) {
   // Has ESLint fixed the file contents?
   return file.eslint != null && file.eslint.fixed;
}

function getSrc() {
return ['webclient/**/*.jsx','webserver/**/*','!webclient/dist/**/*','!node_modules/**/*'];
}

gulp.task('eslint', function() {
  return gulp.src(getSrc())
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(eslint.failAfterError());
});

gulp.task('eslint-fix', function() {
  return gulp.src(getSrc())
      .pipe(eslint({fix:true}))
      .pipe(gulpIf(isFixed, gulp.dest('lintfixes/')))
      .pipe(eslint.format())
      .pipe(eslint.failAfterError());
});

gulp.task('htmlhint', function() {
  return gulp.src(['**/*.html','!node_modules/**/*','!webclient/bower_components/**/*'])
  .pipe(htmlhint({htmlhintrc: ".htmlhintrc"}))
  .pipe(htmlhint.failReporter());
});
