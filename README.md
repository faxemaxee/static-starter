# static-starter
a suit-css starter kit for static pages – powered by gulp

## prerequisites

* [globally install gulp version 4 or higher](https://gulpjs.com/)

## get started

* `npm install`
* `gulp`
* open `index.html` in your favorite browser

## gulp cmds

#### common
_Notice: due to heavy load you have to run `gulp images` manually whenever you add new image ressources._

* **`gulp clean`** – deletes all processed files from `dist/ `
* **`gulp watch`** – starts watcher for `js` and `css` task
* **`gulp build`** – cleans first and then builds using every standalone task
* **`gulp`** – run build task once, then watch

#### standalone
* **`gulp assets`** – copy everything from `src/assets` to `dist/assets`
* **`gulp js`** – copy everything from `src/js` to `dist/js` except for files in `src/js/bundle` those will get concatinated into `dist/js/bundle.min.js`
* **`gulp css`** – compile suitcss using [`suitcss-preprocessor`](https://github.com/suitcss/preprocessor) and bundle into `dist/index.css`
* **`gulp images`** – optimize images and copy them to `dist/img/`

## step by step

this serves as a starter kit for static html/css/js pages.

* `dist/` – the output, copy this to your server once you are done
    * `**/*.(html|php)` – your page's structure, this works with html and php as well, but be consistent (notice [known issue](#knownissues))

    * `disabled.htaccess` – this comes pre-packed with a htaccess to get you up and running fast, for more info refer to the [.htaccess](#htaccess) section the comments in the file itself

* `gulpfile.js/` – the tooling, feel free to dive in ([gulpjs.com](https://gulpjs.com/))

* `src/` – here is where it all comes from, this folder lives in your repo

    * `assets/` – everything BUT images, place anything from fonts to downloadable PDFs right here
    
    * `css` – all the styles, this is using [SUITCSS](https://suitcss.github.io/), make sure every css file you want to use is imported into `css/index.css`

    * `img/` – put all images here, they will be optimized using [imagemin](https://github.com/imagemin/imagemin)

    * `img/uncompressed` – any images you do not want to process using imagemin can go here (e.g. animated PNGs will be stripped of their animation when using imagemin).
    
        :warning: **ATTENTION:** this will be merged into images **without** the `uncompressed` folder so keep an eye on your file/folder naming in any case where it'll overwrite files with the same name the uncompressed version will be chosen

    * `js/bundle/` – all js files in here will be concatinated to one big `bundle.min.js`

    * `js/` – everything **not** placed in `js/bundle` will be simply copied

## htaccess
// TODO

## known issues

1. by deactivating apache's trailing slashes you might encouter situations where referencing (e.g) images or other ressources cause a 404. You then have to reference them absolutely from the page's root directory
