
angular.module('moviesapp', [
  'ui.router',
  'sails.io',
  'moviesapp.controllers.movies',
  'moviesapp.controllers.header',
  'moviesapp.controllers.login',
  'moviesapp.controllers.register',
  'moviesapp.controllers.dashboard',
  'moviesapp.controllers.singledashboard',
  'moviesapp.controllers.activity',
  'moviesapp.controllers.general',
  'moviesapp.controllers.chat',
  'moviesapp.controllers.search',
  'moviesapp.controllers.sidebar',
  'app.interceptors.auth'
]);
