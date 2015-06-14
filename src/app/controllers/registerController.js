'use strict';

angular
    .module('moviesapp.controllers.register', [])
    .controller('registerCtrl', [
        '$scope', '$http',
        function($scope, $http) {

        	$scope.user = {};

        	$scope.register = function() {
        		$http
        			.post('http://travlr.scalingo.io/user', $scope.user)
        			.then(function(data){
        				console.log(data.data.token);
        				localStorage.token = data.data.token;
        			}, function(err){
        				console.log(err);
        			})

        	}
        }
    ]);

