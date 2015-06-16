/**
 * Created by bshen on 14/06/15.
 */
'use strict';

angular
  .module('moviesapp.controllers.activity', [])
  .controller('activityCtrl', [
    '$scope', '$http', '$state',
    function($scope, $http, $state) {
    	$scope.activity = {};
    	$scope.createActivity = function() {
    		console.log($scope.activity);
        	$http
        		.post(config.api_url+'/post', $scope.activity)
        		.then(function(data){
        			$state.go('dashboard');
        		}, function(err){
        			console.log(err);
        		})
        }
    }
]);
