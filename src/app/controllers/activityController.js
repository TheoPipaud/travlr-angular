/**
 * Created by bshen on 14/06/15.
 */
'use strict';

angular
  .module('travlrapp.controllers.activity', [])
  .controller('activityCtrl', [
    '$scope', '$http', '$state',
    function($scope, $http, $state) {
    	$scope.activity = {};
        $scope.categories = {};
        if(!$scope.$parent.currentActivity.state){
            $scope.$parent.currentActivity.state = 0;
            $state.go('activity.detail');
        }
        $http
            .get(config.api_url+'/category', $scope.categories)
            .then(function(data){
                $scope.categories = data.data;
            }, function(err){
                console.log(err);
            })
        $scope.onGuidebarClick = function(url, id){
            console.log($scope.$parent.currentActivity.state);
            if($scope.$parent.currentActivity.state >= (id-1)){
                $state.go(url);
            }
        };
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
                
                if($scope.$parent.currentActivity.values){
                    $scope.$parent.currentActivity.values = $.extend($scope.$parent.currentActivity.values, $scope.activity);     
                }else{
                    $scope.$parent.currentActivity.values = $scope.activity;
                }
                if(id == 1){
                    var selected_categ = [];
                    $.each($scope.categories, function(id, elem){
                        if(elem.selected){
                            selected_categ.push(elem.id);
                        }
                    });
                    $scope.$parent.currentActivity.values.categories = selected_categ;
                }
                if(id == 4){
                    $scope.validateActivity();
                }else{
                    $state.go(url);
                }
            }
        };
        $scope.validateActivity = function(){
            $http
                .post(config.api_url+'/post', $scope.$parent.currentActivity.values)
                .then(function(data){
                    $scope.$parent.currentActivity.values = {};
                    $state.go('dashboard');
                }, function(err){
                    alert('Veuillez remplir correctement tous les champs !');
                })
        };
        $scope.initInput = function(name){
            console.log($scope.$parent.currentActivity);
            if($scope.$parent.currentActivity.values[name]){
                $scope.activity[name] = $scope.$parent.currentActivity.values[name];
            }
        }
    }  
]);
