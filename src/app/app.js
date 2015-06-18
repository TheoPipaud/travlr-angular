
angular.module('travlrapp', [
  'ui.router',
  'sails.io',
  'travlrapp.controllers.movies',
  'travlrapp.controllers.header',
  'travlrapp.controllers.login',
  'travlrapp.controllers.register',
  'travlrapp.controllers.dashboard',
  'travlrapp.controllers.singledashboard',
  'travlrapp.controllers.activity',
  'travlrapp.controllers.general',
  'travlrapp.controllers.chat',
  'travlrapp.controllers.search',
  'travlrapp.controllers.sidebar',
  'app.interceptors.auth'
]);
