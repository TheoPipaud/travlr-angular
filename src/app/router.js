/**
 * Created by bshen on 08/05/15.
 */
'use strict';

/**
 * Config for the router
 */
angular.module('moviesapp')
    .run(
    [
        '$rootScope',
        function ($rootScope) {

            console.log('here');
        }
    ]
)
    .config(
    [
        '$stateProvider', '$urlRouterProvider', '$httpProvider',
        function ($stateProvider, $urlRouterProvider, $httpProvider) {

            $httpProvider.defaults.useXDomain = true;
            delete $httpProvider.defaults.headers.common['X-Requested-With'];

            // Send to login if the URL was not found
            $urlRouterProvider.otherwise("/home");


console.log($stateProvider);
            $stateProvider
                .state('home', {
                    url: '/home',
                    controller: 'homeCtrl',
                    templateUrl: '/views/home.html'
                })
                .state('login', {
                    url: '/login',
                    controller: 'loginCtrl',
                    templateUrl: '/views/login.html'
                }).state('dashboard', {
                    url: '/dashboard',
                    controller: 'dashboardCtrl',
                    templateUrl: '/views/dashboard.html'
                })
                .state('register', {
                    url: '/register',
                    controller: 'registerCtrl',
                    templateUrl: '/views/register.html'
                });

        }
    ]
);