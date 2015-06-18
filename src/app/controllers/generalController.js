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
      $scope.user_register = {};
      $scope.me = {};
      $scope.currentActivity = {
        values : {}
      };

      $scope.logout = function(){
      	localStorage.removeItem("travlr_token");
      	$state.go('home');
        $scope.isLogged = false;
      };

      $scope.login = function() {
      	$http
      		.post(config.api_url+'/auth/login', $scope.user)
      		.then(function(data){
      			localStorage.travlr_token = data.data.token;
              $scope.isLogged = true;
              getMyself();
                //window.location.href = '#/dashboard';
                $state.go('dashboard');

      		}, function(err){
      			console.log(err);
      		})
      };

      $scope.register = function() {
        $http
          .post(config.api_url+'/user', $scope.user_register)
          .then(function(data){
            console.log($scope.user_register);
            $http
              .post(config.api_url+'/auth/login', $scope.user_register)
              .then(function(data){
                localStorage.travlr_token = data.data.token;
                getMyself();
                $scope.isLogged = true;
                // $state.go('dashboard');
                
                window.location.href = '#/dashboard';
                location.reload();
              }, function(err){
                console.log(err);
              })
          }, function(err){
            console.log(err);
          })
      };
      
      if(localStorage.travlr_token){
      	$scope.isLogged = true;
        getMyself();
      }else{
      	$scope.isLogged = false;
      	console.log('not logged');
      }

      function getMyself(){
        $scope.user_id = JSON.parse(localStorage.travlr_token).id;
        $http
          .get(config.api_url+'/user/'+$scope.user_id)
          .then(function(response){
            console.log(response.data);
            $scope.me = response.data;
          }, function(err){
            console.log(err);
          });
      }
      $scope.openPopup = function(type){
        var href = '#popup-'+type;
        // if(!popup.is_opened){
        popup.update(href, function(){
          popup.open();
        });
      }

      $scope.closePopup = function(event){
        popup.close();
      }

      var environment = {
        width: $(window).width(),
        height: $(window).height(),
        scroll: $(window).scrollTop()
      }

      $(window).resize(function(){
        environment.width = $(window).width();
        environment.height = $(window).height();
      });

      var popup = {
        is_opened: false,
        transition_duration: 200,
        open: function(){
          console.log('open');
          popup.is_opened = true;
          $('.popup-container').css({display:"table"}).stop().animate({opacity:1}, popup.transition_duration, function(){
            $('.popup-container .wrapper>div').stop().animate({"margin-top":"0px", "opacity": 1}, popup.transition_duration);
          });
          $('body').addClass('no-scroll');
        },
        close: function(reopen, callback){
          console.log('close');
          popup.is_opened = false;
          $('.popup-container .wrapper>div').stop().animate({"margin-top":"60px", "opacity": 0}, popup.transition_duration, function(){
            if(!reopen){
              $('.popup-container').stop().animate({opacity:0}, popup.transition_duration, function(){
                $('.popup-container').css({display:"none"});
                if(callback){
                  callback();
                }
              });
            }else{
              if(callback){
                callback();
              }
            }
            $('body').removeClass('no-scroll');
          });
        },
        update: function(href, callback){
          var temp_html = $(href).html();
          $('.popup-container .wrapper>div').css('display','none');
          $('.popup-container '+href).css('display','block');
          callback();
        }
      }

      // $('.popup-container').click(function(e){
      //   if(e.target.outerHTML.indexOf('popup-container')>0){
      //     popup.close(false);
      //   }
      // });

    }
  ]);