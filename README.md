# static-starter
a suit-css starter kit for static pages – powered by gulp

## get started 

* `npm install`
* `gulp`
* open `index.html` in your favorite browser

## gulp cmds

* `gulp` – default watcher (css & js)
* `gulp images` – compile assets (necessary when you add new files to `./src/img`)

## what it does

this serves as a starter kit for static html/css/js pages.

* html structure lives in `dist/` – nothing else!
* css lives in `src/css/` it'll be autocompiled using [`suitcss-preprocessor`](https://github.com/suitcss/preprocessor)
    * make yure every css file you want to use is imported into `src/css/index.css` since we'll do the auto import from there, nowhere else
    * the watcher still watches all changes in `*.css` under `src/css/`
* js lives in `src/js/`, it'll be bundled and renamed to `dist/bundle.js`
    * we'll just bundle everything under `src/js/`
    * there's no minification – for now
* images live in `src/img/`
    * no watcher for the images
    * it'll only re-minify images that have been changed