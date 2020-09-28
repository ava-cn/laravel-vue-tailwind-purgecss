const mix = require('laravel-mix');
require('laravel-mix-tailwind');
require('laravel-mix-purgecss');

// JS
mix.js('resources/js/app.js', 'public/js');

// CSS
mix.sass('resources/sass/app.scss', 'public/css')
  .tailwind('./tailwind.config.js')
  .options({processCssUrls: false});

// purgeCSS
mix.purgeCss({
      enabled: mix.inProduction(),
      folders: ['src', 'templates'],
      extensions: ['html', 'js', 'php', 'vue'],
  });

// Copy jQuery Library
mix.copy('node_modules/jquery/dist/jquery.min.js', 'public/js'); // 拷贝jquery

// Library Code Splitting，See: https://laravel-mix.com/docs/5.0/extract
mix.extract(['vue', 'axios', 'lodash']);

if (mix.inProduction()) {
    mix.version()
}
