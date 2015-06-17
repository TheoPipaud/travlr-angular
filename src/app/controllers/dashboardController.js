/**
 * Created by bshen on 14/06/15.
 */
'use strict';

angular
  .module('moviesapp.controllers.dashboard', [])
  .controller('dashboardCtrl', [
    '$scope', '$http',
    function($scope, $http) {

        $scope.isOpen = false;

    	$scope.activities = [];

      console.log('dashboardCtrl');

    	$http.get(config.api_url + '/post').then(function(response) {
    		console.log('response', response.data);
        $scope.posts = response.data;
      }, function(err) {
        return console.log(err);
      });

    }
  ]);
