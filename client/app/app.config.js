(function (app) {
    'use strict';
    app.config(Config);

    Config.$inject = ['$locationProvider'];

    function Config($locationProvider) {
        $locationProvider.html5Mode(true);
    }

    var api_domain = 'http://localhost:3000';

    app.constant('APP_API', {
        new_feed : api_domain + '/new-feed'
    });

})(angular.module('app'));