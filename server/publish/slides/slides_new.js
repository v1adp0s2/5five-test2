/*****************************************************************************/
/* SlidesNew Publish Functions
/*****************************************************************************/

Meteor.publish('slides_new', function (scenarioId) {
  return [
    Scenarios.find(scenarioId),
    Slides.find()
  ];
});
