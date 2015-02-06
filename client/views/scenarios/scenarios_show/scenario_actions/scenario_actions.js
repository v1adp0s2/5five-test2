/*****************************************************************************/
/* ScenarioActions: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.ScenarioActions.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
  'click #delete-scenario': function (e) {
    e.preventDefault();

    if (this.displayId) {
      Alerts.set('Detach display first!');
    } else {
      Scenarios.remove({ _id: this._id });
      Router.go('scenarios.index');
      Alerts.set('Scenario deleted!', 'success');
    }
  }
});

Template.ScenarioActions.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* ScenarioActions: Lifecycle Hooks */
/*****************************************************************************/
Template.ScenarioActions.created = function () {
};

Template.ScenarioActions.rendered = function () {
};

Template.ScenarioActions.destroyed = function () {
};
