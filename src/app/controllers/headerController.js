/**
 * Created by bshen on 08/05/15.
 */
'use strict';

angular
    .module('moviesapp.controllers.header', [])
    .controller('headerCtrl', [
        '$scope',
        function($scope) {
        	$scope.isLogged = false;
            if(localStorage.token){
            	$scope.isLogged = true;
            	console.log('logged');
            }else{
            	$scope.isLogged = false;
            	console.log('not logged');
            }
        }
    ]);
