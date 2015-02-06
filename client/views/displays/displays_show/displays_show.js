/*****************************************************************************/
/* DisplaysShow: Event Handlers and Helpersss .js*/
/*****************************************************************************/
var setTimeoutSlide = function (interval) {
  var display = Displays.findOne();

  if (Session.get('timeoutId')) {
    Meteor.clearTimeout(Session.get('timeoutId'));
  }
  Session.set('timeoutId', Meteor.setTimeout(function () { moveNext(display); }, interval));
};

var moveNext = function (display) {
  var scenario = Scenarios.findOne({ _id: display.scenarioId });
  var slide = Slides.findOne({ scenarioId: display.scenarioId, _id: display.slideId });

  var nextPosition = slide.position + 1;
  var count = Slides.find({ scenarioId: display.scenarioId }).count();
  if (nextPosition > count) {
    nextPosition = 1;
  }

  var nextSlide = Slides.findOne({ scenarioId: display.scenarioId, position: nextPosition });

  Displays.update({ _id: display._id }, {
    $set: { slideId: nextSlide._id }
  });

  // restrict to the logged in client to move the side
  if (Meteor.user() && display.timeout) {
    setTimeoutSlide(display.timeout);
  }
};

Template.DisplaysShow.events({
  'click #previous-slide': function (e) {
    e.preventDefault();

    var scenario = Scenarios.findOne({ _id: this.scenarioId });
    var slide = Slides.findOne({ scenarioId: this.scenarioId, _id: this.slideId });

    var prevPosition = slide.position - 1;
    if (prevPosition <= 0) {
      prevPosition = Slides.find({ scenarioId: this.scenarioId }).count();
    }

    var prevSlide = Slides.findOne({ scenarioId: this.scenarioId, position: prevPosition });

    Displays.update({ _id: this._id }, {
      $set: { slideId: prevSlide._id }
    });

    // restrict to the logged in client to move the side
    // question is if this step actually resets the timer
    if (Meteor.user() && display.timeout) {
      setTimeoutSlide(display.timeout);
    }
  },

  'click #next-slide': function (e) {
    e.preventDefault();

    moveNext(this);
  },

  'click #divNEXT': function (e) {
    e.preventDefault();

    moveNext(this);
  },

  'click #image-zoom': function (e, tmpl) {
    e.preventDefault();

    if (!this.zoom || this.zoom === '100%') {
      Displays.update({ _id: this._id }, { $set: { zoom: '125%' } });
    } else {
      Displays.update({ _id: this._id }, { $set: { zoom: '100%' } });
    }
  },

  'click #display-close': function (e) {
    e.preventDefault();

    Router.go('displays.index');
  }
});

Template.DisplaysShow.helpers({
  zoomStyle: function () {
    if (this.zoom) {
      return this.zoom;
    } else {
      return '100%';
    }
  },

  zoomLevel: function () {
    if (!this.zoom || this.zoom === '100%') {
      return 'full';
    } else {
      return 'small';
    }
  },

  imageURL: function () {
    var scenario = Scenarios.findOne({ _id: this.scenarioId });
    var slide = {};
    if (this.slideId) {
      slide = Slides.findOne({ scenarioId: this.scenarioId, _id: this.slideId });
    } else {
      slide = Slides.findOne({ scenarioId: this.scenarioId, position: 1 });
      if (slide) {
        Displays.update({ _id: this._id }, {
          $set: { slideId: slide._id }
        });
      }
    }

    if (slide && slide.backgroundImage) {
      var img = Images.findOne(slide.backgroundImage._id);
      if (img) {
        return img.url();
      } else {
        return null;
      }
    } else {
      return null;
    }
  }
});

/*****************************************************************************/
/* DisplaysShow: Lifecycle Hooks */
/*****************************************************************************/
Template.DisplaysShow.created = function () {
};

Template.DisplaysShow.rendered = function () {
};

Template.DisplaysShow.destroyed = function () {
};
