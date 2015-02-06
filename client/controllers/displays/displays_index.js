DisplaysIndexController = RouteController.extend({
  waitOn: function () {
    Meteor.subscribe('displays_index');
  },

  data: function () {
  },

  action: function () {
    this.render();
  }
});
