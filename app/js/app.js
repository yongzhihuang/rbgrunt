define([
	'models/util',
	'views/thing',
	'collections/things'
], function(Util, ThingView, ThingsCollection) {
	
  var App = function(config) {
  	this.init(config);

  	this.views = {};
  	this.views.thingView = new ThingView();
  	this.views.thingView.render();

  };

  App.prototype = {
  	init: function(config) {

  	}
  };

  return App;
});