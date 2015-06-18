/**
 * Created by bshen on 08/05/15.
 */

'use strict';

angular
    .module('travlrapp.controllers.movies', [])
    .controller('homeCtrl', [
        '$scope', '$http', '$state',
        function($scope, $http, $state) {

            $scope.posts_feed = [];
            
            $http.get(config.api_url+'/post/feed?populate=owner').then(function(response) {
                console.log(response.data);
				$scope.posts_feed = response.data;
			}, function(err) {
				return console.log(err);
			});

            $scope.onSearch = function(){
                $state.go('search');
            }

        }

    ]);

