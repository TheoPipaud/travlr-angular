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
        console.log('login');
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

      $http.get(config.api_url + '/post').then(function(response) {
        $scope.posts = response.data;
      }, function(err) {
        return console.log(err);
      });

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
          $('.popup-container .wrapper>div').stop().animate({"margin-top":"100px", "opacity": 0}, popup.transition_duration, function(){
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
          console.log('update');
          var temp_html = $(href).html();
          $('.popup-container .wrapper>div').html(temp_html).removeClass().addClass(href.replace('#',''));
          cboxAction();
          callback();
        }
      }


      function cboxAction(){
        $(".cbox-html").unbind("click").bind("click", function(e){
          e.preventDefault();
          var href = $(this).attr('href');
          if(!popup.is_opened){
            popup.update(href, function(){
              popup.open();
            });
          }else{
            popup.close(true, function(){
              popup.update(href, function(){
                popup.open();
              });
            });
          }
        }); 
      }

      // $('.popup-container').click(function(e){
      //   if(e.target.outerHTML.indexOf('popup-container')>0){
      //     popup.close(false);
      //   }
      // });

    }
  ]);