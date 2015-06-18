/**
 * Created by bshen on 14/06/15.
 */
'use strict';

angular
  .module('travlrapp.controllers.chat', [])
  .controller('chatCtrl', [
    '$scope', '$http', '$stateParams', '$sailsSocket',
    function($scope, $http, $stateParams, $sailsSocket) {



      $scope.messages = [];
      $scope.message = {
        content: ''
      };

      $scope.sendMsg = function() {

        $http.post(config.api_url + '/message', {
          room: $stateParams.id,
          to: $stateParams.to,
          content: $scope.message.content,
          from: $scope.$parent.user_id
        }).then(function() {
          $scope.message.content = '';
        }, function(err) {
          $scope.message.content = '';
        });

      };

      $sailsSocket.post(config.api_url + '/post/subscribe', {
        postId: $stateParams.id
      }).then(function(response) {
        return;
      }, function(err) {
        return console.log(err);
      });


      $sailsSocket.subscribe('message', function(event) {
        console.log('got msg');
          $scope.messages.push(event);
      });





    	
    }
  ]);
