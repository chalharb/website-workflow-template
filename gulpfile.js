/**
 * Created by logan on 12/9/15.
 */

var elixir = require('laravel-elixir');

elixir.config.assetsPath = '_dev';
elixir.config.publicPath = 'assets';

elixir(function(mix) {
    mix.rubySass('styles.scss','assets/css/styles.css')
        .rubySass('calendar_styles.scss','assets/css/calendar_styles.css')
        .scripts('app.js')
        .scripts([
            'vendor/jquery/jquery-2.1.4.js',
            'vendor/bootstrap/bootstrap.js',
            'vendor/modernizr/modernizr-2.8.3.js'
        ],'assets/js/vendor-scripts.js');
});