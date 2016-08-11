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

    AppController.$inject = ['$mdSidenav', '$mdDialog'];
    
    function AppController($mdSidenav, $mdDialog) {
        var appLove = this;
        appLove.showSearch = false;
        
        appLove.showLoginDialog = function (ev) {
            $mdDialog.show({
                    controller         : 'LoginDialogController',
                    controllerAs       : 'loginDialog',
                    templateUrl        : 'app/auth/login-dialog.html',
                    parent             : angular.element(document.body),
                    targetEvent        : ev,
                    clickOutsideToClose: true
                })
                .then(function (answer) {
                }, function () {
                });
        };

        appLove.toggleList = function () {
            $mdSidenav('listCategory').toggle();
        }
    }
})(angular);