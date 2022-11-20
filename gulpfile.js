const { src, dest, watch, series, task } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const plumber = require('gulp-plumber');
const rename = require("gulp-rename");
const gulpPug = require('gulp-pug');
const browserSync = require('browser-sync').create();
const cssnano = require('gulp-cssnano');
const del = require('del');
const tiny = require('gulp-tinypng-nokey');


function buildHTML() {
    return src('src/pug/pages/*.pug')
            .pipe(gulpPug({
                basedir: 'src/pug/pages',
                pretty: true
            }))
            .pipe(dest('./src'))
            .pipe(browserSync.stream({ stream: true  }))
}

function buildScripts() {
    return src('src/assets/js/*.js')
            .pipe(plumber())
            .pipe(dest('./src'))
            .pipe(browserSync.stream({ stream: true  }))
}

function gulpSass() {
    return src('./src/assets/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(sass.sync().on('error', sass.logError))
        // .pipe(autoprefixer({
        //     browsers: ['last 6 versions'],
        //     cascade: false,
        //     grid: true
        // }))
        // .pipe(cssnano())
        .pipe(dest('./src/assets/css'))
        // .pipe(browserSync.reload({ stream: true }));
}
 
function server() {
    browserSync.init({
        server: {
            baseDir: "./src"
        },
        port: 8080,
        notify: false
    });
    watch(['src/pug/pages/*.pug'], { events: 'change' }, buildHTML).on('change', function() {
        browserSync.reload({ match: "**/*.html" });
    });
    watch(['src/scss/**/*.scss'], { events: 'change' }, gulpSass).on('change', function() {
        browserSync.reload({ match: "**/*.css" });
    });
}

function build(done) {
    del.sync('docs', { force: true });
    done();
    src('src/assets/fonts/**/*.{woff,css}').pipe(dest("./docs/assets/fonts"));
    src('src/assets/css/**/main.css').pipe(dest("./docs/assets/css"));
    src('src/**/*.html').pipe(dest("./docs"));
    src('src/assets/js/**/*.js').pipe(dest("./docs/assets/js"));
    src('src/assets/img/**/*.svg').pipe(dest("./docs/assets/img"));
    src('src/assets/img/**/*.{png,jpg,gif}')
        .pipe(tiny())
        .pipe(dest("./docs/assets/img"));
}

exports.default = series(buildHTML, gulpSass, server);
exports.build = series(build);