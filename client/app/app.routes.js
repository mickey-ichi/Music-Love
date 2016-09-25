(function (app) {
    'use strict';

    app.config(ConfigRouter);

    ConfigRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

    function ConfigRouter($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/not-found");

        $stateProvider
            .state('app', {
                url: "",
                templateUrl: "app/index.html",
                abstract: true
            })

            // News Feed
            .state('app.newsFeed', {
                url: "/",
                template: "<news-feed></news-feed>"
            })

            // Profile
            .state('app.profile', {
                url: "/profile",
                template: "<profile></profile>"
            })

        ;

        //Not Found
        $stateProvider
            .state('app.notFound', {
                url: "/not-found",
                templateUrl: "app/not-found/not-found.html"
            });
    }
})(angular.module('app'));