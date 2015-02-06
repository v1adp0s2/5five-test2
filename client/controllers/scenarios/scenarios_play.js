ScenariosPlayController = RouteController.extend({
  waitOn: function () {
    return Meteor.subscribe('scenarios_show', this.params._scenarioId);
  },

  data: function () {
    return Scenarios.findOne(this.params._scenarioId);
  },

  action: function () {
    this.render();
  }
});
