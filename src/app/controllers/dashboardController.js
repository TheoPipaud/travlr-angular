/**
 * Created by bshen on 14/06/15.
 */
'use strict';

angular
  .module('moviesapp.controllers.dashboard', [])
  .controller('dashboardCtrl', [

    '$scope', '$http', 'post',
    function($scope, $http, post) {

        $scope.isOpen = false;
    
    	$scope.activities = [];

    	$http.get('http://travlr.scalingo.io/post').then(function(response) {
    		console.log('response', response.data);
        $scope.activities = response.data;
      }, function(err) {
        return console.log(err);
      });
      
    }
  ]);
