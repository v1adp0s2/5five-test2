ScenariosIndexController = RouteController.extend({
  waitOn: function () {
    return Meteor.subscribe('scenarios_index');
    //Meteor.subscribe('displays_index');
  },

  data: function () {
  },

  action: function () {
    this.render();
  }
});
