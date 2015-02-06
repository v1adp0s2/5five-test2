/*****************************************************************************/
/* DisplaysShow Publish Functions
/*****************************************************************************/

Meteor.publish('displays_show', function (_id) {
  var display = Displays.findOne({ _id: _id });

  return [
    Displays.find(display._id),
    Scenarios.find(display.scenarioId),
    Slides.find(),
    Images.find()
  ];
});
