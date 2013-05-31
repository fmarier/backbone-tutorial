var ChatMessagesView = Backbone.View.extend({
  initialize: function () {
    var source   = $("#chat-messages-template").html();
    this.template = Handlebars.compile(source);
  },
  render: function () {
    var rendered = this.template({messages: this.collection.toJSON()});
    this.$el.html(rendered);
    return this;
  }
});
