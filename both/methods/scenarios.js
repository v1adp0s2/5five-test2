/*****************************************************************************/
/* Scenarios Methods */
/*****************************************************************************/

Meteor.methods({
  scenario: function (scenarioAttributes) {
    var user = Meteor.user();

    // ensure the user is logged in
    if (!user) {
      throw new Meteor.Error(401, 'You need to login to post new scenarios');
    }

    // ensure the scenario set has a title
    if (!scenarioAttributes.title) {
      throw new Meteor.Error(422, 'Please fill in a title');
    }

    // pick out the whitelisted keys
    var scenario = _.extend(_.pick(scenarioAttributes, 'title'), {
      displayTitle: null,
      displayId: null,
      userId: user._id,
      author: user.emails[0].address,
      submitted: new Date().getTime(),
      slidesCount: 0
    });

    return Scenarios.insert(scenario);
  },

  assignDisplay: function (scenarioId, displayId) {
    // find scenario & display we need to update
    var scenario = Scenarios.findOne({ _id: scenarioId });
    var display = Displays.findOne({ _id: displayId });

    // cleanup
    Scenarios.update({ displayId: display._id }, {
      $set: { displayTitle: null, displayId: null }
    });

    Displays.update({ scenarioId: scenario._id }, {
      $unset: { scenarioTitle: '', scenarioId: '', slideId: '' }
    });

    // set up
    Scenarios.update({ _id: scenario._id }, {
      $set: { displayTitle: display.title, displayId: display._id }
    });

    Displays.update({ _id: display._id }, {
      $set: { scenarioTitle: scenario.title, scenarioId: scenario._id }
    });
  },

  cleanScenario: function (scenarioId) {
    // cleanup scenario
    Scenarios.update({ _id: scenarioId }, {
      $unset: { displayTitle: '', displayId: '' }
    });

    // cleanup displays if required
    Displays.update({ scenarioId: scenarioId }, {
      $unset: { scenarioTitle: '', scenarioId: '', slideId: '' }
    });
  }
});
