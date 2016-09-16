var gulp   = require('gulp'),
    useref = require('gulp-useref'),
    fs     = require('fs'),
    watch  = require('gulp-watch');

gulp.task('default', function () {
    var indexMinFilePath = 'index.html';
    return watch('app/**/*.js', function () {
        fs.writeFileSync(indexMinFilePath, fs.readFileSync('index.dev.html'));
        return gulp.src(indexMinFilePath)
            .pipe(useref())
            .pipe(gulp.dest('.'));
    });
});