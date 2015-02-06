ScenariosShowController = RouteController.extend({
  waitOn: function () {
    return Meteor.subscribe('scenarios_show', this.params._id);
  },

  data: function () {
    return Scenarios.findOne(this.params._id);
  },

  action: function () {
    this.render();
  }
});
