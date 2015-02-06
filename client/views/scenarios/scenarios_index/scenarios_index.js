
/*****************************************************************************/
/* ScenariosIndex: Event Handlers and Helpers .js*/
/*****************************************************************************/
Template.ScenariosIndex.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.ScenariosIndex.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
  scenarios: function () {
    return Scenarios.find();
  }
});

/*****************************************************************************/
/* ScenariosIndex: Lifecycle Hooks */
/*****************************************************************************/
Template.ScenariosIndex.created = function () {
};

Template.ScenariosIndex.rendered = function () {
  Session.set('activeMenu', 'scenarios');
};

Template.ScenariosIndex.destroyed = function () {
};
