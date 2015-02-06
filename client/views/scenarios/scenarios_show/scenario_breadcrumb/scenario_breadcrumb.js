/*****************************************************************************/
/* ScenarioBreadcrumb: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.ScenarioBreadcrumb.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
  'click .create-slide': function (e, tmp) {
    e.preventDefault();

    var id = e.target.id;
    console.log(this._id);

    Meteor.call('createSlide', id);
  }
});

Template.ScenarioBreadcrumb.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* ScenarioBreadcrumb: Lifecycle Hooks */
/*****************************************************************************/
Template.ScenarioBreadcrumb.created = function () {
};

Template.ScenarioBreadcrumb.rendered = function () {
};

Template.ScenarioBreadcrumb.destroyed = function () {
};
