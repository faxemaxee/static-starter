"use strict";

const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const changed = require('gulp-changed');

function copyCompressedImages() {
    return gulp.src(['src/img/**/*', '!src/img/uncompressed/*', '!src/img/uncompressed'])
        .pipe(changed('./dist/img'))
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img'));
}

function copyUncompressedImages() {
    return gulp.src('src/img/uncompressed/**/*')
        .pipe(changed('./dist/img'))
        .pipe(gulp.dest('./dist/img'));
}

module.exports = gulp.series(copyCompressedImages, copyUncompressedImages);
