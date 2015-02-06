
/*****************************************************************************/
/* SlidesNew: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.SlidesNew.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
  'click #set-background-color': function (e, tmp) {
    e.preventDefault();

    $('.canvas-area').css('background-color', 'rgba(0, 255, 0, 0.5');
  },

  'click #hide-grid': function (e, tmp) {
    e.preventDefault();

    $('.canvas-area').css('background-image', 'none');
  },

  'click #show-grid': function (e, tmp) {
    e.preventDefault();

    $('.canvas-area').css('background-image', 'url(/images/grid.png)');
    $('.canvas-area').css('opacity', '0.5');
  }
});

Template.SlidesNew.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* SlidesNew: Lifecycle Hooks */
/*****************************************************************************/
Template.SlidesNew.created = function () {
  $(window).resize(function () {
    var canvasArea = $('.canvas-area').width();
    $('.canvas-area').height(canvasArea);
  });
};

Template.SlidesNew.rendered = function () {
  var canvasArea = $('.canvas-area').width();
  $('.canvas-area').height(canvasArea);
};

Template.SlidesNew.destroyed = function () {
  $(window).off('resize');
};


