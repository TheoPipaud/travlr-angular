/**
 * Created by shen on 06/06/14.
 */
/**
 * Created by shen on 06/06/14.
 */
/**
 * Auth interceptor for HTTP and Socket request. This interceptor will add required
 * JWT (Json Web Token) token to each requests. That token is validated in server side
 * application.
 *
 * @see http://angular-tips.com/blog/2014/05/json-web-tokens-introduction/
 * @see http://angular-tips.com/blog/2014/05/json-web-tokens-examples/
 */
angular.module('app.interceptors.auth', [])
    .factory('AuthInterceptor',
    [
        '$q', '$injector',
        function ($q, $injector) {
            return {
                /**
                 * Interceptor method for $http requests. Main purpose of this method is to add JWT token
                 * to every request that application does.
                 *
                 * @param   {*} config
                 *
                 * @returns {*}
                 */
                request: function (config) {
 
                    if (config.url.indexOf('api.giphy.com') == -1 && config.url.indexOf('facebook.com') == -1 && config.url.indexOf('icecomm') == -1 && config.url.indexOf('amazonaws.com') == -1 && config.url.indexOf('google') == -1) {
 
                        var token;
 
                        if (localStorage.getItem('travlr_token')) {
                            token = JSON.parse(localStorage.getItem('travlr_token')).hash;
                        }
 
                        // Yeah we have a token
                        if (token) {
                            if (!config.data) {
                                config.data = {};
                            }
 
                            /**
                             * Set token to actual data and headers. Note that we need both ways because of
                             * socket cannot modify headers anyway. These values are cleaned up in backend
                             * side policy (middleware).
                             */
                            config.data.token = token;
                            config.headers.Authorization = 'Bearer ' + token;
                        }
                    }
                    else {
                        delete config.headers.Authorization;
                    }
 
                    return config;
                },
 
                /**
                 * Interceptor method that is triggered whenever response error occurs on $http requests.
                 *
                 * @param   {*} response
                 *
                 * @returns {Promise}
                 */
                responseError: function (response) {
                    console.log('GOT 401 OR 403');
                    console.log(response);
                    if ((response.status === 401 || response.status === 403)) {

                        $injector.get('$state').go('home');
                    }
 
                    return $q.reject(response);
                }
            };
        }
    ]
);