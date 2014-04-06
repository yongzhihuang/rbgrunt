define([
'models/thing'
], function(Thing) {
  var Things = Backbone.Collection.extend({
    model: Thing, 
  });

  return Things;
});