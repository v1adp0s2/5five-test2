/*****************************************************************************/
/* MainMenu: Event Handlers and Helpers .js*/
/*****************************************************************************/
Template.MainMenu.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.MainMenu.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
  activeMenu: function (title) {
    if (Session.get('activeMenu') === title) {
      return 'active';
    } else {
      return '';
    }
  }
});

/*****************************************************************************/
/* MainMenu: Lifecycle Hooks */
/*****************************************************************************/
Template.MainMenu.created = function () {
};

Template.MainMenu.rendered = function () {
};

Template.MainMenu.destroyed = function () {
};
