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
                templateUrl: "app/news-feed/news-feed.html",
                controller: 'NewsFeedController',
                controllerAs: 'newsFeed'
            })

            // Profile
            .state('app.profile', {
                url: "/profile",
                templateUrl: "app/profile/profile.html",
                controller: 'ProfileController',
                controllerAs: 'profile'
            })

        ;

        //Not Found
        $stateProvider.state('app.notFound', {
            url: "/not-found",
            templateUrl: "app/not-found/not-found.html"

        });
    }
})(angular.module('emPlusApp'));