var ChatMessagesView = Backbone.View.extend({
  initialize: function () {
    var source   = $("#chat-messages-template").html();
    this.template = Handlebars.compile(source);
    this.collection.bind('add', this.render, this);
  },
  render: function () {
    var rendered = this.template({messages: this.collection.toJSON()});
    this.$el.html(rendered);
    return this;
  }
});

var ChatFormView = Backbone.View.extend({
  events: {
   'click button[type=submit]': 'sendMessage'
  },
  initialize: function () {
    var source   = $("#chat-form-template").html();
    this.template = Handlebars.compile(source);
  },
  render: function () {
    var rendered = this.template();
    this.$el.html(rendered);
    return this;
  },
  sendMessage: function(e) {
    e.preventDefault();
    this.collection.add({
      text: this.$('input').val(),
      time: (new Date()).getTime()
    });
    this.$('input').val('');
  }
});
