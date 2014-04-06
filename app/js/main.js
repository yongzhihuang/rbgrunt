requirejs.config({
  baseUrl: 'js',

  paths: {
  },

  shim: {
  }
});

require(['app'], function(App) {

  window.project = new App();

});