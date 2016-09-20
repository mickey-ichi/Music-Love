var gulp            = require('gulp'),
    useref          = require('gulp-useref'),
    fs              = require('fs'),
    watch           = require('gulp-watch'),
    sass            = require('gulp-sass'),
    server          = require('gulp-webserver'),
    inject          = require('gulp-inject'),
    angularFilesort = require('gulp-angular-filesort'),
    concat          = require('gulp-concat'),
    gulpif          = require('gulp-if'),
    uglify          = require('gulp-uglify'),
    minifyCss       = require('gulp-clean-css');

var defined = {
    scss: './app/**/*.scss',
    js  : './app/**/*.js',
    css : './assets/styles/main.css'
};

gulp.task('dev', ['injectJs', 'mapSass', 'server', 'watchDev']);
gulp.task('prod', ['injectJs', 'mapSass', 'server']);

gulp.task('minJs', minJs);
gulp.task('minCss', minCss);
gulp.task('server', webServer);
gulp.task('injectJs', injectJs);
gulp.task('mapSass', mapSass);
gulp.task('watchDev', watchDev);

function minJs() {
    var indexMinFilePath = 'index.html';
    fs.writeFileSync(indexMinFilePath, fs.readFileSync('index.dev.html'));
    return gulp.src(indexMinFilePath)
        .pipe(useref())
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulp.dest('.'));
}

function minCss() {
    return gulp.src(defined.css)
        .pipe(gulpif('*.css', minifyCss()))
        .pipe(gulp.dest('./assets/styles/'));
}

function webServer() {
    var webServerOptions = {
        host      : '0.0.0.0',
        port      : '8080',
        livereload: true,
        fallback  : 'index.dev.html',
        open      : true
    };
    return gulp.src('.').pipe(server(webServerOptions));
}

function injectJs() {
    var sources = gulp.src([defined.js]).pipe(angularFilesort());

    return gulp.src('./index.dev.html')
        .pipe(inject(sources))
        .pipe(gulp.dest('.'));
}

function mapSass() {
    return gulp.src(defined.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./assets/css'));
}

function watchDev() {
    watch(defined.scss, mapSass);
    watch(defined.js, injectJs);
}