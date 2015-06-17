/**
 * Created by bshen on 14/06/15.
 */
'use strict';

angular
  .module('moviesapp.controllers.general', [])
  .controller('generalCtrl', [
    '$scope', '$state', '$http',
    function($scope, $state, $http) {
      $scope.isLogged = false;
      $scope.user = {};
      $scope.me = {};
      $scope.currentActivity = {
        values : {}
      };

      $scope.logout = function(){
      	localStorage.removeItem("travlr_token");
      	$scope.isLogged = false;
      	console.log('redirect');
      	$state.go('home');
      };

      $scope.login = function() {
      	$http
      		.post(config.api_url+'/auth/login', $scope.user)
      		.then(function(data){
      			localStorage.travlr_token = data.data.token;
            $scope.isLogged = true;
      			$state.go('dashboard');
      		}, function(err){
      			console.log(err);
      		})
      };
      
      if(localStorage.travlr_token){
      	$scope.isLogged = true;
        $scope.user_id = JSON.parse(localStorage.travlr_token).id;
      	console.log('logged');
      }else{
      	$scope.isLogged = false;
      	console.log('not logged');
      }


      $http
        .get(config.api_url+'/user/'+$scope.user_id)
        .then(function(response){
          $scope.me = response.data;
        }, function(err){
          console.log(err);
        });

    }
  ]);