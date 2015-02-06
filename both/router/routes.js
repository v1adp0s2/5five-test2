/*****************************************************************************/
/* Client and Server Routes */
/*****************************************************************************/
Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

var redirectAfterLogin = function () {
  if (Meteor.user()) {
    if (Router.current().path === Router.path('scenarios.index')) {
      this.render('ScenariosIndex');
    } else {
      Router.go('scenarios.index');
    }
  } else {
    this.next();
  }
};

var redirectAfterLogout = function () {
  if (!(Meteor.user() || Meteor.loggingIn())) {
    if (Router.current().path === Router.path('marketing.index')) {
      this.render('MarketingIndex');
    } else {
      Router.go('marketing.index');
    }
  } else {
    this.next();
  }
};

var publicRoutes = ['marketing.index', 'displays.show'];
Router.onBeforeAction(redirectAfterLogin, { only: 'marketing.index' });
Router.onBeforeAction(redirectAfterLogout, { except: publicRoutes });

Router.onBeforeAction('loading');

Router.route('/', {
  name: 'marketing.index',
  layoutTemplate: 'MarketingLayout'
});

Router.route('/scenarios', {
  name: 'scenarios.index'
});

Router.route('/scenarios/new', {
  name: 'scenarios.new'
});

Router.route('scenarios/:_id', {
  name: 'scenarios.show'
});

Router.route('/displays', {
  name: 'displays.index'
});

Router.route('/displays/:_id', {
  name: 'displays.show',
  layoutTemplate: 'PlayLayout'
});

Router.route('/scenarios/:_scenarioId/slides/new', {
  name: 'slides.new'
});
