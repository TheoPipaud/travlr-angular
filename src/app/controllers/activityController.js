/**
 * Created by bshen on 14/06/15.
 */
'use strict';

angular
  .module('moviesapp.controllers.activity', [])
  .controller('activityCtrl', [
    '$scope', '$http', '$state',
    function($scope, $http, $state) {
    	$scope.activity = {};
    	$scope.createActivity = function() {
    		console.log($scope.activity);
        	$http
        		.post(config.api_url+'/post', $scope.activity)
        		.then(function(data){
        			$state.go('dashboard');
        		}, function(err){
        			console.log(err);
        		})
        };
        $scope.checkCustomRadio = function(event){
            var it = angular.element(event.target);
            if(!it.hasClass('active')){
                it.closest('.radio-boxes').find('div').removeClass('active').find('input').prop("checked", false);
                it.addClass('active');
                it.find("input").prop("checked", true);
            }
            it.closest('.radio-boxes').find(input).prop("checked", false);
        };
    }  
]);
