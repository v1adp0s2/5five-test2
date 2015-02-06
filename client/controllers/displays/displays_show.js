DisplaysShowController = RouteController.extend({
  waitOn: function () {
    Meteor.subscribe('displays_show', this.params._id);
  },

  data: function () {
    return Displays.findOne({ _id: this.params._id });
  },

  action: function () {
    this.render();
  }
});
