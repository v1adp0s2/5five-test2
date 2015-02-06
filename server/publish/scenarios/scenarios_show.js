/*****************************************************************************/
/* ScenariosShow Publish Functions
 /*****************************************************************************/

Meteor.publish('scenarios_show', function (_id) {
  // you can remove this if you return a cursor
  // this.ready();
  return [
    Scenarios.find(_id),
    Slides.find({scenarioId: _id}),
    Images.find()
  ];
});
