define([
  'lib/handlebars',
  'models/util'
], function(Handlebars, Util) {
  
  var thingView = Backbone.View.extend({

    el: $('#content'),
    template: '#handlebars-template-div',

    events: {

    },

    initialize: function() {
      this.render();
    },

    render: function() {
      var util = new Util();

      var source = util.template(this.template);
      var template = Handlebars.compile(source);

      this.$el.html(template);
    }
  });

  return thingView;
});