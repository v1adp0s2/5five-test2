SlidesNewController = RouteController.extend({
  waitOn: function () {
    Meteor.subscribe('slides_new', this.params._scenarioId);
  },

  data: function () {
    return Scenarios.findOne(this.params._scenarioId);
  },

  action: function () {
    this.render();
  }
});
