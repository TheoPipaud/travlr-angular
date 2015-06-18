/**
 * Created by bshen on 08/05/15.
 */

'use strict';

angular
    .module('moviesapp.controllers.movies', [])
    .controller('homeCtrl', [
        '$scope', '$http',
        function($scope, $http) {

            $scope.posts_feed = [];
            
            $http.get(config.api_url+'/post/feed').then(function(response) {
                console.log(response.data);
				$scope.posts_feed = response.data;
			}, function(err) {
				return console.log(err);
			});

        }

    ]);

