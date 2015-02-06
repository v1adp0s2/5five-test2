/*****************************************************************************/
/* ScenariosShow: Event Handlers and Helpers .js*/
/*****************************************************************************/
Template.ScenariosShow.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */

});

Template.ScenariosShow.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
  slides: function () {
    return Slides.find({}, {sort: { position: 1 }});
  },

  slidesCount: function () {
    return Slides.find().count();
  }
});

/*****************************************************************************/
/* ScenariosShow: Lifecycle Hooks */
/*****************************************************************************/
Template.ScenariosShow.created = function () {
  $(window).resize(function () {
    var boxSize = $('.page-box').width();
    $('.page-box').height(boxSize);
  });
};

Template.ScenariosShow.rendered = function () {
  var boxSize = $('.page-box').width();
  $('.page-box').height(boxSize);
};

Template.ScenariosShow.destroyed = function () {
  $(window).off('resize');
};
