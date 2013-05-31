var ChatMessage = Backbone.Model.extend({
  defaults: {
    'author': 'Unknown',
    'text': ''
  },
  initialize: function () {
  },
  getPurified: function () {
    return this.get('text').replace('shit', '****');
  }
});

var ChatMessages = Backbone.Collection.extend({
  model: ChatMessage,
  comparator: function (model) {
    return model.get('time');
  }
});
