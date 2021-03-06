"use strict";

const gulp = require('gulp');

const assets = require ('./tasks/assets');
const js = require ('./tasks/js');
const clean = require ('./tasks/clean');
const css = require ('./tasks/css');
const images = require ('./tasks/images');

function watch() {
    gulp.watch('src/css/**/*.css', css);
    gulp.watch('src/js/**/*.js', js);
}

const build = gulp.series(clean, gulp.parallel(css, js, images, assets));

exports.assets = assets;
exports.js = js;
exports.clean = clean;
exports.css = css;
exports.images = images;
exports.watch = watch;

exports.build = build
exports.default = gulp.series(build, watch);