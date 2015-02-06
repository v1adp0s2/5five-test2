
/*****************************************************************************/
/* ScenariosNew: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.ScenariosNew.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
  'click [name="new_scenario"]': function (e, tmpl) {
    e.preventDefault();

    var scenario = {
      title: tmpl.find('[name="title"]').value
    };

    // $('#myModal').hide();

    Meteor.call('scenario', scenario, function(error, id) {
      if (error) {
        Alerts.set(error.reason, 'danger');
        if (error.error === 302) {
          Router.go('scenarios.show', { _id: errors.details });
        }
      } else {
        Router.go('scenarios.show', { _id: id });
      }
    });

    // var form = tmpl.find('form');
    // form.reset();

    // $('#myModal').modal('hide');
  }
});

Template.ScenariosNew.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* ScenariosNew: Lifecycle Hooks */
/*****************************************************************************/
Template.ScenariosNew.created = function () {
};

Template.ScenariosNew.rendered = function () {
};

Template.ScenariosNew.destroyed = function () {
};


