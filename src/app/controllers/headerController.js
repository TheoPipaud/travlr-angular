/**
 * Created by bshen on 08/05/15.
 */
'use strict';

angular
    .module('moviesapp.controllers.header', [])
    .controller('headerCtrl', [
        '$scope',
        function($scope) {
        	$scope.showMenuNav = function(){
        		$('#nav-bar .my-account').addClass('active');
        	};
        	$scope.hideMenuNav = function(){
        		$('#nav-bar .my-account').removeClass('active');
        	};
        }
    ]);
