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
        if(!$scope.$parent.currentActivity.state){
            $scope.$parent.currentActivity.state = 0;
            console.log('init');
            $state.go('activity.detail');
        }
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
        $scope.onGuidebarClick = function(url, id){
            console.log($scope.$parent.currentActivity.state);
            if($scope.$parent.currentActivity.state >= (id-1)){
                $state.go(url);
            }
        }
        $scope.submitPart = function(url, id){
            var valid = true;
            if(valid){
                if(parseInt(id)>$scope.$parent.currentActivity.state){
                    $scope.$parent.currentActivity.state = parseInt(id);
                }
                $('.guidebar>a:nth-child('+id+')').addClass('valid');
                $('.guidebar>a:nth-child('+(parseInt(id)+1)+')').addClass('active');
                $('.guidebar #bar').removeClass().addClass('state-'+(parseInt(id)+1));
                $('.guidebar .dots>span:nth-child('+(parseInt(id)+1)+')').addClass('active');
                $state.go(url);
            }
        }
    }  
]);
