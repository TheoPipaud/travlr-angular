/**
 * Created by bshen on 14/06/15.
 */
'use strict';

angular
  .module('moviesapp.controllers.dashboard', [])
  .controller('dashboardCtrl', [
    '$scope', '$http', '$sailsSocket',
    function($scope, $http, $sailsSocket) {
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
