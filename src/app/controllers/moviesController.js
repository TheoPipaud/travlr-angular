/**
 * Created by bshen on 08/05/15.
 */

'use strict';

angular
    .module('moviesapp.controllers.movies', [])
    .controller('moviesCtrl', [
        '$scope', '$http',
        function($scope, $http) {

            $scope.movies = [];


            /* Get Movies */
            function getMovies() {
                $http.get('http://localhost:3000/assets/data.json').then(function(response) {
                    $scope.movies = response.data;
                }, function(err) {
                    return console.log(err);
                });
            }



            $scope.loadMore = function() {
                console.log('loading more...');
                $http.get('http://localhost:3000/assets/data.json').then(function(response) {
                    $scope.movies = $scope.movies.concat(response.data);
                }, function(err) {
                    return console.log(err);
                });
            };

            getMovies();



        }



    ]);

