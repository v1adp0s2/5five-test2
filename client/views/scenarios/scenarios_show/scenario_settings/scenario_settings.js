/*****************************************************************************/
/* ScenarioSettings: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.ScenarioSettings.events({
  'submit #scenario-settings-modal': function (e, tmpl) {
    e.preventDefault();

    var title = tmpl.find('#title').value;

    Scenarios.update({ _id: this._id }, {
      $set: { title: title }
    });

    Alerts.set('Scenario settings saved!', 'success');

    $('#scenario-settings-modal').modal('hide');
  }
});

Template.ScenarioSettings.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* ScenarioSettings: Lifecycle Hooks */
/*****************************************************************************/
Template.ScenarioSettings.created = function () {
};

Template.ScenarioSettings.rendered = function () {
};

Template.ScenarioSettings.destroyed = function () {
};
