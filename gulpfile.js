// Include gulp

const gulp = require('gulp');
const suitcss = require('gulp-suitcss');
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');
const changed = require('gulp-changed');
const del = require('del');
const runSequence = require('run-sequence');

gulp.task('clean', () => {
    return del([
        'dist/**/*.!(php|html|gitkeep)',
        'dist/js',
        'dist/img',
        'dist/assets',
    ])
})

gulp.task('assets', function () {
    gulp.src('src/assets/**/*')
        .pipe(gulp.dest('./dist/assets'));
});

gulp.task('images', () => {
    gulp.src('src/img/**/*')
        .pipe(changed('./dist/img'))
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img'));
});

gulp.task('javascript', () => {
    gulp.src('src/js/bundle/**/*.js')
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('dist/js'));

    gulp.src([
        'src/js/**/*.js',
        '!src/js/bundle/**/*.js'
    ]).pipe(gulp.dest('dist/js'));
})

// exteded suit css watching
gulp.task('suitcss', () => {
    gulp.src('src/css/index.css')
        .pipe(suitcss({
            minify: true,
            stylelint: {
                extends: 'stylelint-config-suitcss',
                rules: {
                    "order/properties-alphabetical-order": null
                }
            },
            use: ['postcss-color-function'],
            'postcss-bem-linter': {
                componentName: "^[A-Z][a-zA-Z0-9]+$",
                componentSelectors: suitSelector,
                utilitySelectors: "^\.u-(sm-|md-|lg-|xl-)?(?:[a-z0-9][a-zA-Z0-9]*)+$",
            }
        }))
        .pipe(gulp.dest('dist'))
});

// Watch Files For Changes
gulp.task('watch', () => {
    gulp.watch('src/css/**/*.css', ['suitcss']);
    gulp.watch('src/js/**/*.js', ['javascript']);
    gulp.watch('src/assets/**/*.*', ['assets']);
    gulp.watch('src/img/**/*.*', ['images']);
});

// Build Task
gulp.task('build', (cb) => {
    runSequence(
        'clean',
        ['suitcss', 'javascript', 'assets', 'images'],
        cb
    );
});

// Default Task
gulp.task('default', (cb) => {
    runSequence(
        'clean',
        ['suitcss', 'javascript', 'assets', 'images'],
        'watch',
        cb
    );
});

/*
    extend default suit linting
    https://github.com/postcss/postcss-bem-linter/blob/master/lib/preset-patterns.js
*/
function suitSelector(componentName, presetOptions) {
    const ns = (presetOptions && presetOptions.namespace) ? `${presetOptions.namespace}-` : '';
    const WORD = '[a-z0-9][a-zA-Z0-9]*';
    const descendant = `(?:-${WORD})?`;
    const modifier = `(?:--${WORD}(?:\\.${ns}${componentName}${descendant}--${WORD})*)?`;
    const attribute = '(?:\\[.+\\])?';
    const state = `(?:\\.is-${WORD})*`;
    const body = descendant +
        modifier +
        attribute +
        state;
    return new RegExp(`^\\.${ns}${componentName}\\b${body}$`);
}