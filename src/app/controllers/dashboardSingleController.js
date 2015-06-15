/**
 * Created by bshen on 14/06/15.
 */
'use strict';

angular
  .module('moviesapp.controllers.singledashboard', [])
  .controller('dashboardSingleCtrl', [
    '$scope', '$http', '$stateParams',
    function($scope, $http, $stateParams) {
      console.log($stateParams);
    	$scope.activity = [];

      $http.get('http://travlr.scalingo.io/post/'+$stateParams.id).then(function(response) {
        console.log('response', response.data);

          $scope.activity = response.data;
 
        }, function(err) {
            return console.log(err);
        });
    }
  ]);
