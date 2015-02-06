/*****************************************************************************/
/* SignUp: Event Handlers and Helpersss .js*/
/*****************************************************************************/
var shakeWell = function () {
  $('.sign-up-well').addClass('animated shake');
  $('.sign-up-well').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
    $('.sign-up-well').removeClass('animated shake');
  });
};

Template.SignUp.events({
  'submit #sign-up-form': function (e, tmpl) {
    e.preventDefault();

    var email = tmpl.find('#email').value;
    var password = tmpl.find('#password').value;
    var password_confirmation = tmpl.find('#password-confirmation').value;

    if (password === password_confirmation) {
      Accounts.createUser({ email: email, password: password }, function (error) {
        if (error) {
          shakeWell();
          Alerts.set(error.reason);
        } else {
          Alerts.set('User account created!', 'success');
        }
      });
    } else {
      shakeWell();
      Alerts.set('Password confirmation missmatch!');
    }
  },

  'click #sign-in': function (e) {
    Session.set('signUpAction', false);
  }
});

Template.SignUp.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* SignUp: Lifecycle Hooks */
/*****************************************************************************/
Template.SignUp.created = function () {
};

Template.SignUp.rendered = function () {
};

Template.SignUp.destroyed = function () {
};
