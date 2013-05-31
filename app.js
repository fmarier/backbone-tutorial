var now = new Date().getTime();
var messages = new ChatMessages([
  {author: 'me', text: 'Then, mix them all together.', time: now - 50},
  {author: 'me', text: 'Start by collecting the ingredients.', time: now - 100},
  {author: 'me', text: 'Finally, bake for 10 minutes.', time: now}
]);

var view = new ChatMessagesView({collection: messages});
$('.chat-messages-wrapper').append(view.render().$el);
