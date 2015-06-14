/**
 * Created by bshen on 14/06/15.
 */
'use strict';

angular
  .module('moviesapp.controllers.login', [])
  .controller('loginCtrl', [
    '$scope', '$http', '$state',
    function($scope, $http, $state) {

		$scope.user = {};

        $scope.login = function() {
        	$http
        		.post('http://travlr.scalingo.io/auth/login', $scope.user)
        		.then(function(data){
        			localStorage.token = data.data.token;
        			$state.go('dashboard');
        		}, function(err){
        			console.log(err);
        		})
        }
    }
  ]);