'use strict';

angular
    .module('moviesapp.controllers.search', [])
    .controller('searchCtrl', [
        '$scope', '$http',
        function($scope, $http) {

        	$scope.search_posts = {};

        	$http.get(config.api_url+'/post/feed').then(function(response) {
				$scope.search_posts = response.data;
			}, function(err) {
				return console.log(err);
			});
        }
    ]);

