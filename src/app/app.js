
angular.module('moviesapp', [
  'ui.router',
  'moviesapp.controllers.movies',
  'moviesapp.controllers.header',
  'infinite-scroll',
  'react',
  'moviesapp.controllers.login',
  'QuickList',
  'moviesapp.controllers.register',
  'moviesapp.controllers.dashboard',
  'moviesapp.controllers.singledashboard',
  'moviesapp.controllers.activity',
  'moviesapp.controllers.general',
  'app.interceptors.auth'
]);
