/* eslint-disable */
import clear from 'rollup-plugin-clear';
import resolve from '@rollup/plugin-node-resolve';
import copy from 'rollup-plugin-copy';
import compiler from '@ampproject/rollup-plugin-closure-compiler';
import filesize from 'rollup-plugin-filesize';
import typescript from 'rollup-plugin-typescript2';
import strip from '@rollup/plugin-strip';
import html from '@rollup/plugin-html';
export default [{
    input: './src/FilmDB.ts',
    onwarn: function() {},
    plugins: [
        clear({ targets: ['public'] }),
        resolve(),
        copy({
            targets: [
                { src: 'assets/production/_headers', dest: 'public' },
                { src: 'assets/fonts/**.*', dest: 'public' },
                { src: 'assets/icons/**.*', dest: 'public' },
                { src: 'assets/production/**.*', dest: 'public', },
            ]
        }),
        typescript(),
        strip({ include: '**/*.ts' }),
        html({ template: template }),
        filesize({ showBrotliSize: true })
    ],
    output: [getOutput(2019), getOutput(2018), getOutput(2017), getOutput(2016), getOutput(2015)]
}, {
    input: './src/FilmDB.ts',
    onwarn: function() {},
    plugins: [
        resolve(),
        typescript(),
        strip({ include: '**/*.ts' }),
        html({ template: template }),
        filesize({ showBrotliSize: true })
    ],
    output: getES5()
}];

function getOutput(year) {
    const output = {
        entryFileNames: '[name].' + year + '.[hash].js',
        dir: './public/',
        format: 'esm',
        plugins: [getCompiler(year)]
    }
    return output;
}

function getCompiler(year) {
    const ecma = 'ECMASCRIPT_' + year;
    return compiler({ language_in: 'ECMASCRIPT_2020', compilation_level: 'ADVANCED', language_out: ecma })
}

function getES5() {
    return {
        entryFileNames: '[name].es5.[hash].js',
        dir: './public/',
        inlineDynamicImports: true,
        format: 'iife',
        plugins: [
            compiler({
                language_in: 'ECMASCRIPT_2020',
                compilation_level: 'ADVANCED',
                language_out: 'ECMASCRIPT5'
            })
        ]
    }
}

let entryChunkES5;
let entryChunk2015;
let entryChunk2016;
let entryChunk2017;
let entryChunk2018;
let entryChunk2019;

function template({ files }) {
    const chunks = files.js;
    for (const chunk of chunks) {
        console.log(chunk.fileName);
        if (chunk.isEntry) {
            const fileName = chunk.fileName;
            if (fileName.startsWith('FilmDB.es5')) {
                entryChunkES5 = fileName;
            } else if (fileName.startsWith('FilmDB.2015')) {
                entryChunk2015 = fileName;
            } else if (fileName.startsWith('FilmDB.2016')) {
                entryChunk2016 = fileName;
            } else if (fileName.startsWith('FilmDB.2017')) {
                entryChunk2017 = fileName;
            } else if (fileName.startsWith('FilmDB.2018')) {
                entryChunk2018 = fileName;
            } else if (fileName.startsWith('FilmDB.2019')) {
                entryChunk2019 = fileName;
            }
        }
    }
    return `<!DOCTYPE html>
<html lang="da">
  <head>
    <base href="/">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1">
    <meta name="Description" content="Film DB, Danmarks største film database.">
    <meta name="theme-color" content="#036">
    <link rel="preload" href="inter-regular.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="inter-medium.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="inter-semi-bold.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="inter-bold.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="icon" href="icon32x32.ico">
    <link rel="icon" href="icon.svg" type="image/svg+xml">
    <link rel="apple-touch-icon" href="icon180x180.png">
    <link rel="manifest" href="manifest.webmanifest">
    <title>Film DB, Danmarks største film database.</title>
    <style>
      @font-face { font-family: 'Inter';font-weight: 400;font-display: block;src: url('inter-regular.woff2') format('woff2'); }
      @font-face { font-family: 'Inter';font-weight: 500;font-display: block;src: url('inter-medium.woff2') format('woff2'); }
      @font-face { font-family: 'Inter';font-weight: 600;font-display: block;src: url('inter-semi-bold.woff2') format('woff2'); }
      @font-face { font-family: 'Inter';font-weight: 700;font-display: block;src: url('inter-bold.woff2') format('woff2'); }
    </style>
  </head>
  <body>
    <film-db></film-db>
    <script>
        function c(){if(window.fetch)d();else{var b=document.createElement("script");b.src="./fetch.js";b.onload=d;document.body.appendChild(b)}}function d(){var b=document.createElement("script");b.type="module";if("function"===typeof Object.fromEntries)var a="` + entryChunk2019 + `";else void 0!==window.Promise&&"function"===typeof window.Promise.prototype.finally?a="` + entryChunk2018 + `":"function"===typeof String.prototype.padStart?a="` + entryChunk2017 + `":"function"===typeof Array.prototype.includes?a="` + entryChunk2016 + `":void 0!==window.Promise?a="` + entryChunk2015 + `":(a="` + entryChunkES5 + `",b.type="");b.src=a;document.body.appendChild(b)}if("function"!==typeof window.CustomEvent){var CustomEvent=function(b,a){a=a||{bubbles:!1,cancelable:!1,detail:void 0};var f=document.createEvent("CustomEvent");f.initCustomEvent(b,a.bubbles,a.cancelable,a.detail);return f};CustomEvent.prototype=window.Event.prototype;window.CustomEvent=CustomEvent}if(window.customElements)c();else{var e=document.createElement("script");e.src="./ce.js";e.onload=c;document.body.appendChild(e)};
    </script>
  </body>
</html>`
}
