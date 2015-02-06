/*****************************************************************************/
/* Slides Methods */
/*****************************************************************************/

Meteor.methods({
  createSlide: function (scenarioId) {
    var count = Slides.find({ scenarioId: scenarioId }).count();

    var slide = {
      scenarioId: scenarioId,
      first: count === 0,
      last: true,
      position: count + 1
    };

    // update scenario with slidesCount;
    Scenarios.update({ _id: scenarioId }, {
        $inc: { slidesCount: 1 }
      }
    );

    Slides.update({ scenarioId: scenarioId, last: true }, {
      $set: { last: false }
    });

    Slides.insert(slide);
  },

  moveLeft: function (id) {
    var slide = Slides.findOne(id);

    var leftSlide = Slides.findOne({
      scenarioId: slide.scenarioId,
      position: slide.position - 1
    });

    Slides.update({ _id: slide._id }, {
      $set: {
        position: leftSlide.position,
        first: leftSlide.first,
        last: leftSlide.last
      }
    });

    Slides.update({ _id: leftSlide._id },{
      $set: {
        position: slide.position,
        first: slide.first,
        last: slide.last
      }
    });
  },

  moveRight: function (id) {
    var slide = Slides.findOne(id);

    var rightSlide = Slides.findOne({
      scenarioId: slide.scenarioId,
      position: slide.position + 1
    });

    Slides.update({ _id: slide._id }, {
      $set: {
        position: rightSlide.position,
        first: rightSlide.first,
        last: rightSlide.last
      }
    });

    Slides.update({ _id: rightSlide._id },{
      $set: {
        position: slide.position,
        first: slide.first,
        last: slide.last
      }
    });
  },

  removeSlide: function (id) {
    var slide = Slides.findOne(id);

    Slides.update({
      scenarioId: slide.scenarioId,
      position: { $gt: slide.position }
    }, {
      $inc: { position: -1 }
    }, {
      multi: true
    });

    Slides.remove({_id: id});

    Scenarios.update({ _id: slide.scenarioId }, {
      $inc: { slidesCount: -1 }
    });
  }
});
