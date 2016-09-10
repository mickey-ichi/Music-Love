(function (app) {
    'use strict';

    app.value('$routerRootComponent', 'emPlusApp');

    app.component('emPlusApp', {
        templateUrl    : 'app/index.html',
        controller     : AppController,
        controllerAs   : 'appLove',
        $routeConfig: [
            {path: '/news-feed', component: 'newsFeed', name: 'NewsFeed', useAsDefault: true},
            {path: '/profile', component: 'profile', name: 'Profile'}
        ]
    });

    AppController.$inject = [];
    
    function AppController($mdSidenav, $mdDialog) {
        var appLove = this;
    }
})(angular.module('emPlusApp'));