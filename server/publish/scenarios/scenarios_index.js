/*****************************************************************************/
/* ScenariosIndex Publish Functions
/*****************************************************************************/

Meteor.publish('scenarios_index', function () {
  // you can remove this if you return a cursor
  // this.ready();
  return [
    Scenarios.find(),
    Displays.find({scenarioId: null})
  ];
});
