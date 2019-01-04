"use strict";

const del = require('del');

function clean() {
    return del([
        'dist/**/*.!(php|html|gitkeep|ttf)',
        'dist/js',
        'dist/img',
        'dist/assets',
    ])
}

module.exports = clean;