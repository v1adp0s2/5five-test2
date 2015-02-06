/*****************************************************************************/
/* DisplaysIndex Publish Functions
/*****************************************************************************/

Meteor.publish('displays_index', function () {
  return Displays.find();
});
