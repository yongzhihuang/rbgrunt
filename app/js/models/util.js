define([

], function() {
  var Util = Backbone.Model.extend({
    init: function() {

    },

    template: function(selector) {
    	//Helper function to return the content of a jquery selector
    	return $(selector).html();
    }
  });

  return Util;
});