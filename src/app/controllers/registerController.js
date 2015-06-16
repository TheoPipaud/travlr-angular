'use strict';

angular
    .module('moviesapp.controllers.register', [])
    .controller('registerCtrl', [
        '$scope', '$http',
        function($scope, $http) {

        	$scope.user = {};

        	$scope.register = function() {
        		$http
        			.post(config.api_url+'/user', $scope.user)
        			.then(function(data){
        				localStorage.travlr_token = data.data.token;
        			}, function(err){
        				console.log(err);
        			})

        	}
        }
    ]);

