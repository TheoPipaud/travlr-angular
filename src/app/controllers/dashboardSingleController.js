/**
 * Created by bshen on 14/06/15.
 */
'use strict';

angular
  .module('moviesapp.controllers.singledashboard', [])
  .controller('dashboardSingleCtrl', [
    '$scope', '$http', '$stateParams',
    function($scope, $http, $stateParams) {
    	$scope.activity = [];
      $http.get(config.api_url+'/post/'+$stateParams.id).then(function(response) {
        $scope.activity = response.data;
      }, function(err) {
        return console.log(err);
      });
    }
  ]);
