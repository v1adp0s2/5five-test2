/*****************************************************************************/
/* SignIn: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.SignIn.events({
  'submit #sign-in-form': function (e, tmpl) {
    e.preventDefault();

    var email = tmpl.find('#email').value;
    var password = tmpl.find('#password').value;

    Meteor.loginWithPassword(email, password, function (error) {
      if (error) {
        $('.sign-in-well').addClass('animated shake');
        $('.sign-in-well').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
          $('.sign-in-well').removeClass('animated shake');
        });
        Alerts.set('Email & password missmatch!');
      } else {
        Alerts.set('You are now signed in!', 'success');
      }
    });
  },

  'click #sign-up': function (e) {
    e.preventDefault();

    Session.set('signUpAction', true);
  }
});

Template.SignIn.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* SignIn: Lifecycle Hooks */
/*****************************************************************************/
Template.SignIn.created = function () {
};

Template.SignIn.rendered = function () {
};

Template.SignIn.destroyed = function () {
};
