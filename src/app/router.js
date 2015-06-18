/**
 * Created by bshen on 08/05/15.
 */
'use strict';

/**
 * Config for the router
 */
angular.module('travlrapp')
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
        '$stateProvider', '$urlRouterProvider', '$httpProvider', '$sailsSocketProvider',
        function ($stateProvider, $urlRouterProvider, $httpProvider, $sailsSocketProvider) {

            $httpProvider.defaults.useXDomain = true;
            delete $httpProvider.defaults.headers.common['X-Requested-With'];

            $httpProvider.interceptors.push('AuthInterceptor');
            $sailsSocketProvider.interceptors.push('AuthInterceptor');

            // Send to login if the URL was not found
            $urlRouterProvider.otherwise("/home");



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
                    templateUrl: '/views/dashboard_list.html'
                })
                .state('dashboardSingle', {
                    url: '/dashboard-single/:id',
                    controller: 'dashboardSingleCtrl',
                    templateUrl: '/views/dashboard_single.html'
                })
                .state('register', {
                    url: '/register',
                    controller: 'registerCtrl',
                    templateUrl: '/views/register.html'
                }).state('activity', {
                    url: '/activity',
                    controller: 'activityCtrl',
                    templateUrl: '/views/activity.html'
                })
                .state('activity.detail', {
                    url: '/detail',
                    controller: 'activityCtrl',
                    templateUrl: '/views/activity-detail.html'
                })
                .state('activity.availability', {
                    url: '/availability',
                    controller: 'activityCtrl',
                    templateUrl: '/views/activity-availability.html'
                }).state('activity.place', {
                    url: '/place',
                    controller: 'activityCtrl',
                    templateUrl: '/views/activity-place.html'
                })
                .state('activity.price', {
                    url: '/price',
                    controller: 'activityCtrl',
                    templateUrl: '/views/activity-price.html'
                })
                .state('chat', {
                    url: '/chat/:id/:to',
                    controller: 'chatCtrl',
                    templateUrl: '/views/chat.html'
                }).state('search', {
                    url: '/search',
                    controller: 'searchCtrl',
                    templateUrl: '/views/search.html'
                });

        }
    ]
);