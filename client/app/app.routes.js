(function (angular) {
    'use strict';

    angular.module('emPlusApp')
        .value('$routerRootComponent', 'emPlusApp');

    angular.module('emPlusApp').component('emPlusApp', {
        templateUrl    : 'app/index.html'
    })
})(angular);