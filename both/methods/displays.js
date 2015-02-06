/*****************************************************************************/
/* Displays Methods */
/*****************************************************************************/

Meteor.methods({
  removeDisplay: function (id) {
    var scenarios = Scenarios.find({ displayId: id });
    if (scenarios.count()) {
      throw new Meteor.Error(422, 'Please de-attach scenario first!');
    }
    Displays.remove({ _id: id });
  }
});
