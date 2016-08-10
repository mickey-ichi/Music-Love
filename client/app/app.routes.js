(function (angular) {
    'use strict';

    angular.module('emPlusApp')
        .value('$routerRootComponent', 'emPlusApp');

    angular.module('emPlusApp').component('emPlusApp', {
        templateUrl    : 'app/index.html',
        controller     : AppController,
        controllerAs   : 'appLove',
        $routeConfig: [
            {path: '/news-feed', component: 'newsFeed', name: 'NewsFeed', useAsDefault: true},
        ]
    });

    AppController.$inject = ['$mdSidenav'];
    
    function AppController($mdSidenav) {
        var appLove = this;
        appLove.showSearch = false;
        
        appLove.toggleList = function () {
            $mdSidenav('listCategory').toggle();
        }
    }
})(angular);