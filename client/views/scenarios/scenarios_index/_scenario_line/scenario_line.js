/*****************************************************************************/
/* ScenarioLine: Event Handlers and Helpers .js*/
/*****************************************************************************/
Template.ScenarioLine.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
  'click .display-title': function (e, tmpl) {
    e.preventDefault();

    var ids = e.target.id.split('/');

    Meteor.call('assignDisplay', ids[0], ids[1], function (error, id) {
      if (error) {
        Alerts.set(error.reason, 'danger');
      }
    });
  },

  'click .clean-scenario': function (e, tmpl) {
    e.preventDefault();

    var id = e.target.id;

    Meteor.call('cleanScenario', id, function(error, id) {
      if (error) {
        Alerts.set(error.reason, 'danger');
      }
    });
  }
});

Template.ScenarioLine.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
  scenarios: function () {
    return Scenarios.find({}, { sort: { title: 1 } });
  },
  slides: function (slidesCount) {
    if (slidesCount == 1) {
      return slidesCount + ' slide';
    } else {
      return slidesCount + ' slides';
    }
  },
  displays: function () {
    return Displays.find({}, { sort: { title: 1 } });
  }
});

/*****************************************************************************/
/* ScenarioLine: Lifecycle Hooks */
/*****************************************************************************/
Template.ScenarioLine.created = function () {
};

Template.ScenarioLine.rendered = function () {
};

Template.ScenarioLine.destroyed = function () {
};
