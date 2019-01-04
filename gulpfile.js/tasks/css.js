"use strict";

const gulp = require('gulp');
const suitcss = require('../helper/gulp-suitcss.js');

function css() {
    return gulp.src('src/css/index.css')
        .pipe(
            suitcss({
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
                },
                'postcss-calc': { preserve: true },
                'postcss-custom-properties': { preserve: true }
            })
        )
        .pipe(gulp.dest('dist'));
}

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

module.exports = css;