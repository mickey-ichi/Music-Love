var gulp = require('gulp'),
useref   = require('gulp-useref'),
fs       = require('fs');

gulp.task('default', function() {
  var indexMinFilePath = 'index.html';
  fs.writeFileSync(indexMinFilePath, fs.readFileSync('index.dev.html'));
  return gulp.src(indexMinFilePath)
        .pipe(useref())
        .pipe(gulp.dest('.'));
});