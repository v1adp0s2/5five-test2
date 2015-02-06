
/*****************************************************************************/
/* DisplaysIndex: Event Handlers and Helpers .js*/
/*****************************************************************************/
Template.DisplaysIndex.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
  'submit .display-new-title': function (e, tmpl) {
    e.preventDefault();

    console.log($(e.target));

    var display = {
      title: tmpl.find('[name="display_new_title"]').value
    };

    Displays.insert(display); // todo: move this to a method

    var form = tmpl.find('form.display-new-title');
    form.reset();
  },

  'focus .display-new-title': function (e, tmpl) {
    $('.display-edit-form').hide();
    $('.display-title-content').fadeIn();
  },

  'mouseleave td.display-title-cell': function (e, tmpl) {
    $('.remove-display').hide();
  }

});

Template.DisplaysIndex.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
  displays: function () {
    return Displays.find({}, { sort: { title: 1 } });
  }
});

/*****************************************************************************/
/* DisplaysIndex: Lifecycle Hooks */
/*****************************************************************************/
Template.DisplaysIndex.created = function () {
};

Template.DisplaysIndex.rendered = function () {
  Session.set('activeMenu', 'displays');
};

Template.DisplaysIndex.destroyed = function () {
};


