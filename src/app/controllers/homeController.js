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
            console.log('homeController');


        }

    ]);

