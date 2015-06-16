/**
 * Created by bshen on 08/05/15.
 */
'use strict';

angular
    .module('moviesapp.controllers.header', [])
    .controller('headerCtrl', [
        '$scope',
        function($scope) {
        	$scope.showNavMenu = function(){
        		console.log('hover');
        		$('#nav-bar .my-account').addClass('active');
        	}
        }
    ]);
