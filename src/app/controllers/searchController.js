'use strict';

angular
    .module('travlrapp.controllers.search', [])
    .controller('searchCtrl', [
        '$scope', '$http',
        function($scope, $http) {

            $scope.noresults = false;
            console.log($scope.$parent.search_params);
            $scope.search = function(){
                $http.post(config.api_url+'/search/index', $scope.$parent.search_params).then(function(response) {
                    if(response.data.length == 0){
                        $scope.noresults = true;
                    }else{
                        $scope.noresults = false;
                    }
                    $scope.search_posts = response.data;
                }, function(err) {
                    return console.log(err);
                });
            }

            $scope.search();
        }
    ]);

