'use strict';

angular
    .module('moviesapp.controllers.sidebar', [])
    .controller('sidebarCtrl', [
        '$scope', '$http',
        function($scope, $http) {

        	$scope.posts_perso = [];
           
            $http
              .get(config.api_url + '/post')
              .then(function(response) {
                $scope.posts_perso = response.data;
              }, function(err) {
                return console.log(err);
              });
            }
    ]);

