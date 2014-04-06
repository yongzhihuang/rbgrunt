requirejs.config({
  baseUrl: 'js',

  paths: {

  },

  shim: {
    'lib/underscore-min': {
      exports: '_'
    },
    'lib/backbone-min': {
      deps: ['lib/underscore-min', 'lib/jquery-min'], 
      exports: 'Backbone'
    },
    'lib/handlebars': {
      exports: 'Handlebars'
    },
    'app': {
      deps: ['lib/underscore-min', 'lib/backbone-min']
    }
  }

});

require([
	'app',
	'config'
], function(App, Config) {

  window.project = new App(Config);

});