let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

//  Home
mix.js('resources/assets/js/app.js', 'public/js')
    // music
    .js('resources/assets/js/pages/music/app_music.js', 'public/js')
    // blog
    .js('resources/assets/js/pages/blog/app_blog.js', 'public/js')
    .sass('resources/assets/sass/app.scss', 'public/css');