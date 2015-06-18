/**
 * Created by bshen on 08/05/15.
 */

'use strict';

angular
    .module('travlrapp.controllers.movies', [])
    .controller('moviesCtrl', [
        '$scope', '$http',
        function($scope, $http) {

            $scope.movies = [];

            /* Get Movies */
            function getMovies() {
                $http.get(appConfig.appUrl + '/movie?limit=10').then(function(response) {
                    $scope.movies = response.data;
                }, function(err){
                    return console.log(err);
                });
            }

            getMovies();

        }

    ]);
/**
 * Created by bshen on 08/05/15.
 */
'use strict';

angular
    .module('travlrapp.controllers.header', [])
    .controller('headerCtrl', [
        '$scope',
        function($scope) {
            console.log('headerCtrl');

        }

    ]);

/**
 * Created by bshen on 09/05/15.
 */
appConfig = {
    appUrl: 'http://91.121.204.52:1337'
};

angular.module('travlrapp', [
  'ui.router',
  'travlrapp.controllers.movies',
  'travlrapp.controllers.header'
]);

/**
 * Created by bshen on 08/05/15.
 */
'use strict';

/**
 * Config for the router
 */
angular.module('travlrapp')
    .run(
    [
        '$rootScope',
        function ($rootScope) {

            console.log('here');
        }
    ]
)
    .config(
    [
        '$stateProvider', '$urlRouterProvider', '$httpProvider',
        function ($stateProvider, $urlRouterProvider, $httpProvider) {

            $httpProvider.defaults.useXDomain = true;
            delete $httpProvider.defaults.headers.common['X-Requested-With'];

            // Send to login if the URL was not found
            $urlRouterProvider.otherwise("/home");


            $stateProvider
                .state('home', {
                    url: '/home',
                    controller: 'moviesCtrl',
                    templateUrl: '/views/movies.html'
                });

        }
    ]
);
(function(module) {
try {
  module = angular.module('travlrapp');
} catch (e) {
  module = angular.module('travlrapp', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/travlrapp/views/movies.html',
    '<div class="wrapper"><div class="row"><div class="browse-movie-wrap col-xs-10 col-sm-2 col-md-2 col-lg-2 m-t" data-ng-repeat="movie in movies"><a href="https://yts.to/movie/creep-van-2012" class="browse-movie-link"><figure><img class="img-responsive" src="https://s.ynet.io/assets/images/movies/creep_van_2012/medium-cover.jpg" alt="Creep Van (2012) download"><figcaption class="hidden-xs hidden-sm"><span class="icon-star"></span><h4 class="rating">{{ movie.rating }} / 10</h4><h4>Horreur</h4><span class="button-green-download-big">Voir Détails</span></figcaption></figure></a><div class="browse-movie-bottom"><a href="https://yts.to/movie/creep-van-2012" class="browse-movie-title">{{ movie.title }}</a><div class="browse-movie-year">{{ movie.year }}</div></div></div></div></div>');
}]);
})();
