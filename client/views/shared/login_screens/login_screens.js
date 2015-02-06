/*****************************************************************************/
/* LoginScreens: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.LoginScreens.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.LoginScreens.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
  signUpAction: function() {
    return Session.get('signUpAction');
  }
});

/*****************************************************************************/
/* LoginScreens: Lifecycle Hooks */
/*****************************************************************************/
Template.LoginScreens.created = function () {
};

Template.LoginScreens.rendered = function () {
  Session.set('signUpAction', undefined);
};

Template.LoginScreens.destroyed = function () {
};
